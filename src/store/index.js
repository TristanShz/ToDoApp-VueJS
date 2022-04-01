import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
    pageSize: 5,
    currentPage: 1,
    description: "",
  },
  getters: {
    todoId(state) {
      if (state.todos.length) return state.todos[0].id + 1;
      else return 1;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
    maxPage(state) {
      return Math.ceil(state.todos.length / state.pageSize);
    },

    todoByPages(state) {
      return state.todos.slice(
        state.pageSize * (state.currentPage - 1),
        state.pageSize * state.currentPage
      );
    },
    pourcentageDone(state) {
      if (state.todos.length) {
        return (
          Math.floor(
            (state.todos.filter((todo) => todo.done).length /
              state.todos.length) *
              100
          ) + "%"
        );
      } else {
        return "0%";
      }
    },
  },
  mutations: {
    setStates(state, todo) {
      state.todos.push(todo);
    },
    editTodo(state, todo) {
      todo.description = this.state.description;
      this.state.description = "";
    },
    addTodo(state, newTodo) {
      state.todos.unshift(newTodo);
      state.description = "";
    },

    removeTodo(state, todo) {
      state.todos.splice(
        state.todos.findIndex((findTodo) => findTodo.id === todo.id),
        1
      );
    },

    doneTodo(state, todo) {
      todo.done = !todo.done;
    },

    setCurrentPage(state, page) {
      if (page <= 0) state.currentPage = 1;
      else if (page > state.maxPage) state.currentPage = state.maxPage;
      else state.currentPage = page;
    },
  },

  actions: {
    setStates(context, todo) {
      context.commit("setStates", todo);
    },
    editTodo(context, id) {
      context.commit("editTodo", this.getters.getTodoById(id));
      context.dispatch("saveTodo");
    },
    addTodo(context, description) {
      if (description) {
        context.commit("addTodo", {
          id: this.getters.todoId,
          done: false,
          description: description,
        });

        context.dispatch("saveTodo");
      }
    },
    removeTodo(context, id) {
      context.commit("removeTodo", this.getters.getTodoById(id));
      context.dispatch("saveTodo");
    },

    doneTodo(context, id) {
      context.commit("doneTodo", this.getters.getTodoById(id));
      context.dispatch("saveTodo");
    },

    saveTodo({ state }) {
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    getTodoById(context, id) {
      context.commit("getTodoById", this.getters.getTodoById(id));
    },

    setCurrentPage(context, page) {
      context.commit("setCurrentPage", page);
    },
  },
});

export default store;
