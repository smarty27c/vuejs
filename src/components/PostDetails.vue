<template>
  <div class="container column">
    <h3 class="subtitle is-3">{{post.title}}</h3>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  name: "PostDetails",
  data() {
    return {
      post: {},
      relatedPost: []
    };
  },
  mounted() {
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/${this.$route.params.postId}`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.post = data;
        fetch(
          `https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/${this.$route.params.postId}/related`,
          {
            method: "post"
          }
        )
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.relatedPost = data;
          });
      });
  },
  methods: {
    getDate(value) {
      return window.moment(value, "YYYYMMDD").fromNow();
    }
  }
};
</script>