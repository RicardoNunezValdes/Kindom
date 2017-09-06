// Import System requirements
import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

// Import Helpers for filters
import { domain, count, prettyDate, pluralize } from './filters'

// Import Views - Top level
import AppView from './components/App.vue'
import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/dash/Dashboard.vue'
import VentasView from './components/dash/ventas/Ventas.vue'

// PRODUCTO
import ProductosView from './components/dash/maestros/productos/Productos.vue'
import NewProductosView from './components/dash/maestros/productos/NewProductos.vue'
import EditProductosView from './components/dash/maestros/productos/EditProductos.vue'

// Clientes
import ClientesView from './components/dash/maestros/cliente/Cliente.vue'
import NewClientesView from './components/dash/maestros/cliente/NewCliente.vue'
import EditClientesView from './components/dash/maestros/cliente/EditCliente.vue'

// RRHH
import RrhhView from './components/dash/maestros/rrhh/Rrhh.vue'
import NewRrhhView from './components/dash/maestros/rrhh/NewRrhh.vue'

// Import Install and register helper items
Vue.use(Router)
Vue.filter('count', count)
Vue.filter('domain', domain)
Vue.filter('prettyDate', prettyDate)
Vue.filter('pluralize', pluralize)

// Routing logic
var router = new Router({
  history: true,
  saveScrollPosition: true
})

// Routes
router.map({
  '/login': {
    component: LoginView
  },
  '/': {
    component: DashView,
    auth: true,
    subRoutes: {
      '': {
        component: DashboardView,
        name: 'home',
        description: 'Overview of environment'
      },
      // PRODUCTOS
      '/master/productos': {
        component: ProductosView,
        name: 'productos',
        description: 'Mantenedor de productos'
      },
      '/master/productos/new': {
        component: NewProductosView,
        name: 'newProducto',
        description: 'Nuevo producto'
      },
      '/master/productos/edit/:id': {
        component: EditProductosView,
        name: 'editProducto',
        description: 'Editar producto'
      },
      // CLIENTES
      '/master/clientes': {
        component: ClientesView,
        name: 'clientes',
        description: 'Mantenedor de clientes'
      },
      '/master/clientes/new': {
        component: NewClientesView,
        name: 'newCliente',
        description: 'Nuevo cliente'
      },
      '/master/clientes/edit/:id': {
        component: EditClientesView,
        name: 'editCliente',
        description: 'Editar cliente'
      },
      // RRHH
      '/master/rrhh': {
        component: RrhhView,
        name: 'rrhh',
        description: 'Mantenedor de RRHH'
      },
      '/master/rrhh/new': {
        component: NewRrhhView,
        name: 'newRrhh',
        description: 'Nuevo RRHH'
      },
      // MODULO DE VENTAS
      '/ventas': {
        component: VentasView,
        name: 'ventas',
        description: 'Ventas'
      }
    }
  },
  // not found handler
  '*': {
    component: NotFoundView
  }
})

// Redirect for shortcuts
router.redirect({
  '/jobs': '/user/jobs',
  '/me': '/user'
})

// Some middleware to help us ensure the user is authenticated.
// router.beforeEach(function (transition) {
//   // window.console.log('Transition', transition)
//   // if (transition.to.auth && (transition.to.router.app.$store.state.token === 'null')) {
//   //   window.console.log('Not authenticated')
//   //   transition.redirect('/login')
//   // } else {
//   //   transition.next()
//   // }
//   transition.next()
// })

// Resource logic
Vue.use(Resource)

Vue.http.interceptors.push({
  request: function (request) {
    /*
      Enable this when you have a backend that you authenticate against
    var headers = request.headers

    if (window.location.pathname !== '/login' && !headers.hasOwnProperty('Authorization')) {
      headers.Authorization = this.$store.state.token
    }
    */
    // console.log(headers)
    return request
  },
  response: function (response) {
    return response
  }
})

// Start out app!
Vue.config.debug = true
router.start(AppView, '#root')
