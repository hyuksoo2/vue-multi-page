import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';

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
			component: () => import(/* webpackChunkName: "posts" */ './views/Posts.vue'),
		},

	],
})