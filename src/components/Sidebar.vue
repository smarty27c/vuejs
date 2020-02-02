<template>
  <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
    <div>
      <h3 class="category">Categories</h3>
    </div>
    <ul class="menu-list">
      <li v-for="(category,index) in categoryList" :key="index">
        <a :href="`/posts/${category.name}`">
          <span class="category-name">{{category.label}}</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      categoryList: []
    };
  },
  mounted() {
    fetch(
      "https://public-api.wordpress.com/rest/v1.1/sites/107403796/post-types"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.categoryList = data.post_types;
      });
  }
};
</script>
<style scoped>
.category {
  color: blueviolet;
  font-size: 25px;
}
.category-name {
  color: black;
  font-size: 15px;
}
</style>