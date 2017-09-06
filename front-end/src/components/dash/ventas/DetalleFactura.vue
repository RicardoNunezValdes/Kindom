<template>
	<div style="height: 50vh; width: 100%; overflow: auto;border-bottom: 2px solid #000; margin-bottom: 5px;">
		<table class="table table-hover">
			<tr>
				<td></td>
				<th>Producto</th>
				<th>Precio unitario</th>
				<th>Cantidad</th>
				<th>Total</th>
				<th></th>
			</tr>
			<tr v-for="producto in productos">
				<td><img class="img-circle" v-bind:src="producto.image" style="border: 1px solid #ccc;" height="50" width="50" alt=""></td>
				<td>{{ producto.descripcion }}</td>
				<td> <h2 class="precio">{{producto.precio | currency $ 0}}</h2> </td>
				<td>
					<div class="input-group"> <span class="input-group-addon text-box">$</span>
	                  <input type="text" v-model="producto.cantidad" class="form-control text-box" @change="calculeTotales">
	                </div>
				</td>
				<td><h2 class="precio">{{ (producto.cantidad * producto.precio) | currency $ 0}}</h2></td>
				<td><a class="btn btn-sm btn-danger" @click="removeProduct($index)"><i class="ti-close"></i></a></td>
			</tr>
		</table>
	</div>
	<div style="height: 20vh; width: 100%; overflow: auto;">
		<div class="col-sm-6">
			<div class="col-sm-12">
				<div class="form-group m-b-0">
					<div class="input-group bootstrap-touchspin">
						<input type="text" class="form-control text-box" placeholder="Buscar un cliente">
						<span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span>
						<span class="input-group-btn">
							<a class="btn btn-default btn-outline bootstrap-touchspin-up" type="button"><i class="ti-plus"></i></a></span>
					</div>
				</div>
			</div>
			<div class="col-sm-12"><label>Cliente</label></div>			
			<div class="col-sm-12"></div>			
		</div>
		<div class="col-sm-6">
			<div class="col-sm-12"><h1 class="totales">SubTotal: {{ totales.subTotal | currency $ 0 }}</h1></div>
			<div class="col-sm-12"><h1 class="totales">Desc. {{ totales.descuento | currency $ 0 }}</h1></div>
			<div class="col-sm-12"><h1 class="totales">Total {{ totales.total | currency $ 0 }}</h1></div>
		</div>
	</div>

</template>
<script>
export default {
  data () {
    return {
      productos: [ ],
      totales: {subTotal: 0, descuento: 0, total: 0}
    }
  },
  components: { },
  methods: {
    removeProduct (index) {
      var context = this
      context.productos.splice(index, 1)
      this.calculeTotales()
    },
    calculeTotales () {
      var context = this
      for (var i in context.totales) context.totales[i] = 0
      context.productos.forEach(function (producto) {
        context.totales.subTotal += (producto.cantidad * producto.precio)
        context.totales.total += (producto.cantidad * producto.precio)
      })
    }
  },
  ready () {
    this.calculeTotales()
  }
}
</script>
<style>
	.totales{
		margin: 2px 0 !important;
		color: #000 !important;
		font-weight: bold;
		font-size: 170%;
	}
	.precio{
		color: #000;
		font-weight: bold;
		margin: 0 !important; 
	}
	.text-box{
		background: none;
	}
</style>