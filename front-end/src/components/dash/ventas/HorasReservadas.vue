<template>
	<h2>HORAS RESERVADAS</h2>
	<p v-for="hrs in horasReservadas">
		<span class="hr-content">
			<span class="hr-title">{{hrs.title}}</span>
			<br>
			<span class="hr-body">
				<span v-for="hr in hrs.data">
					<br>
					{{hr.datetime}} {{hr.persona.nombre}}
				</span>
			</span>
		</span>
	</p>
</template>
<script>
export default {
  data () {
    return {
      horasReservadas: [
        { title: 'HOY', 'data': [
          {id: 1, datetime: '12:00', persona: {id: 1, nombre: 'Manuel'}},
          {id: 2, datetime: '13:00', persona: {id: 2, nombre: 'Vane'}},
          {id: 3, datetime: '13:20', persona: {id: 2, nombre: 'Compi'}}
        ]
       }
      ]
    }
  },
  components: { }
}
</script>