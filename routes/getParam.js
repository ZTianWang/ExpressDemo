import { Router } from 'express'

// url:http://localhost:3000/getp?id=1&name=Leon&gender=27
const getParams = Router()

getParams.get('/', (req, res) => {
    res.send(req.query)     // -> {"id": "1","name": "Leon", "gender": "27"}
})

// 通过get请求获取路由参数：若不传参则匹配不到路由
getParams.get('/:id/:name',(req,res) => { 
    // 通过req.params获取路由参数
    let param = req.params
    res.send(param)
 })

export default getParams