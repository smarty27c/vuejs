<template>
  <div id="app">
    <section class="container">
      <CategoryFilter @category="getCategory"/>
      <Chart :categoryData="categoryData"/>
    </section>
  </div>
</template>

<script>
import CategoryFilter from "./components/CategoryFilter.vue";
import Chart from "./components/Chart.vue";

export default {
  name: "app",
  data(){
    return {
      categoryData: 'sales'
    }
  },
  components: {
    CategoryFilter,
    Chart
  },
  methods:{
    getCategory(data){
      this.categoryData = data
    }

  }
};
</script>
<style>

</style>