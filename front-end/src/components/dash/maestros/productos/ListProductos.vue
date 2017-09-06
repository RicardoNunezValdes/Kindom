<template>
  <section  class="content">
  	<div class="col-md-12">
  	 	<div class="panel panel-default">
  		<div class="panel-heading">
        <h2>Listado de productods</h2>
      </div>
  			<div class="panel-body">
          <table id="lista-productos" class="table table-bordered table-hover dataTable"></table>
          <spinner id="spinner-box" :size="lg" :fixed="false" text="Procesando la petición, por favor espere." v-ref:spinner></spinner>
          <div class="col-md-12">
            <div class="input-group">
              <a class="btn btn-lg btn-success" v-link="{name:'newProducto'}"><i class="ion-wand"></i> Nuevo producto</a>
            </div>
          </div>
  			</div>
  		</div>
  	 </div>
     <br style="clear:both;">
  </section>
</template>
<script>
import $ from 'jquery'
import VueStrap from 'vue-strap'

require('datatables.net')
require('datatables.net-bs')

export default {
  data () {
    return {
      listdata: null,
      apiUrl: this.$store.state.serverURI + '/api/productos/list',
      tableObj: null
    }
  },
  components: { 'spinner': VueStrap.spinner },
  methods: {
    nuevaOrden () {
      // ssss
    },
    reloadTable () {
      this.tableObj.ajax.reload()
    },
    getList () {
      var context = this
      context.tableObj = $('#lista-productos').DataTable(
        {
          processing: false,
          serverSide: true,
          ajax: {
            url: context.apiUrl,
            type: 'POST',
            headers: {
              'Authorization': window.localStorage.getItem('token')
            }
          },
          language: this.$store.state.tableLanguaje,
          columns: [
            {data: 'sku', title: 'Producto SKU'},
            {data: 'descripcion', title: 'Descripción'},
            {data: 'categoria.descripcion', title: 'Categoría'}
          ],
          fnPreDrawCallback () {
            // context.$refs.spinner.show()
          },
          fnDrawCallback () {
            // context.$refs.spinner.hide()
          }
        })
      $('#lista-productos tbody').on('click', 'tr', function () {
        var producto = context.tableObj.row(this).data()
        context.$route.router.go({name: 'editProducto', params: {id: producto.id}})
      })
      $.fn.dataTable.ext.errMode = function (settings, helpPage, message) {
        if (settings.jqXHR.status === 401 || settings.jqXHR.status === 403) context.$route.router.go({name: 'login'})
      }
    }
  },
  ready () {
    this.getList()
  }
}

</script>