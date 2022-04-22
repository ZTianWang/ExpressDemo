import express from 'express'
import path from 'path'

const staticResource = express.Router()

// 通过path.join()方法拼接出静态资源的目录,__dirname为当前所在的目录
const __dirname = path.resolve()
const resourcePath = path.join(__dirname, 'public')

// 在use中间件中使用express.static()方法访问静态文件
// 若请求为访问一个静态资源,则在该中间件处理,否则调用next()传递给下一个中间件
// 访问静态资源的url:http://localhost:3000/sr/test.txt
staticResource.use(express.static(resourcePath))

staticResource.get('/', (req, res) => {
    res.send('不访问静态资源')
})

export default staticResource
