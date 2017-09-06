<template>
<div class="container-fluid">
  <div class="col-md-8 col-md-offset-2">
    <div class="panel panel-default">
    <div class="panel-heading">
      <h2>
        Editar cliente | <b>: {{ cliente.nombre }}</b>
      </h2> 
      <small>Campos con <b>(*)</b> son obligatorios.</small>
    </div>
      <div class="panel-body">
        <div class="col-md-12">

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Nombre/Apellidos. <b>(*)</b></label>
              <input class="form-control" type="text" placeholder="Nombre y apellidos" v-model="cliente.nombre">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Email. <b>(*)</b></label>
              <input class="form-control" type="text" placeholder="Email" v-model="cliente.email">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Teléfono. <b>(*)</b></label>
              <input class="form-control" type="text" placeholder="Teléfono" v-model="cliente.telefono">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Fecha de nacimiento. <b>(*)</b></label>
              <datepicker :time.sync="cliente.fecha_nacimiento" :option="dateOptions" :limit="dateLimit"></datepicker>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Comuna. <b>(*)</b></label>
              <typeahead 
                        :data="comunas" 
                        placeholder="Escriba el nombre de la comuna"
                        :on-hit="setComunaId"
                        :value="cliente.comuna"
                        >
                      </typeahead>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Como llego?. <b>(*)</b></label>
              <typeahead 
                        :data="fuenteContacto" 
                        placeholder="Escriba la fuente de contacto"
                        :on-hit="setFuenteContacto"
                        :value="cliente.fuente_contacto.descripcion"
                        >
                      </typeahead>
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label><i class="fa ion-code-working"></i> Observación.</label>
              <textarea class="form-control" v-model="cliente.observacion"></textarea>
            </div>
          </div>
          
          <div class="col-md-12 pull-left">
            <div class="col-md-6 pull-left">
              <div class="input-group">
                <a v-link="{name:'clientes'}" class="btn btn-lg btn-warning"><i class="ion-ios-undo"></i> Volver</a>
              </div>
            </div>

            <div class="col-md-3 pull-right">
              <div class="input-group">
                <button class="btn btn-lg btn-success" @click="SaveCliente"><i class="ion-wand"></i> Guardar</button>
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
  
</template>
<script>
import VueStrap from 'vue-strap'
import resource from 'vue-resource'
import datepicker from 'vue-datepicker/vue-datepicker-1.vue'
import moment from 'moment'

export default {
  data () {
    return {
      comunas: [],
      fuenteContacto: [],
      alertTitle: '',
      alertMessage: '',
      modalShow: false,
      apiUrl: this.$store.state.serverURI,
      cliente: { id: null, nombre: null, email: null, telefono: null, comuna: null, fecha_nacimiento: moment().format('DD/MM/Y'), observacion: null, fuente_contacto_id: null },
      dateOptions: this.$store.state.dateOptions,
      dateLimit: [{
        type: 'fromto',
        from: moment().subtract(90, 'years').format('YYYY-MM-DD'),
        to: moment().format('YYYY-MM-DD')
      }]
    }
  },
  computed: {},
  components: { 'typeahead': VueStrap.typeahead, 'alert': VueStrap.alert, 'spinner': VueStrap.spinner, resource, datepicker },
  methods: {
    validateSKU (sku) {
      sku = sku.trim()
      if (sku === '') return
      var ctx = this
      ctx.$root.callAPI('GET', `${ctx.apiUrl}/api/productos/sku/${sku}`).then(function (response) {
        var res = response.data
        if (res.success) {
          ctx.alertTitle = 'MENSAJE DE VALIDACIÓN'
          ctx.alertMessage = `El producto con el SKU (${sku}) ya se encuentra registrado, debe especificar otro SKU para el  producto`
          ctx.modalShow = true
          ctx.cliente.sku = null
        }
      })
    },
    validateForm () {
      var ctx = this
      ctx.alertTitle = 'MENSAJE DE VALIDACIÓN'
      if (!ctx.cliente.nombre) {
        ctx.showAlert('Debe especificar el <b>Nombre y Apellidos</b> del cliente.')
        return false
      }
      if (!ctx.$root.validateEmail(ctx.cliente.email)) {
        ctx.showAlert('Debe especificar un <b>Email correcto</b>.')
        return false
      }
      if (!ctx.cliente.telefono) {
        ctx.showAlert('Debe especificar un <b>Teléfono</b>.')
        return false
      }
      if (!ctx.cliente.fecha_nacimiento) {
        ctx.showAlert('Debe especificar una <b>Fecha de cumpleaños</b>.')
        return false
      }
      if (!ctx.cliente.comuna) {
        ctx.showAlert('Debe especificar una <b>Dirección</b>.')
        return false
      }
      if (!ctx.cliente.fuente_contacto_id) {
        ctx.showAlert('Debe seleccionar una <b>Como llego</b>.')
        return false
      }
      return true
    },
    // GUARDA LOS DATOS DEL PRODUCTO
    SaveCliente () {
      var ctx = this
      if (!ctx.validateForm()) return false
      ctx.$http.post(`${ctx.apiUrl}/api/clientes/create_update`, ctx.cliente).then(function (response) {
        if (response.status === 200) {
          if (response.data.success) ctx.$route.router.go({name: 'clientes'})
          else ctx.showAlert(response.data.error)
        }
      })
    },
    showAlert (msg) {
      var ctx = this
      if (typeof msg === 'object' && 'errors' in msg) ctx.alertMessage = `<b>Server side message</b><br> ${msg.message}`
      else ctx.alertMessage = msg
      ctx.modalShow = true
      // setTimeout(function () { ctx.modalShow = false }, 3000)
    },
    getCliente (id) {
      var ctx = this
      ctx.$root.callAPI('GET', `${ctx.apiUrl}/api/cliente/${id}`).then(function (response) {
        const data = response.data
        for (var i in data) ctx.cliente[i] = (i.indexOf('fecha') >= 0) ? moment(data[i]).format('DD/MM/Y') : data[i]
      })
    },
    getComunas () {
      var ctx = this
      ctx.$root.callAPI('GET', `${ctx.apiUrl}/api/comunas`).then(function (response) {
        ctx.comunas = response.data
      })
    },
    setComunaId (comuna, target) {
      var ctx = this
      ctx.cliente.comuna = comuna.split('-')[0]
      target.reset()
      target.value = comuna.split('-')[0]
    },
    setFuenteContacto (fuenteContacto, target) {
      var ctx = this
      ctx.cliente.fuente_contacto = fuenteContacto
      target.reset()
      target.value = fuenteContacto
    },
    getFuenteContacto () {
      var ctx = this
      ctx.$root.callAPI('GET', `${ctx.apiUrl}/api/fuente_contacto`).then(function (response) {
        ctx.fuenteContacto = response.data
      })
    }
  },
  ready () {
    this.getComunas()
    this.getFuenteContacto()
    this.getCliente(this.$route.params.id)
  }
}

</script>



