// const path = require('path')

const express = require('express')
const adminData = require('./admin')

// const rootDir = require('../util/path')

const router = express.Router()

router.get('/', (req, res) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
  const products = adminData.products
  res.render('shop', { prods: products, docTitle: 'Shop' })
})

module.exports = router
