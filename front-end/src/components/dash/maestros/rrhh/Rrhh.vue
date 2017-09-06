<template>
  <section  class="content">
    <div v-if="viewIndex">
      <list-rrhh></list-rrhh>
    </div>
    <br style="clear:both;">
  </section>
</template>
<script>
import ListRrhh from './ListRrhh'

export default {
  data () {
    return {
      viewIndex: true,
      viewForm: true
    }
  },
  computed: {},
  components: { ListRrhh },
  methods: { },
  ready () { }
}

</script>