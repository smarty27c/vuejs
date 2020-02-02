<template>
  <div id="app">
    <section class="main-content columns is-fullheight">
      <Sidebar />
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "app",
  components: {
    Sidebar
  }
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>