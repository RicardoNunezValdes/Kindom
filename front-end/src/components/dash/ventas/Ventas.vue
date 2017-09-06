<template>
	<div class="container-fluid">
	    <div class="row">
	    	<div class="col-md-12">
	    		<div>
	    			<div class="col-md-3" style="height:93vh;">
	    				<calendario></calendario>
	    				
	    				<br style="clear:both;">
	    				<horas-reservadas></horas-reservadas>
					</div>

	    			<div class="col-md-6 detalle-facura" style="height:93vh;">
	    				<div class="col-md-12 detalle-facura" style="height:70vh;">
	    					<detalle-factura></detalle-factura>
	    				</div>
						<div class="col-md-3 caja-notas-btn" style="height:20vh;">
							<div>NOTAS</div>
						</div>
						<div class="col-md-3 caja-guardar-btn" style="height:20vh;">GUARDAR </div>
						<div class="col-md-3 caja-descuento-btn" style="height:20vh;">DESCUENTO </div>
						<div class="col-md-3 caja-cerrar-btn" style="height:20vh;">CERRAR VENTANA </div>
	    			</div>
	    			<div class="col-md-3" style="height:55vh;">
	    				<productos></productos>
	    			</div>
	    			<div class="col-md-3" style="height:38vh;">
	    				<productos-sugeridos></productos-sugeridos>
	    			</div>
	    		<br style="clear:both;">
	    		</div>
	    	</div>
		</div>
</div>
</template>
<script>
import Calendario from './Calendario'
import HorasReservadas from './HorasReservadas'
import DetalleFactura from './DetalleFactura'
import Productos from './Productos'
import ProductosSugeridos from './ProductosSugeridos'

export default {
  data () {
    return {
      showProductos: false
    }
  },
  ready () {
    var ctx = this
    ctx.$children[3].getProductos()
  },
  components: { Calendario, HorasReservadas, DetalleFactura, Productos, ProductosSugeridos }
}
</script>
<style>
	.detalle-facura{
		background: #fff;
	}
</style>
