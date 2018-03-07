<template>
  <div v-theme.column="'narrow'" id="show-blogs">
    <h1>All blog Articals!</h1>

    <input type="text" v-model="search" placeholder="search blog">

    <div class="single-blog" v-for="blog in filteredBlog">
      <h3 v-rainbow>{{ blog.title | toUppercase }}</h3>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin.js';

export default {
  components: {

  },
  data: function() {
    return {
      blogs: [],
      search: '',
    }
  },
  methods: {

  },
  computed: {

  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(data) {
      console.log(data);
      this.blogs = data.body.slice(0, 9);
    })
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString().slice(2,6);
      }
    }
  },
  mixins: [searchMixin],
}
</script>

<style scoped>

#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}


.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
