 /********************************************************
*	CREADO POR: 	Manuel Villafañe					*
*	FECHA CREACION: 11/06/2016							*
*	restringir URL tokenService.ensureAuthenticated		*
*********************************************************/
module.exports = function (app, tokenService, categoriaProductoModel) {

	app.get('/api/categorias', /*tokenService.ensureAuthenticated,*/ function (req, res) {
		categoriaProductoModel.findAll().then(function (response) {
			res.json({success:true , categorias:response})
		})
	})

	
}