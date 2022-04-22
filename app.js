//在入口程序引入express
import express from 'express'

import middleware from './routes/middelware.js'
import errMw from './routes/errorProcessMw.js'
import catchErr from './routes/catchErr.js'
import getParam from './routes/getParam.js'
import postParam from './routes/postParam.js'
import staticResource from './routes/staticResource.js'

//创建网站服务器
const app = express()

//监听端口（端口号：3000）
app.listen(3000, () => console.log('start listening...'))

app.get('/', (req, res) => {
    //send()会自动监测响应内容的类型
    //会自动设置http状态码
    //会自动设置响应的内容类型及编码
    res.send("<h3>Express Basic</h3>")
})

//响应发送一个对象
app.get('/list', (req, res) => {
    res.send({ name: 'Leon', age: 27 })
})

// 使用use()中间件定向路由
// 子路由使用express的Router模块

//中间件
app.use('/mw', middleware)

//错误处理中间件
app.use('/err', errMw)
//捕获异步函数错误
app.use('/catch', catchErr)

//获取get请求参数
app.use('/getp',getParam)

//获取post请求的参数
app.use('/postP',postParam)

// 访问静态资源
app.use('/sr',staticResource)