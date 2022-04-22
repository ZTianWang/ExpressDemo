import {Router} from 'express'

import fs from 'fs'

//错误处理中间间：
//  用于集中处理一些错误如文件读取失败、数据库连接失败等
//  只能处理同步代码产生的错误
const errProceMw = Router()

//手动抛出一个错误
errProceMw.get('/',(req,res) => { 
    // throw new Error('发生了错误')
    res.send('程序正常执行')
 })

 errProceMw.get('/index',(req,res,next) => { 
     //文件流读取文件, 回调函数为读取完成后对结果或错误操作
     fs.readFile('./public/test1.txt','utf8', (err,result)=>{
         if(err){
             next(err)  //next()方法中带参数表示携带错误信息
         }else{
             res.send(result)
         }
     })
  })

//第一个参数为错误
errProceMw.use((err,req,res,next) => { 
    res.status(500).send(err.message)
 })

 export default errProceMw

