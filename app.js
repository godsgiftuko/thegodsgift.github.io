(function() {
    'use strict'

  /**
  *  DEPENDENCIES
  */
   const createError = require('http-errors')
   const express = require('express')
   const path = require('path')
   const cookieParser = require('cookie-parser')
   const exHbs = require('express-handlebars')
   const logger = require('morgan')
   require('dotenv').config()
   /**
   *  CUSTOM MODULES
   */
  const PORT = process.env.PORT || 7000
  
  const pageRouter = require('./app/routes/page')

  const app = express()
  
  // view engine setup
  app.engine('hbs', exHbs({ extname: 'hbs', defaultLayout: 'main', layoutsDir: './views/layouts' }))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'hbs')

  // app.use(logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, './')))

  app.use('/', pageRouter)

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404))
  })

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    // res.locals.message = err.message
    // res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('templates/error', {
      data: {
        title: 'Sever error',
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
      }
    })
  })

  app.listen(PORT, () => console.log(`Server fired on port ${PORT}`))

})()

