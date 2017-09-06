const express        = require('express')
const path           = require('path')
const logger         = require('morgan')
const cookieParser   = require('cookie-parser')
const bodyParser     = require('body-parser')
const routes         = require('./routes/index')
const app            = express()
const async          = require('async')
const md5            = require('md5')
const expressSession = require('express-session')
const fileUpload     = require('express-fileupload')
const moment         = require('moment')
global['basePath']   = global.process.env.PWD+'/'

/*---------------------------------------------------------*/
const tokenService = require('./custom_modules/tokenService')
const DB           = require('./custom_modules/DB')
const Utils        = require('./custom_modules/Utils')
/*---------------------------------------------------------*/
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
app.use(logger('dev'))
app.use(cookieParser())
app.use(expressSession({secret:'somesecrettokenhere',resave: false,saveUninitialized: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.all('*', function(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*')
    //res.set('Access-Control-Allow-Origin', 'http://localhost')
    //res.set('Access-Control-Allow-Credentials', true)
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization')
    if ('OPTIONS' == req.method) return res.sendStatus(200)
    next()
  })

/*--------------------------- MODELOS ------------------------------*/
const DBRelations   = require('./custom_modules/DBRelations')

/*--------------------------- CONFIGURACION DE RUTAS ------------------------------*/

require('./routes/apiProducto')(app, Utils, moment, tokenService, DBRelations.ProductoModel, DBRelations.CategoriaProductoModel)
require('./routes/apiCategoriaProducto')(app, tokenService, DBRelations.CategoriaProductoModel)
require('./routes/apiCliente')(app, Utils, moment, tokenService, DBRelations.ClienteModel)
require('./routes/apiRrhh')(app, Utils, moment, tokenService, DBRelations.RrhhModel)
require('./routes/apiComuna')(app, Utils, moment, tokenService, DBRelations.RegionModel, DBRelations.ProvinciaModel, DBRelations.ComunaModel)
require('./routes/apiFuenteContacto')(app, Utils, moment, tokenService, DBRelations.FuenteContactoModel)
require('./routes/apiBanco')(app, Utils, moment, tokenService, DBRelations.BancosModel)


/*--------------------------- FIN CONFIGURACION DE RUTAS ------------------------------*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})


module.exports = app


