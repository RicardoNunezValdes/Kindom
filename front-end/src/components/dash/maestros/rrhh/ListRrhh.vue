<template>
  <section  class="content">
  	<div class="col-md-12">
  	 	<div class="panel panel-default">
  		<div class="panel-heading">
        <h2>Listado de RRHH</h2>
      </div>
  			<div class="panel-body">
          <table id="lista-rrhh" class="table table-bordered table-hover dataTable"></table>
          <spinner id="spinner-box" :size="lg" :fixed="false" text="Procesando la petición, por favor espere." v-ref:spinner></spinner>
          <div class="col-md-12">
            <div class="input-group">
              <a class="btn btn-lg btn-success" v-link="{name:'newRrhh'}"><i class="ion-wand"></i> Nuevo RRHH</a>
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
      apiUrl: this.$store.state.serverURI + '/api/rrhh/list',
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
      ctx.tableObj = $('#lista-rrhh').DataTable(
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
            {data: 'run', title: 'RUN.', render (data, type, row) {
              return ctx.$root.formatRun(data)
            }},
            {data: 'nombre', title: 'Nombre'},
            {data: 'email', title: 'Email'}
          ],
          fnPreDrawCallback () {
            // ctx.$refs.spinner.show()
          },
          fnDrawCallback () {
            // ctx.$refs.spinner.hide()
          }
        })
      $('#lista-rrhh tbody').on('click', 'tr', function () {
        var cliente = ctx.tableObj.row(this).data()
        ctx.$route.router.go({name: 'editRrhh', params: {id: cliente.id}})
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