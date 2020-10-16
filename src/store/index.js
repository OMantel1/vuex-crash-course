import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      // {
      //   "userId": 1,
      //   "id": 1,
      //   "title": "delectus aut autem",
      //   "completed": false
      // },
      // {
      //   "userId": 1,
      //   "id": 2,
      //   "title": "quis ut nam facilis et officia qui",
      //   "completed": false
      // },
      // {
      //   "userId": 1,
      //   "id": 3,
      //   "title": "fugiat veniam minus",
      //   "completed": false
      // }
    ]
  },
  getters: {
    allTodos: (state) => state.todos
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos)
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await Axios.get('http://jsonplaceholder.typicode.com/todos')
    commit('setTodos', response.data)
    }
  },
  modules: {}
})