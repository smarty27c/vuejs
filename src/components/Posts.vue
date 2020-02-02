<template>
  <div class="container column">
    <table class="table is-hoverable" v-if="`${this.$route.path} === /post/view/`">
      <thead>
        <tr>
          <th class="post">Posts</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post,index) in postList" :key="index">
          <td @click="getPostDetails(post)">
            <a :href="`/post/view/${post.ID}`">
              <article class="media">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img :src="post.post_thumbnail.URL" />
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{post.title}}</strong>
                      <small>- {{getDate(post.date)}}</small>
                      <br />
                      <span v-html="post.excerpt"></span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {
      postList: []
    };
  },
  mounted() {
    fetch("https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.getLatestPosts(data.posts);
      });
  },
  updated() {
    if (this.$route.params.type) {
      let url = `https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/${this.$route.params.type}`;
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.getLatestPosts(data.posts);
        });
    }
  },
  methods: {
    getLatestPosts(posts) {
      this.postList = posts.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    },
    getDate(value) {
      return window.moment(value, "YYYYMMDD").fromNow();
    },
    getPostDetails(value) {
      this.$router.push({ to: "/post/view/", postId: value.ID });
    }
  }
};
</script>
<style scoped>
.post {
  color: blueviolet;
  font-size: 25px;
}
</style>