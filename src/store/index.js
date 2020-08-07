import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		contacts: [],
		userChat: ''
	},
	mutations: {
		set_contacts_to_store(state, contacts) {
			state.contacts = contacts
		},
		set_user_to_head(state, user) {
			if (user) {
				state.userChat = user
			} else {
				state.userChat = ''
			}
		}
	},
	actions: {
		fetch_contacts({commit}) {
			return axios.get('http://localhost:3000/contacts')
				.then((contacts) => {
					commit('set_contacts_to_store', contacts.data)
				})
		},
		set_user_to_header({commit}, user) {
			commit('set_user_to_head', user)
		}
	},
	getters: {

	},
	modules: {
	}
})
