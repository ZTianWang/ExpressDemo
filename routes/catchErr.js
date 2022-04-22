import { Router } from 'express'
import fs from 'fs'
import { promisify } from 'util'

//try catch:
//  可以捕获Promise对象的异步API发生的异步‘函数’错误，以及其他同步代码的错误，但不能捕获其他类型的API发生的错误
//  发生错误不会导致程序中断
const catchErr = Router()

//将文件流读取包装为promise对象
const readFile = promisify(fs.readFile)

//将可能出错的代码放入try中
// catch的参数为错误对象
// async await关键字：异步函数
catchErr.get('/', async (req, res, next) => {
    try {
        let result = await readFile('./public/test2.txt')
        // res.send(result.toString())
    } catch (error) {
        next(error)     //手动触发错误处理中间件
    }
})

catchErr.use((err,req,res,next) => { 
    res.status(500).send(err.message)
 })

export default catchErr