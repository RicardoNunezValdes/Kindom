<template>
<div class="container-fluid">
  <div class="col-md-8 col-md-offset-2">
    <div class="panel panel-default">
    <div class="panel-heading">
      <h2>
        Nuevo producto | <b>SKU.: {{ productoData.sku }}</b>
      </h2> 
      <small>Campos con <b>(*)</b> son obligatorios.</small>
    </div>
      <div class="panel-body">
        <div class="col-md-12">

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-code-working"></i> SKU. <b>(*)</b></label>
              <input class="form-control" type="text" placeholder="SKU del producto" v-model="productoData.sku" @blur="validateSKU(productoData.sku)">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Descripción. <b>(*)</b></label>
              <input class="form-control" type="text" placeholder="Nombre o descripción" v-model="productoData.descripcion">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Precio. <b>(*)</b></label>
              <input class="form-control" type="text" placeholder="Precio" v-model="productoData.precio">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> % Descuento. </label>
              <input class="form-control" type="text" placeholder="Descuento" v-model="productoData.descuento">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Categoría. <b>(*)</b></label>
              <select class="form-control" v-model="productoData.categoria_producto_id">
                <option value="0" >Seleccione . . .</option>
                <option v-for="categoria in categoriasList" value="{{categoria.id}}" >{{categoria.descripcion}}</option>
              </select>
            </div>
          </div>
          
          <div class="col-md-3">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Impuesto.</label>
              <div class="checkbox checkbox-success">
                <input id="impuesto" class="form-control" type="checkbox" v-model="productoData.impuesto">
                <label for="impuesto"> Si</label>
              </div>
            </div>
          </div>
            
          <div class="col-md-3">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Emite boleta.</label>
              <div class="checkbox checkbox-success">
                <input id="emite_boleta" class="form-control" type="checkbox" v-model="productoData.emite_boleta">
                <label for="emite_boleta"> Si</label>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="col-md-6">
              <div class="form-group">
                <label><i class="fa ion-code-working"></i> Imágen.</label>
                <img class="media-object" v-bind:src="image" width="100%">
                <input type="file" class="form-control" v-model="productoData.imagen" accept="image/*" @change="preload">
              </div>
            </div>
          </div>
          
          <div class="col-md-12 pull-left">
            <div class="col-md-6 pull-left">
              <div class="input-group">
                <a v-link="{name:'productos'}" class="btn btn-lg btn-warning"><i class="ion-ios-undo"></i> Volver</a>
              </div>
            </div>

            <div class="col-md-3 pull-right">
              <div class="input-group">
                <button class="btn btn-lg btn-success" @click="SaveProducto"><i class="ion-wand"></i> Crear</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
   </div>

   <!-- MODAL !-->
  <modal :show.sync="modalShow" effect="zoom" width="400">
    <div slot="modal-header" class="modal-header">
      <h4 class="modal-title">
        <b>{{modalTitle}}</b>
      </h4>
    </div>
    <div slot="modal-body" class="modal-body">
      {{ modalMessage }}
    </div>
    <div slot="modal-footer" class="modal-footer">
      <button type="button" @click="modalShow = false" class="btn btn-success" >OK</button>
    </div>
  </modal>
  <!-- FIN MODAL !-->
  <spinner id="spinner-box" :size="lg" :fixed="false" text="Procesando la petición, por favor espere." v-ref:spinner></spinner>
  </div>
</template>
<script>
import VueStrap from 'vue-strap'
import resource from 'vue-resource'

export default {
  data () {
    return {
      modalTitle: '',
      modalMessage: '',
      modalShow: false,
      apiUrl: this.$store.state.serverURI,
      basePath: this.$store.state.basePath,
      productoData: { sku: null, descripcion: null, precio: 0, descuento: 0, impuesto: false, emite_boleta: false, categoria_producto_id: 0 },
      categoriasList: [],
      image: this.$store.state.serverURI + '/images/empty.jpg',
      filedata: null
    }
  },
  computed: {},
  components: { 'typeahead': VueStrap.typeahead, 'modal': VueStrap.modal, 'spinner': VueStrap.spinner, resource },
  methods: {
    validateSKU (sku) {
      sku = sku.trim()
      if (sku === '') return
      var ctx = this
      ctx.$root.callAPI('GET', `${ctx.apiUrl}/api/productos/sku/${sku}`).then(function (response) {
        var res = response.data
        if (res.success) {
          ctx.modalTitle = 'MENSAJE DE VALIDACIÓN'
          ctx.modalMessage = `El producto con el SKU (${sku}) ya se encuentra registrado, debe especificar otro SKU para el  producto`
          ctx.modalShow = true
          ctx.productoData.sku = null
        }
      })
    },
    validateForm () {
      var ctx = this
      ctx.modalTitle = 'MENSAJE DE VALIDACIÓN'
      if (!ctx.productoData.sku) {
        ctx.modalMessage = 'Debe especificar el SKU del producto.'
        ctx.modalShow = true
        return false
      }
      if (!this.productoData.descripcion) {
        ctx.modalMessage = 'Debe especificar el Nombre o la Descripción del producto.'
        ctx.modalShow = true
        return false
      }
      if (ctx.productoData.precio === 0) {
        ctx.modalMessage = 'Debe especificar el precio del producto.'
        ctx.modalShow = true
        return false
      }
      if (ctx.productoData.categoria_producto_id === 0) {
        ctx.modalMessage = 'Debe seleccionar la categoría del producto.'
        ctx.modalShow = true
        return false
      }
    },
    // GUARDA LOS DATOS DEL PRODUCTO
    SaveProducto () {
      var ctx = this
      console.log('Grabar el producto')
      if (!ctx.validateForm()) 
      {
        nsole.log('Error al validar')
        return false
      }
      
      console.log('Sigue Grabar el producto')
      var formData = new window.FormData()
      formData.append('sku', ctx.productoData.sku)
      formData.append('descripcion', ctx.productoData.descripcion)
      formData.append('precio', ctx.productoData.precio)
      formData.append('descuento', ctx.productoData.descuento)
      formData.append('impuesto', ctx.productoData.impuesto)
      formData.append('emite_boleta', ctx.productoData.emite_boleta)
      formData.append('categoria_producto_id', ctx.productoData.categoria_producto_id)
      formData.append('image', ctx.filedata)
      /* call api */
      console.log('formData', formData)
      ctx.$http.post(`${ctx.apiUrl}/api/productos/create_update`, formData).then(function (response) {
        if (response.status === 200) {
          ctx.$route.router.go({name: 'productos'})
        }
      })
    },
    // OBTIENE EL LISTADO DE CATEGORIAS
    getCategorias () {
      var ctx = this
      ctx.$root.callAPI('GET', `${ctx.apiUrl}/api/categorias`).then(function (response) {
        ctx.categoriasList = response.data.categorias
      })
    },
    preload: function (event) {
      var ctx = this
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new window.FileReader()
        reader.onload = function (e) {
          ctx.image = e.target.result
        }
        reader.readAsDataURL(input.files[0])
        ctx.filedata = input.files[0]
      } else {
        ctx.filedata = null
        ctx.image = '../../../static/img/empty.jpg'
      }
    }
  },
  ready () {
    this.getCategorias()
  }
}

</script>



