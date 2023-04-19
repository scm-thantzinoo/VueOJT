import { createStore } from 'vuex'

export default createStore({
  state: {
    usersList: []
  },
  getters: {
    users: state => {
      return state.usersList
    },
    lastUserId: state => {
      const users = state.usersList;
      return users.length ? users[users.length - 1].user_id + 1 : 1;
    }
  },
  mutations: {
    addUser(state, user) {
      state.usersList.push(user)
    }
  },
  actions: {
  },
  modules: {
  }
})
