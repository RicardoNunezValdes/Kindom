 /********************************************************
*	CREADO POR: 	Manuel Villafañe					*
*	FECHA CREACION: 11/06/2016							*
*	restringir URL tokenService.ensureAuthenticated		*
*********************************************************/
module.exports = function (app, Utils, moment, tokenService, RegionModel, ProvinciaModel, ComunaModel) {

	app.get('/api/comunas', /*tokenService.ensureAuthenticated,*/ function (req,res) {
		const conditions = {
							// attributes:['id', 'nombre', 'email', 'fecha_nacimiento', 'telefono']
							include: [
								{
									model: ProvinciaModel, as: 'provincia',
									include: [ {model: RegionModel, as: 'region'} ]
								}
							]
							
						}
		
		ComunaModel.findAll(conditions).then(function (response) {
			if (response) {
				var result = []
				response.forEach(function (comuna) {
					result.push(comuna.comuna_nombre + ' | ' + comuna.provincia.dataValues.region.dataValues.region_nombre + ' / ' + comuna.provincia.dataValues.provincia_nombre)
				})
				res.json(result)
			} else 						res.json([])
		}).catch(function (err) {
			console.log(err)
			res.json({success:false, error: err})
		})
	})
	
}