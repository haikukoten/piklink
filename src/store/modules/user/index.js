import actions from './actions'
import mutations from './mutations'

const state = {
	userData: null,
	profile: null,
	loggedIn: false,
}

export default {
	namespaced: true,
	state,
	actions,
	mutations,
}