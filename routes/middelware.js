import {Router} from 'express'
import { nextTick } from 'process'

const middleware = Router()

//中间件：可对同一个请求进行多次处理

//  处理get请求的中间件：
//  通过next()方法将请求的控制权交给下一个中间件
middleware.get('/get', (req, res, next) => {
    req.name = "Leon"
    next()
})
middleware.get('/get', (req, res) => {
    res.send(req.name)
})

//use中间件：处理任何类型的请求的中间件
//作用：放在开头：判断登录状态等
//      放在最后：错误路径返回404

//无url参数的use方法：接收所有请求的中间件，应放在其他中间件前面否则前面接收到响应后不会执行到这里
middleware.use((req, res, next) => {
    console.log('请求走了app.use中间件')
    req.request = 'use'
    let isLogin = true
    if (isLogin) {
        next()
    } else {
        res.send('您还没有登录')
    }
})

// use()方法的参数可以是一个函数调用
function fn(obj) {
    return (req,res,next) => { 
        console.log('请求走了函数调用  '+obj.a);
        next()
     }
}
middleware.use(fn({a:1}))

middleware.use('/req', (req, res, next) => {
    res.send({ req: req.request, url: '/req' })
    console.log('请求走了url为/req的use中间件');
})
//中间间放在最后：设置res状态码为404（可链式调用）
middleware.use((req, res) => {
    res.status(404).send('404:网页没有找到！')
})

export default middleware