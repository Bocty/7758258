// 第一步 创建一个路由对象
// 第二步 挂载路由
// 用户方面的路由user 文章方面的路由article
const express = require('express')
const router = express.Router()

router.get('/list', (req, res) => {
  res.send('文章列表')
})
router.get('/detail', (req, res) => {
  res.send('文章详情')
})
module.exports = router