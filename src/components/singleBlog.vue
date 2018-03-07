<template>
  <div>
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.content }}</p>
    <p>Author:  {{ blog.author }}</p>
    <h5>categories: </h5>
    <ul>
      <li v-for="category in blog.categories">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },

    created(){
      this.$http.get('https://vuebase-a462e.firebaseio.com/posts/'+ this.id +'.json')
      .then((data) => {
        this.blog = data.body;
      });
    }
  }
</script> 

<style scoped>

</style>