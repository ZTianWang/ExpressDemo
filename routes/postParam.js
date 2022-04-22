import { Router } from 'express'
//获取post请求的参数需先安装并引入body-parser第三方库
import bodyParser from 'body-parser'

import path from 'path'

const postParam = Router()

postParam.get('/',(req,res) => { 
    res.sendFile(path.join(path.resolve(),'public/formPage.html'))  //sendFile()方法：响应返回一个资源，参数为一个路径（推荐使用绝对路径）
 })

//拦截所有请求
// 必有参数extended: false -- 方法内部使用quertstring模块处理请求参数的格式
//                   true -- 方法内使用第三方模块qs处理请求参数的格式
// bodyParser.rilencoded方法内处理post参数，并将参数赋值给req.body属性，并传递给下一个中间件
postParam.use(bodyParser.urlencoded({ extended: false }))

// 此处使用post()方法
postParam.post('/add',(req,res) => { 
    //接收body-parser传递的post参数
    let param = req.body    
    res.send(param)  
 })

export default postParam