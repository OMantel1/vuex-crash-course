import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      }
    ]
  },
  getters: {
    allTodos: (state) => state.todos
  },
  mutations: {},
  actions: {},
  modules: {}
})