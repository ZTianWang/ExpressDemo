import express, { Router } from 'express'
//获取post请求的参数需先安装并引入body-parser第三方库(弃用)
// import bodyParser from 'body-parser'

import path from 'path'

const postParam = Router()

// 先返回一个有form的页面
postParam.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'public/formPage.html'))  //sendFile()方法：响应返回一个资源，参数为一个路径（推荐使用绝对路径）
})

/* 拦截所有请求，用两个中间件解析post请求中的参数（都得写否则无法获得req.body属性），并传递给下一个中间件 */

/* 
*  1.使用urlencoded()方法解析表单中的post参数,并将参数赋值给req.body属性,传递给下一个中间件：
*  urlencoded()方法必有参数extended
* 				false -- 方法内部使用quertstring模块处理请求参数的格式
*               true -- 方法内使用第三方模块qs处理请求参数的格式
*/

/* 通过bodyPaser解析的方式：*/
// postParam.use(bodyParser.urlencoded({ extended: false }))
/* 使用express解析： */
postParam.use(express.urlencoded({ extended: false }))

// 此处使用post()方法
// postParam.post('/add', (req, res) => {
//     //接收body-parser传递的post参数
//     let param = req.body
//     res.send(param)
// })

/* 2.使用json()方法解析json格式的post参数：*/
/* 通过bodyPaser解析的方式：*/
// postParam.use(bodyParser.json())
/* 使用express内置json()方法解析post参数 */
postParam.use(express.json())

postParam.post('/add',(req,res) => { 
    //接收body-parser传递的post参数
    let param = req.body
    console.log(param);
    // res.send(param)
    // 以json格式发送响应
    res.json(param)
    // end()用于返回没有任何数据的响应
    // res.end()
 })

export default postParam