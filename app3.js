const express = require('express')
const app = express()
const mw = (req, res, next) => {
  console.log(Date.now());
  next()
}
// middleware -->  mw
// req -> 请求报文对象
// res -> 响应报文对象
// next  -> 把当前中间件的控制权交给下一个人
// 定义了一个中间件
// 中间件的本质就是一个普通的函数，只不过函数有三个固定参数 req, res, next必须在中间件函数最后一行执行一下，把控制权交给下面的代码
// function mw(req, res, next) {
//   console.log(Date.now())
//   next()
// }
app.use(mw)
app.get('/a', (req, res) => {
  res.send('ok')
})
app.get('/b', (req, res) => {
  res.send('ojbk')
})
app.listen(3000, () => console.log('服务器开启成功'))