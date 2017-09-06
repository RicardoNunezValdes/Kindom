<template>
    <div class="col-sm-12" style="height: 38vh; overflow: auto; width: 100%;">
  	    <div class="col-sm-6 producto-item" v-for="producto in productosSugeridos">
  	    	<div class="col-sm-12">
  				<img v-bind:src="producto.src" width="100%" alt="">
  				{{ producto.descripcion | uppercase }}
  			</div>
      </div>
		</div>
</template>
<script>
export default {
  data () {
    return {
      productosSugeridos: [
        {id: 1, src: '/static/img/productos/shampoo.jpg', descripcion: 'Shampoo'},
        {id: 2, src: '/static/img/productos/shampoo.jpg', descripcion: 'Shampoo'},
        {id: 3, src: '/static/img/productos/shampoo.jpg', descripcion: 'Shampoo'},
        {id: 4, src: '/static/img/productos/shampoo.jpg', descripcion: 'Shampoo'}
      ]
    }
  },
  components: { }
}
</script>