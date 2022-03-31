import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    todoId(state) {
      if (state.todos.length) return state.todos[0].id + 1;
      else return 1;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todos.unshift(newTodo);
      localStorage.setItem(newTodo.id, JSON.stringify(newTodo));
    },

    removeTodo(state, todo) {
      state.todos.splice(
        state.todos.findIndex((findTodo) => findTodo.id === todo.id),
        1
      );
      localStorage.removeItem(todo.id);
    },
    saveTodo(state, todo) {
      localStorage.setItem(todo.id, JSON.stringify(todo));
    },
    doneTodo(state, todo) {
      console.log(todo);
      todo.done = !todo.done;
    },
  },

  actions: {
    addTodo(context, description) {
      if (description) {
        context.commit("addTodo", {
          id: this.getters.todoId,
          done: false,
          description: description,
        });
      }
    },

    removeTodo(context, id) {
      context.commit("removeTodo", this.getters.getTodoById(id));
    },

    doneTodo(context, id) {
      context.commit("doneTodo", this.getters.getTodoById(id));
    },

    saveTodo(context, id) {
      context.commit("saveTodo", this.getters.getTodoById(id));
    },

    getTodoById(context, id) {
      context.commit("getTodoById", this.getters.getTodoById(id));
    },
  },
});

export default store;
