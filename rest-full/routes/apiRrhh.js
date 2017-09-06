 /********************************************************
*	CREADO POR: 	Manuel Villafañe					*
*	FECHA CREACION: 11/06/2016							*
*	restringir URL tokenService.ensureAuthenticated		*
*********************************************************/
module.exports = function (app, Utils, moment, tokenService, RrhhModel) {

	app.get('/api/rrhh/:id', /*tokenService.ensureAuthenticated,*/ function (req,res) {
		var idRrhh = req.params.id
		const attributes = [ 'id', 'nombre', 'run', 'email', 'telefono', 'direccion', 'nro_cuenta' ]
		const condition = 	{ 
								attributes: attributes,
								where:{ id: idRrhh } 
							}
		RrhhModel.findOne(condition).then(function (result) {
			res.json(result)
		}).catch(function (err) {
			res.json({ success: false, error: err })
		})
	})

	app.post('/api/rrhh/list', /*tokenService.ensureAuthenticated,*/ function (req,res) {
		const params = req.body
		const columnSearch = params['order[0][column]']
		const conditions = {
							attributes:['id', 'nombre', 'run', 'email'],
							where: null,
							offset: parseInt(params.start),
							limit: parseInt(params.length),
						}
		if(params['search[value]'].length > 0 ){
			var like = {$like: '%' + params['search[value]'] + '%' }
			conditions.where = { $or: [ {nombre: like}, {email: like}, {run: like} ] }
		}

		RrhhModel.findAndCountAll(conditions).then(function (response) {
			if(response.count > 0 ) 	res.json(  {draw:params.draw, recordsTotal: response.count, recordsFiltered: response.count, data: response.rows} )
			else 						res.json({draw:0, recordsTotal: 0, recordsFiltered: 0, data: []}) 
		}).catch(function (err) {
			console.log(err)
			res.json({success:false, error: err})
		})
	})

	app.post('/api/rrhh/create_update', /*tokenService.ensureAuthenticated,*/ function (req, res) {
		var params = req.body

		params.run = params.run.replace(/\.|\-/g, '')
		const condition = { where: { $or: [{id: params.id}, {run: params.run}] }, defaults: params }
		delete params.id
		RrhhModel.findOrCreate(condition).spread(function (impresora, created) {
			if(!created){
				delete condition.defaults;
				RrhhModel.update(params,condition).then(function () {
					res.json({success:true})
				}).catch(function (err) {
					res.json({success:false,error:err})
				});
			}else{
				res.json({success:true})
			}
		}).catch(function (err) {
			res.json({success:false,error:err})
		})
	})
	
}