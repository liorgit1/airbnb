<template>
  <section class="calendar-container">
    <VDatePicker :columns="2" v-model.range="range" mode="dateTime" @input="onDateRangeChange" />
    <!--  -->
  </section>
</template>

<script>

//  import 'vue-datepicker-ui/lib/vuedatepickerui.css';
//  import VueDatepickerUi from 'vue-datepicker-ui';
import { ref } from 'vue';
import { eventBus } from '../services/event-bus.service';
// import { Calendar, DatePicker } from 'v-calendar';
// import 'v-calendar/style.css';
//  import { ref } from 'vue';
const range = ref({
  start: new Date(2020, 0, 6).toLocaleTimeString('en-US'),
  end: new Date(2020, 0, 10).toLocaleTimeString('en-US'),
});

export default {
  components: {

    // Calendar, DatePicker,    
    //   Datepicker: VueDatepickerUi

  },

  data() {
    return {
      date: new Date(),

      range: this.range
    }
  },

  methods: {
    onDateRangeChange() {
      console.log(this.range)
    }
  },

  watch: {
    range: {
      handler: function () {

        console.log(this.range.start.toLocaleDateString('en-US'), this.range.end.toLocaleDateString('en-US'))
        this.$emit('passDateData', { start: this.range.start.toLocaleDateString('en-US'), end: this.range.end.toLocaleDateString('en-US') })
        this.$emit('close')
        eventBus.emit('close')
      },
      function() {
        this.$emit('passDateData', { start: this.range.start.toLocaleDateString('en-US'), end: this.range.end.toLocaleDateString('en-US') })
      },
      deep: true
    }
  }, emits: ['passDateData', 'close']
}


</script>