<template>
  <div id='add-blog'>
    <h2>Add a New Blog Post!</h2>
    <form action='' v-if="!submitted">
      <label for="">Blog Title:</label>
      <input type="text" placeholder="title of the blog" v-model.lazy="blog.title" required>
      <label for="">Blog Content:</label>
      <textarea name="" id="" v-model.lazy="blog.content" rows="10"></textarea>
      <div id='checkboxes'>
        <label for="">NodeJs</label>
        <input type="checkbox" name="" id="" value="nodejs" v-model="blog.categories">
        <label for="">VueJs</label>
        <input type="checkbox" name="" id="" value="vuejs" v-model="blog.categories">
        <label for="">Python</label>
        <input type="checkbox" name="" id="" value="python" v-model="blog.categories">
        <label for="">Java</label>
        <input type="checkbox" name="" id="" value="java" v-model="blog.categories">
        <label for="">BigData</label>
        <input type="checkbox" name="" id="" value="bigdata" v-model="blog.categories">
        <label for="">R</label>
        <input type="checkbox" name="" id="" value="r" v-model="blog.categories">
      </div>
      <div class="selectbox submit">
        <label for="">Authors</label>
        <select v-model="blog.author">
          <option v-for="author in authors">{{ author }}</option>
        </select>
        <button v-on:click.prevent='post'>Submit</button>
      </div>
    </form>

    <!-- after hiding the form -->
    <div v-if="submitted">
      <h2>Thaks for submitting you blog!</h2>
    </div>
    
    <div id='preview'>
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    data: function() {
      return {
        blog: {
          title: '',
          content: '',
          categories: [],
          author: '',
        },
        authors: ['Raniket', 'Ricky', 'Logan'],
        submitted: false,
      }
    },
    methods: {
      post: function() {
        this.$http.post('https://vuebase-a462e.firebaseio.com/posts.json', this.blog)
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
      }
    }
  }
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes {
  display: inline-block;
  padding: 10px auto;
}

#checkboxes label {
  display: inline-block;
}

.selectbox .submit{
  display: inline-block;
}

.submit button{
  margin-left: 20px;
}
</style>

