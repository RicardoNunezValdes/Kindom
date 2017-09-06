<template>
<div class="container-fluid">
  <div class="col-md-8 col-md-offset-2">
    <div class="panel panel-default">
    <div class="panel-heading">
      <h2>
        Nuevo RRHH | <b>: {{ rrhh.nombre }}</b>
      </h2> 
      <small>Campos con <b>(*)</b> son obligatorios.</small>
    </div>
      <div class="panel-body">
        <div class="col-md-12">

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-code-working"></i> RUT. <b>(*)</b></label>
              <input class="form-control" type="text" placeholder="RUT" v-model="rrhh.run" @blur="setFormatRun(rrhh.run)">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Nombre/Apellidos. <b>(*)</b></label>
              <input class="form-control" type="text" placeholder="Nombre y apellidos" v-model="rrhh.nombre">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Email. <b>(*)</b></label>
              <input class="form-control" type="text" placeholder="Email" v-model="rrhh.email">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Teléfono. <b>(*)</b></label>
              <input class="form-control" type="text" placeholder="Teléfono" v-model="rrhh.telefono">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Dirección. <b>(*)</b></label>
              <input class="form-control" type="text" placeholder="Dirección" v-model="rrhh.direccion">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Nº De cuenta bancaria. <b>(*)</b></label>
              <input class="form-control" type="text" placeholder="Nº De cuenta bancaria" v-model="rrhh.nro_cuenta">
            </div>
          </div>
          

          <div class="col-md-12 pull-left">
            <div class="col-md-6 pull-left">
              <div class="input-group">
                <a v-link="{name:'rrhh'}" class="btn btn-lg btn-warning"><i class="ion-ios-undo"></i> Volver</a>
              </div>
            </div>

            <div class="col-md-3 pull-right">
              <div class="input-group">
                <button class="btn btn-lg btn-success" @click="SaveRrhh"><i class="ion-wand"></i> Crear</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
   </div>

  <!-- ALERT !-->
  <alert :show.sync="modalShow" placement="top-right" duration="5000" type="danger" width="400px" dismissable>
    <span class="icon-ok-circled alert-icon-float-left"></span>
    <strong>{{alertTitle}}</strong>
    <p v-html="alertMessage"></p>
  </alert>
  <!-- FIN ALERT !-->




  <spinner id="spinner-box" :size="lg" :fixed="false" text="Procesando la petición, por favor espere." v-ref:spinner></spinner>
  </div>
  {{$data.fecha_nacimiento}}
</template>
<script>
import VueStrap from 'vue-strap'
import resource from 'vue-resource'

export default {
  data () {
    return {
      alertTitle: '',
      alertMessage: '',
      modalShow: false,
      apiUrl: this.$store.state.serverURI,
      rrhh: { nombre: null, run: null, email: null, telefono: null, direccion: null, nro_cuenta: null }
    }
  },
  computed: {},
  components: { 'typeahead': VueStrap.typeahead, 'alert': VueStrap.alert, 'spinner': VueStrap.spinner, resource },
  methods: {
    validateForm () {
      var ctx = this
      ctx.alertTitle = 'MENSAJE DE VALIDACIÓN'
      if (!ctx.$root.validateRun(ctx.rrhh.run)) {
        ctx.showAlert('Debe especificar un RUN. Correcto.')
        return false
      }
      if (!ctx.rrhh.nombre) {
        ctx.showAlert('Debe especificar el Nombre y Apellidos.')
        return false
      }
      if (!ctx.$root.validateEmail(ctx.rrhh.email)) {
        ctx.showAlert('Debe especificar un Email correcto.')
        return false
      }
      if (!ctx.rrhh.telefono) {
        ctx.showAlert('Debe especificar un Teléfono.')
        return false
      }
      if (!ctx.rrhh.direccion) {
        ctx.showAlert('Debe especificar una Dirección.')
        return false
      }
      if (!ctx.rrhh.nro_cuenta) {
        ctx.showAlert('Debe especificar un <b>Número de cuenta bancaria</b>.')
        return false
      }
      return true
    },
    // GUARDA LOS DATOS DEL PRODUCTO
    SaveRrhh () {
      var ctx = this
      if (!ctx.validateForm()) return false
      ctx.$root.callAPI('POST', `${ctx.apiUrl}/api/rrhh/create_update`, ctx.rrhh).then(function (response) {
        if (response.status === 200) {
          if (response.data.success) ctx.$route.router.go({name: 'rrhh'})
          else ctx.showAlert(response.data.error)
        }
      })
    },
    showAlert (msg) {
      var ctx = this
      if (typeof msg === 'object' && 'errors' in msg) ctx.alertMessage = `<b>Server side message</b><br> ${msg.message}`
      else ctx.alertMessage = msg
      ctx.modalShow = true
    },
    setFormatRun (run) {
      var ctx = this
      ctx.rrhh.run = ctx.$root.formatRun(run)
    }
  },
  ready () {
  }
}

</script>



