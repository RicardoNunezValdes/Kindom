<template>
  <section  class="content">
    <div v-if="viewIndex">
      <list-clientes></list-clientes>
    </div>
    <br style="clear:both;">
  </section>
</template>
<script>
import ListClientes from './ListClientes'

export default {
  data () {
    return {
      viewIndex: true,
      viewForm: true
    }
  },
  computed: {},
  components: { ListClientes },
  methods: { },
  ready () { }
}

</script>