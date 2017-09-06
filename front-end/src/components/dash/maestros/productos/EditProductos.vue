<template>
<div class="container-fluid">
  <div class="col-md-6 col-md-offset-3">
    <div class="panel panel-default">
    <div class="panel-heading">
      <h2>
        Editar producto | <b>SKU.: {{ productoData.sku }}</b>
      </h2> 
    </div>
      <div class="panel-body">
        <div class="col-md-12">

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-code-working"></i> SKU.</label>
              <input class="form-control" type="text" placeholder="SKU del producto" v-model="productoData.sku">
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Nombre.</label>
              <input class="form-control" type="text" placeholder="Nombre" v-model="productoData.nombre">
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Descripción.</label>
              <input class="form-control" type="text" placeholder="Descripción" v-model="productoData.descripcion">
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
              <label><i class="fa ion-clipboard"></i> Categoría.</label>
              <select v-model="productoData.categoria_producto_id">
                <option value="0" >Seleccione . . .</option>
                <option v-for="categoria in categoriasList" value="{{categoria.id}}" >{{categoria.descripcion}}</option>
              </select>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Impuesto.</label>
              <div class="checkbox checkbox-success">
                <input id="impuesto" type="checkbox" v-model="productoData.impuesto">
                <label for="impuesto"> Si</label>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-clipboard"></i> Emite boleta.</label>
              <div class="checkbox checkbox-success">
                <input id="emite_boleta" type="checkbox" v-model="productoData.emite_boleta">
                <label for="emite_boleta"> Si</label>
              </div>
              
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label><i class="fa ion-code-working"></i> Imágen.</label>
              <img class="media-object" v-bind:src="image" width="100%">
              <input type="file" class="form-control" v-model="productoData.imagen" accept="image/*" @change="preload">
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
                <button class="btn btn-lg btn-success" @click="SaveProducto"><i class="ion-wand"></i> Salvar</button>
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
      productoData: { id: null, sku: null, nombre: null, descripcion: null, precio: 0, descuento: 0, impuesto: false, emite_boleta: false, categoria_producto_id: 0 },
      categoriasList: [],
      image: this.$store.state.serverURI + '/images/empty.jpg',
      filedata: null
    }
  },
  computed: {},
  components: { 'typeahead': VueStrap.typeahead, 'modal': VueStrap.modal, 'spinner': VueStrap.spinner, resource },
  methods: {
    // GUARDA LOS DATOS DEL PRODUCTO
    SaveProducto () {
      var ctx = this
      var formData = new window.FormData()
      formData.append('id', ctx.productoData.id)
      formData.append('sku', ctx.productoData.sku)
      formData.append('nombre', ctx.productoData.nombre)
      formData.append('descripcion', ctx.productoData.descripcion)
      formData.append('precio', ctx.productoData.precio)
      formData.append('descuento', ctx.productoData.descuento)
      formData.append('impuesto', ctx.productoData.impuesto)
      formData.append('emite_boleta', ctx.productoData.emite_boleta)
      formData.append('categoria_producto_id', ctx.productoData.categoria_producto_id)
      if (ctx.filedata !== null) formData.append('image', ctx.filedata)
      ctx.$http.post(`${ctx.apiUrl}/api/productos/create_update`, formData).then(function (response) {
        if (response.status === 200) {
          ctx.$route.router.go({name: 'productos'})
        }
      })
    },
    getProducto (id) {
      var ctx = this
      ctx.$root.callAPI('GET', `${ctx.apiUrl}/api/productos/${id}`).then(function (response) {
        const data = response.data
        if (data.image !== null && data.image !== 'null') ctx.image = ctx.apiUrl + '/' + data.image
        ctx.productoData.id = data.id
        ctx.productoData.sku = data.sku
        ctx.productoData.nombre = data.nombre
        ctx.productoData.descripcion = data.descripcion
        ctx.productoData.precio = data.precio
        ctx.productoData.descuento = data.descuento
        ctx.productoData.impuesto = data.impuesto
        ctx.productoData.emite_boleta = data.emite_boleta
        ctx.productoData.categoria_producto_id = data.categoria_producto_id
      })
    },
    // OBTIENE EL LISTADO DE CATEGORIAS
    getCategorias () {
      var ctx = this
      ctx.$root.callAPI('GET', `${ctx.apiUrl}/api/categorias`).then(function (response) {
        ctx.categoriasList = response.data.categorias
      })
    },
    // PRELOAD DE UNA IMAGEN SELECCIONADA
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
        ctx.image = ctx.apiUrl + '/images/empty.jpg'
      }
    }
  },
  ready () {
    this.getCategorias()
    this.getProducto(this.$route.params.id)
  }
}

</script>



