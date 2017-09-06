<template>
  <section  class="content">
  	<div class="col-md-12">
  	 	<div class="panel panel-default">
  		<div class="panel-heading">
        <h2>Listado de clientes</h2>
      </div>
  			<div class="panel-body">
          <table id="lista-clientes" class="table table-bordered table-hover dataTable"></table>
          <spinner id="spinner-box" :size="lg" :fixed="false" text="Procesando la petición, por favor espere." v-ref:spinner></spinner>
          <div class="col-md-12">
            <div class="input-group">
              <a class="btn btn-lg btn-success" v-link="{name:'newCliente'}"><i class="ion-wand"></i> Nuevo cliente</a>
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
import moment from 'moment'

require('datatables.net')
require('datatables.net-bs')

export default {
  data () {
    return {
      listdata: null,
      apiUrl: this.$store.state.serverURI + '/api/clientes/list',
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
      var ctx = this
      ctx.tableObj = $('#lista-clientes').DataTable(
        {
          processing: false,
          serverSide: true,
          ajax: {
            url: ctx.apiUrl,
            type: 'POST',
            headers: {
              'Authorization': window.localStorage.getItem('token')
            }
          },
          language: this.$store.state.tableLanguaje,
          columns: [
            {data: 'nombre', title: 'Nombre'},
            {data: 'email', title: 'Email'},
            {data: 'telefono', title: 'Teléfono'},
            {data: 'fecha_nacimiento', title: 'Fecha nacimiento', render (data, type, row) {
              return moment(data).format('DD/MM/Y')
            }}
          ],
          fnPreDrawCallback () {
            // ctx.$refs.spinner.show()
          },
          fnDrawCallback () {
            // ctx.$refs.spinner.hide()
          }
        })
      $('#lista-clientes tbody').on('click', 'tr', function () {
        var cliente = ctx.tableObj.row(this).data()
        ctx.$route.router.go({name: 'editCliente', params: {id: cliente.id}})
      })
      $.fn.dataTable.ext.errMode = function (settings, helpPage, message) {
        if (settings.jqXHR.status === 401 || settings.jqXHR.status === 403) ctx.$route.router.go({name: 'login'})
      }
    }
  },
  ready () {
    this.getList()
  }
}

</script>