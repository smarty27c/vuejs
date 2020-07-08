<template>
  <div class="section" >
    <h4 class="center">{{categoryData}}</h4>
    <GChart
    v-if="chartData.length"
    type="LineChart"
    :data="chartData"
    :options="chartOptions"
  />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Chart',
   data() {
      return {
      chartData: [],
      chartOptions: {
        chart: {
          title: this.categoryData
        }
      }
      }
    },
    props:{
      categoryData: {type: String}
    },
    computed: {
      ...mapGetters({
        // Use of Getter for getting store data
        JSONData: "getJSONData"
      })
    },
    watch:{
      JSONData(newValue){
        this.chartData = newValue
      }
    }
}
</script>

<style>
.center {
  text-align: center;
}
</style>
