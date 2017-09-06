<template>
	<calendar :events="events" :week-names="weekNames" :title-format="titleFormat"> </calendar>
	<!-- MODAL !-->
	  <modal :show.sync="showConfirm" effect="zoom" width="400">
	    <div slot="modal-header" class="modal-header">
	      <h4 class="modal-title">
	        <b>Eliminando registro</b>
	      </h4>
	    </div>
	    <div slot="modal-body" class="modal-body">
	      <p>Seguro de que desea eliminar la impresora</p>
	    </div>
	    <div slot="modal-footer" class="modal-footer">
	      <button type="button" class="btn btn-danger" >SI</button>
	      <button type="button" class="btn btn-success" >No</button>
	    </div>
	  </modal>
	  <!-- FIN MODAL !-->
</template>
<script>
import calendar from 'vue-fullcalendar'
import VueStrap from 'vue-strap'

export default {
  data () {
    return {
      showConfirm: false,
      events: [
        {
          title: 'event1',
          start: '2016-08-01 10:00',
          end: '2016-08-01 11:00',
          YOUR_DATA: {}
        },
        {
          title: 'event2',
          start: '2016-08-10',
          end: '2016-08-11',
          YOUR_DATA: {}
        }
      ],
      weekNames: this.$store.state.dateOptions.week,
      monthNames: this.$store.state.dateOptions.month,
      titleFormat: 'MM/yyyy'
    }
  },
  components: { calendar, 'modal': VueStrap.modal },
  events: {
    dayClick (day, jsEvent) {
      console.log(day, jsEvent)
      this.showConfirm = true
    },
    eventClick (event, jsEvent, pos) {
      console.log(event, jsEvent, pos)
    },
    eventDrop () {
      console.log('ss')
    }
  }
}
</script>
<style>
	.week-row{
		height: 40px !important;
		min-height: 40px !important;
	}
	.day-cell{
		height: 40px !important;
		min-height: 40px !important;
	}
	.not-cur-month{
		height: 40px !important;
		min-height: 40px !important;
	}
	.events-day{
		height: 40px !important;
		min-height: 40px !important;
	}
</style>