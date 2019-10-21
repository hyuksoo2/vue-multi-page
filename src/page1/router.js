import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Posts from './views/Posts.vue';

Vue.use(Router)

export default new Router({
	base : '/',

	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/home',
			name : '',
			component: Home

		},
		{
			path: '/posts',
			Name : '',
			component: Posts
		},

	],
})