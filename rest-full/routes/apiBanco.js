 /********************************************************
*	CREADO POR: 	Manuel Villafañe					*
*	FECHA CREACION: 11/06/2016							*
*	restringir URL tokenService.ensureAuthenticated		*
*********************************************************/
module.exports = function (app, Utils, moment, tokenService, BancosModel) {

	app.get('/api/bancos', /*tokenService.ensureAuthenticated,*/ function (req,res) {
		const conditions = {
							attributes:['id', 'nombre']
						}
		
		BancosModel.findAll(conditions).then(function (response) {
			if (response) 	res.json(response)
			else 			res.json([])
		}).catch(function (err) {
			console.log(err)
			res.json({success:false, error: err})
		})
	})
	
}