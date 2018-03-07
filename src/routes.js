import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog';
import whatever from './components/whatever.vue';

export default [
  { path: '/', component: showBlogs},
  { path: '/add', component: addBlog },
  { path: '/blog/:id', component: singleBlog},
  {path: '/whatever', component: whatever}
]