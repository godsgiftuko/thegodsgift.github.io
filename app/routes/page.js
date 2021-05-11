(function (){
    'use strict'
    const controller = require('../controllers/web/index')

    const express = require('express')
    const page = express.Router()

    page.get('/', controller.index)
    
    module.exports = page
})()