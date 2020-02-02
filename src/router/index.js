import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Posts = () => import('../components/Posts');
const PostDetails = () => import('../components/PostDetails');

export default new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'onstate',
    routes: [
        {
            path: '/',
            name: 'posts',
            component: Posts
        },
        {
            path: '/posts/:type',
            name: 'posts',
            component: Posts
        },
        {
            path: '/post/view/:postId',
            name: 'postDetails',
            component: PostDetails
        }
    ]
});
