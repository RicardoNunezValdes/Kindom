<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './../store'
  import emailValidator from 'email-validator'

  // Check local storage to handle refreshes
  if (window.localStorage) {
    if (store.state.user !== window.localStorage.getItem('user')) {
      store.dispatch('SET_USER', JSON.parse(window.localStorage.getItem('user')))
      store.dispatch('SET_TOKEN', window.localStorage.getItem('token'))
    }
  }

  export default {
    name: 'App',
    store: store,
    data: function () {
      return {
        section: 'Head',
        version: '0.10.0',
        callingAPI: false,
        serverURI: 'http://10.110.1.10:8080',
        caller: this.$http
      }
    },
    methods: {
      callAPI (method, url, data) {
        this.callingAPI = true
        url = url || this.serverURI // if no url is passed then inheret local server URI
        return this.caller({
          url: url,
          method: method,
          data: data
        })
      },
      logout () {
        this.$store.dispatch('SET_USER', null)
        this.$store.dispatch('SET_TOKEN', null)

        if (window.localStorage) {
          window.localStorage.setItem('user', null)
          window.localStorage.setItem('token', null)
        }

        this.$router.go('/login')
      },
      // ----------- VALIDAR EMAIL -----------
      validateEmail (email) {
        if (!email) return false
        return emailValidator.validate(email)
      },
      // ----------- VALIDAR RUN -----------
      validateRun (run) {
        if (!run) return false
        var ctx = this
        run = run.replace(/\./g, '')
        if (!/^[0-9]+-[0-9kK]{1}$/.test(run)) return false
        var tmp = run.split('-')
        var digv = tmp[1]
        var rut = tmp[0]
        if (digv === 'K') digv = 'k'
        return String(ctx.dv(rut)) === digv
      },
      dv (T) {
        var M = 0
        var S = 1
        for (; T; T = Math.floor(T / 10)) S = (S + T % 10 * (9 - M++ % 6)) % 11
        return S ? S - 1 : 'k'
      },
      // ----------- RUN FORMAT -----------
      formatRun (run) {
        var value = run
        var ctx = this
        if (value) {
          value = value.replace('.', '')
          value = value.replace('.', '')
          value = value.replace('.', '')
          value = value.replace('-', '')
          if (value.length > 1) return ctx.setPoint(value.substring(0, value.length - 1)) + '-' + value.substring(value.length - 1, value.length)
        }
      },
      setPoint (d) {
        var ctx = this
        var c = []
        var a = d
        if (a.length > 3) {
          for (var b = 0; a.length > 3; b++) {
            c[b] = ctx.rRun(a, 3)
            a /= 1e3
            a = String(a)
            if (a.indexOf('.') !== -1) a = a.substr(0, a.indexOf('.'))
          }
          for (b--; b >= 0; b--) a = a + '.' + c[b]
        }
        return a
      },
      rRun (a, b) {
        var strtemp = ''
        var intlargo = a.length - 1
        for (var i = 1; i <= b; i++) {
          strtemp = strtemp + a.charAt(intlargo)
          intlargo--
        }
        var strtmp2 = ''
        for (var intlargo2 = strtemp.length - 1; intlargo2 >= 0; intlargo2--) strtmp2 = strtmp2 + strtemp.charAt(intlargo2)
        return strtmp2
      }
    }
  }
</script>
