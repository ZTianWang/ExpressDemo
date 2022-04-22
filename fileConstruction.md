
## 初始化node项目：
mpn init -y

## 初始化git项目
    1.git init
    2. 关联远程库 git remote add origin <url>
    3. 本地库与远程库同步：
        git pull --rebase origin main
        git push -u origin main

## 项目文件结构
|-- XX_project
    |-- app.js              //入口文件[manual]
    |-- public/             //静态资源文件夹[manual]
    |-- views/              //HTML网页文件夹[manual]
    |-- routes/             //模块/路由文件夹[manual]

    |-- .git                //git仓库信息文件夹[auto]
    |-- .gitignore          //git忽略文件[auto]
    |-- README.md           //描述文件[auto]
    |-- package.json        //项目配置文件[auto]

## 项目启动命令（如需要）
将入口文件改为app.js
    将"main": "index.js", 改为 "main": "app.js",
    在"scripts"中添加："start": "nodemon app.js"

## 安装依赖
