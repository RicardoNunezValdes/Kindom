<template>
  <section  class="content">
    <div v-if="viewIndex">
      <list-productos></list-productos>
    </div>
    <br style="clear:both;">
  </section>
</template>
<script>
import ListProductos from './ListProductos'

export default {
  data () {
    return {
      viewIndex: true,
      viewForm: true
    }
  },
  computed: {},
  components: { ListProductos },
  methods: { },
  ready () { }
}

</script>