<template>
  <div class="section">
    <select name="category" id="category"  @change="getCategory">
      <option v-for="(option,index) in options" :key="index" :value="option.value">{{option.label}}</option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'CategoryFilter',
   data() {
      return {
        options: [{
          value: 'sales',
          label: 'Sales'
        }, {
          value: 'pageViews',
          label: 'Page views'
        }, {
          value: 'clickThruRate',
          label: 'Click through rate'
        }, {
          value: 'orders',
          label: 'Orders'
        }],
      }
    },
    mounted(){
        this.$store.dispatch('changeCategory', 'sales')
        this.$emit('category', 'sales')
    },
    methods:{
       getCategory(data){
          this.$store.dispatch('changeCategory', data.target.value)
          this.$emit('category', data.target.value)
       }
    }
}
</script>

<style>

</style>
