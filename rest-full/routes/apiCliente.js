 /********************************************************
*	CREADO POR: 	Manuel Villafañe					*
*	FECHA CREACION: 11/06/2016							*
*	restringir URL tokenService.ensureAuthenticated		*
*********************************************************/
module.exports = function (app, Utils, moment, tokenService, ClienteModel, FuenteContactoModel) {

	app.get('/api/cliente/:id', /*tokenService.ensureAuthenticated,*/ function (req,res) {
		var idCliente = req.params.id
		const attributes = [ 'id', 'nombre', 'email', 'telefono', 'comuna', 'fecha_nacimiento', 'observacion', 'fuente_contacto_id' ]
		const condition = 	{ 
								attributes: attributes,
								where:{ id: idCliente },
								include: [
									{model: FuenteContactoModel, as: 'fuente_contacto'}
								] 
							}
		ClienteModel.findOne(condition).then(function (result) {
			res.json(result)
		}).catch(function (err) {
			res.json({ success: false, error: err })
		})
	})

	app.post('/api/clientes/list', /*tokenService.ensureAuthenticated,*/ function (req,res) {
		const params = req.body
		const columnSearch = params['order[0][column]']
		const conditions = {
							attributes:['id', 'nombre', 'email', 'fecha_nacimiento', 'telefono'],
							where: null,
							offset: parseInt(params.start),
							limit: parseInt(params.length),
						}
		if(params['search[value]'].length > 0 ){
			var like = {$like: '%' + params['search[value]'] + '%' }
			conditions.where = { $or: [ {nombre: like}, {email: like} ] }
		}

		ClienteModel.findAndCountAll(conditions).then(function (response) {
			if(response.count > 0 ) 	res.json(  {draw:params.draw, recordsTotal: response.count, recordsFiltered: response.count, data: response.rows} )
			else 						res.json({draw:0, recordsTotal: 0, recordsFiltered: 0, data: []}) 
		}).catch(function (err) {
			console.log(err)
			res.json({success:false, error: err})
		})
	})

	app.post('/api/clientes/create_update', /*tokenService.ensureAuthenticated,*/ function (req, res) {
		var params = req.body

		// params.run = params.run.replace(/\.|\-/g, '')
		const condition = { where: { $or: [{id: params.id}] }, defaults: params }
		delete params.id
		ClienteModel.findOrCreate(condition).spread(function (impresora, created) {
			if(!created){
				delete condition.defaults;
				ClienteModel.update(params,condition).then(function () {
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