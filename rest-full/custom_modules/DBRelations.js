const DB              = require('./DB')
const constra_enabled = false

/******************************* DEFAULT VALUES ****************************/
const productos_values           = require('./../json/productos').get()
const categoria_productos_values = require('./../json/categoria_productos').get()
const bancos_values              = require('./../json/bancos').get()
const tipo_cuenta_banco_values   = require('./../json/tipo_cuenta_banco').get()
const fuente_contacto_values     = require('./../json/fuente_contacto').get()
/******************************* MODELOS ***********************************/


const ProductoModel          = require('./../models/ProductoModel')(DB.dbConnected,DB.Sequelize)
const CategoriaProductoModel = require('./../models/CategoriaProductoModel')(DB.dbConnected,DB.Sequelize)
const ClienteModel           = require('./../models/ClienteModel')(DB.dbConnected,DB.Sequelize)
const RrhhModel              = require('./../models/RrhhModel')(DB.dbConnected,DB.Sequelize)
const BancosModel            = require('./../models/BancosModel')(DB.dbConnected,DB.Sequelize)
const TipoCuentaBancoModel   = require('./../models/TipoCuentaBancoModel')(DB.dbConnected,DB.Sequelize)
// REGION, PROVINCIA Y COMUNA
const RegionModel         = require('./../models/RegionModel')(DB.dbConnected,DB.Sequelize)
const ProvinciaModel      = require('./../models/ProvinciaModel')(DB.dbConnected,DB.Sequelize)
const ComunaModel         = require('./../models/ComunaModel')(DB.dbConnected,DB.Sequelize)

const FuenteContactoModel = require('./../models/FuenteContactoModel')(DB.dbConnected,DB.Sequelize)
/******************************* RELACIONES DE MODELOS ***********************************/
ClienteModel.belongsTo( 	FuenteContactoModel, {constraints: constra_enabled,as:'fuente_contacto', 			foreignKey:'fuente_contacto_id'	})

ProductoModel.belongsTo( 	CategoriaProductoModel, {constraints: constra_enabled,as:'categoria', 			foreignKey:'categoria_producto_id'	})
RrhhModel.belongsTo( 		BancosModel, 			{constraints: constra_enabled,as:'banco', 				foreignKey:'banco_id'				})
RrhhModel.belongsTo( 		TipoCuentaBancoModel, 	{constraints: constra_enabled,as:'tipo_cuenta_banco', 	foreignKey:'tipo_cuenta_banco_id'	})

ComunaModel.belongsTo( 		ProvinciaModel, {constraints: constra_enabled,as:'provincia', 	foreignKey:'provincia_id'	})
ProvinciaModel.belongsTo( 	RegionModel, 	{constraints: constra_enabled,as:'region', 		foreignKey:'region_id'		})

/******************************************************************************************/


exports.ProductoModel              = ProductoModel   
exports.CategoriaProductoModel     = CategoriaProductoModel   
exports.ClienteModel               = ClienteModel
exports.RrhhModel                  = RrhhModel
exports.BancosModel                = BancosModel
exports.TipoCuentaBancoModel       = TipoCuentaBancoModel

exports.RegionModel                = RegionModel
exports.ProvinciaModel             = ProvinciaModel
exports.ComunaModel                = ComunaModel

exports.FuenteContactoModel        = FuenteContactoModel

exports.productos_values           = productos_values     
exports.categoria_productos_values = categoria_productos_values     
exports.bancos_values              = bancos_values
exports.tipo_cuenta_banco_values   = tipo_cuenta_banco_values
exports.fuente_contacto_values     = fuente_contacto_values


