 /********************************************************
*	CREADO POR: 	Manuel Villafañe					*
*	FECHA CREACION: 11/06/2016							*
*	restringir URL tokenService.ensureAuthenticated		*
*********************************************************/
module.exports = function (app, Utils, moment, tokenService, productoModel, categoriaProductoModel) {

	app.get('/api/productos/sku/:sku', /*tokenService.ensureAuthenticated,*/ function (req,res) {
		var skuProduc = req.params.sku
		productoModel.findOne({ attributes:['id','descripcion'], where:{ sku: skuProduc } }).then(function (response) {
			if(response !== null) res.json({success: true, data: response})
			else res.json({success: false})
		}).catch(function (err) {
			res.json({ success: false, error: err })
		})
	})

	app.get('/api/productos/:id', /*tokenService.ensureAuthenticated,*/ function (req,res) {
		var idProduc = req.params.id
		productoModel.findOne({ where:{ id: idProduc } }).then(function (result) {
			res.json(result)
		}).catch(function (err) {
			res.json({ success: false, error: err })
		})
	})

	app.get('/api/productos', /*tokenService.ensureAuthenticated,*/ function (req, res) {
		const condition = {
			attributes: ['id', 'sku', 'descripcion', 'precio', 'descuento', 'impuesto', 'emite_boleta', 'image']
		}
		productoModel.findAll(condition).then(function (response) {
			if(response !== null ) res.json({ success: true, data: response })
			else res.json({ success: false })
		}).catch(function (err) {
			res.json({ success: false, error: err })
		})
	})

	app.post('/api/productos/list', /*tokenService.ensureAuthenticated,*/ function (req,res) {
		const params = req.body
		const columnSearch = params['order[0][column]']
		const conditions = {
							attributes:['id', 'sku', 'descripcion'],
							where: null,
							offset: parseInt(params.start),
							limit: parseInt(params.length),
							include: [{model:categoriaProductoModel, as:'categoria', attributes:['id', 'descripcion']}]							
							//order: [ [ params['columns['+columnSearch+'][data]'] , params['order[0][dir]']] ]
						}
		if(params['search[value]'].length > 0 ){
			var like = {$like: '%' + params['search[value]'] + '%' }
			conditions.where = { $or: [ {sku: like}, {descripcion: like} ] }
		}

		productoModel.findAndCountAll(conditions).then(function (response) {
			if(response.count > 0 ) 	res.json(  {draw:params.draw, recordsTotal: response.count, recordsFiltered: response.count, data: response.rows} )
			else 						res.json({draw:0, recordsTotal: 0, recordsFiltered: 0, data: []}) 
		}).catch(function (err) {
			console.log(err)
			res.json({success:false, error: err})
		})
	})

	app.post('/api/productos/create_update', /*tokenService.ensureAuthenticated,*/ function (req, res) {
		var params = req.body

		if(req.files != null){
			const imgName = req.files.image.name.split('.')
			const imageName = imgName[0].split(' ').join('_') + moment().format('DMYYYYHmmSSS') + '.' + imgName[1]
			const imageContent = req.files.image.data

			Utils.writeFile(`${basePath}public/images/${imageName}`, imageContent, function (error) {
				if(error == null) params['image'] = 'images/' + imageName
				else{
					res.status(410).send({error_message: response})
					throw new Error(error)
				}
			})
		}

		const condition = { where: { $or: [{id: params.id}, {sku: params.sku}] }, defaults: params }
		delete params.id
		productoModel.findOrCreate(condition).spread(function (impresora, created) {
			if(!created){
				delete condition.defaults;
				productoModel.update(params,condition).then(function () {
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