<template>
  <div v-theme.column="'narrow'" id="show-blogs">
    <h1>All blog Articals!</h1>

    <input type="text" v-model="search" placeholder="search blog">

    <div class="single-blog" v-for="blog in filteredBlog">
      <router-link v-bind:to="'/blog/'+ blog.id "><h3 v-rainbow>{{ blog.title | toUppercase }}</h3></router-link>
      <article>{{ blog.content | snippet }}</article>
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
    this.$http.get('https://vuebase-a462e.firebaseio.com/posts.json')
    .then(function(data) {
      return data.json();
    })
    .then(function(data){
      let tempArray = [];
      for(let key in data){
        data[key].id = key;
        tempArray.push(data[key]);
      }
      console.log(tempArray);
      this.blogs = tempArray;
    });
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
  mixins: [searchMixin]
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
