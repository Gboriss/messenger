import Vue from 'vue'
import VueRouter from 'vue-router'
import contactList from '../components/contacts/contact-list.vue'
import contactUserInfo from '../components/contacts/contact-user-info'
Vue.use(VueRouter)

	const routes = [
	{
		path: '/',
		name: 'contacts',
		component: contactList
	},
	{
		path: 'contact',
		name: 'contact',
		component: contactUserInfo
	},
	

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
