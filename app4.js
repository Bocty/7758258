const express = require('express')
const app = express()
// 如果一个中间件对所有路由都有效，就是全局中间件
// 如果一个中间件对某一路由有效，就是局部中间件
const mw = (req, res, next) => {
  console.log(123)
  next()
}
app.use(mw)
app.get('/a', (req, res) => {
  res.send('ok')
})
app.get('/b', (req, res) => {
  res.send('ojbk')
})
app.listen(3000, () => console.log('服务器开启成功'))
