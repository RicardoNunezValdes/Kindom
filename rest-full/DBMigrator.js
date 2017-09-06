const DBRelations   = require('./custom_modules/DBRelations')
const async         = require('async')
const md5           = require('md5')
const create_tables = true


/******************************* INICIO DEL MIGRADOR ***********************************/

async.waterfall(
	[	
		// createBancos,
		createFuenteContacto,
		// createTipoCuentaBancos,
		// createCategoriaProducto,
		// createProducto,
		createCliente,
		// createRrhh
	],
	function handleError(err) {
		if(err){
			console.log(err)
		}else{
			console.log("TODO BIEN")
		}
	}
)

/******************************* FUNCIONES DEL MIGRADOR ***********************************/
function createFuenteContacto (callback) {
	DBRelations.FuenteContactoModel.drop().then(function () {
		if(create_tables){
			DBRelations.FuenteContactoModel.sync().then(function () {
				DBRelations.FuenteContactoModel.bulkCreate(
									DBRelations.fuente_contacto_values
								).then(function () {
									callback(null)
								}).catch(function (error) {
									callback(error)
								})
			}).catch(function (error) {
				callback(error)
			})
		}else callback(null)
	})
}

function createBancos (callback) {
	DBRelations.BancosModel.drop().then(function () {
		if(create_tables){
			DBRelations.BancosModel.sync().then(function () {
				DBRelations.BancosModel.bulkCreate(
									DBRelations.bancos_values
								).then(function () {
									callback(null)
								}).catch(function (error) {
									callback(error)
								})
			}).catch(function (error) {
				callback(error)
			})
		}else callback(null)
	})
}

function createTipoCuentaBancos (callback) {
	DBRelations.TipoCuentaBancoModel.drop().then(function () {
		if(create_tables){
			DBRelations.TipoCuentaBancoModel.sync().then(function () {
				DBRelations.TipoCuentaBancoModel.bulkCreate(
									DBRelations.tipo_cuenta_banco_values
								).then(function () {
									callback(null)
								}).catch(function (error) {
									callback(error)
								})
			}).catch(function (error) {
				callback(error)
			})
		}else callback(null)
	})
}

function createCategoriaProducto (callback) {
	DBRelations.CategoriaProductoModel.drop().then(function () {
		if(create_tables){
			DBRelations.CategoriaProductoModel.sync().then(function () {
				DBRelations.CategoriaProductoModel.bulkCreate(
									DBRelations.categoria_productos_values
								).then(function () {
									callback(null)
								}).catch(function (error) {
									callback(error)
								})
			}).catch(function (error) {
				callback(error)
			})
		}else callback(null)
	})
}

function createProducto (callback) {
	DBRelations.ProductoModel.drop().then(function () {
		if(create_tables){
			DBRelations.ProductoModel.sync().then(function () {
				DBRelations.ProductoModel.bulkCreate(
									DBRelations.productos_values
								).then(function () {
									callback(null)
								}).catch(function (error) {
									callback(error)
								})
			}).catch(function (error) {
				callback(error)
			})
		}else callback(null)
	})
}

function createCliente (callback) {
	DBRelations.ClienteModel.drop().then(function () {
		if(create_tables){
			DBRelations.ClienteModel.sync().then(function () {
				callback(null)				
			}).catch(function (error) {
				callback(error)
			})
		}else callback(null)
	})	
}

function createRrhh (callback) {
	DBRelations.RrhhModel.drop().then(function () {
		if(create_tables){
			DBRelations.RrhhModel.sync().then(function () {
				callback(null)				
			}).catch(function (error) {
				callback(error)
			})
		}else callback(null)
	})	
}
