<template>
		<div class="form-group" style="height:1vh;">
	        <div class="col-sm-12">
	            <select class="form-control">
	                <option>Categoría</option>
	                <option>2</option>
	                <option>3</option>
	                <option>4</option>
	                <option>5</option>
	            </select>
	        </div>
	    </div>
	    <div class="col-sm-12" style="height: 46vh; overflow: auto; width: 100%;">
		    <div class="col-sm-6 producto-item" v-for="producto in productos">
		    	<div class="col-sm-12" @click="addDetalleProducto(producto)">
					<div class="text-center"><img v-bind:src="producto.image" class="img-circle" width="50" height="50" alt=""></div>
					<div class="text-justify">{{ producto.descripcion | uppercase }}</div>
				</div>
			</div>
	    </div>
	    <div class="col-sm-12">
		    <div class="form-group">
	            <div class="input-group">
	                <input type="text" class="form-control" placeholder="Buscar servicio o producto">
	                <div class="input-group-addon"><i class="ti-search"></i></div>
	            </div>
	        </div>
	    </div>
</template>
<script>
export default {
  data () {
    return {
      productos: [],
      apiUrl: this.$store.state.serverURI,
      image: this.$store.state.serverURI + '/images/empty.jpg'
    }
  },
  components: { },
  methods: {
    addDetalleProducto (producto) {
      var context = this
      var detalleComponent = context.$parent.$children[2]
      var prodCantidad = 1
      var addProd = true
      detalleComponent.productos.forEach(function (prod) {
        if (prod.id === producto.id) {
          prod.cantidad++
          addProd = false
        }
      })
      if (addProd) {
        detalleComponent.productos.push({
          id: producto.id,
          categoria_id: producto.categoria_id,
          descripcion: producto.descripcion,
          cantidad: prodCantidad,
          precio: producto.precio,
          impuesto: producto.impuesto,
          emite_boleta: producto.emite_boleta,
          image: producto.image
        })
      }
      detalleComponent.calculeTotales()
    },
    getProductos () {
      var ctx = this
      ctx.$root.callAPI('GET', `${ctx.apiUrl}/api/productos`).then(function (response) {
        const data = response.data
        if (data.success) {
          data.data.forEach(function (producto) {
            if (producto.image === null) producto.image = ctx.image
            else producto.image = `${ctx.apiUrl}/${producto.image}`
            ctx.productos.push(producto)
          })
        }
      })
    }
  }
}
</script>