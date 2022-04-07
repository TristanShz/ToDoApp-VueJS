import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: "",
    pageSize: 5,
    currentPage: 1,
    descriptionModel: "",
  },
  getters: {
    todoId(state) {
      if (state.todos.length) return state.todos[0]._id + 1;
      else return 1;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo._id === id);
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
    setStates(state, todosList) {
      state.todos = todosList.reverse();
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
        state.todos.findIndex((findTodo) => findTodo._id === todo._id),
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

    setDescriptionModel(state, todo) {
      state.descriptionModel = todo.description;
    },
  },

  actions: {
    setStates(context, todosList) {
      context.commit("setStates", todosList);
    },
    editTodo(context, todo) {
      fetch(`http://localhost:3000/api/v1/todos/${id}`, {
        method: "PUT",
        mode: "cors",
        cache: "default",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: todo.description,
          done: todo.done,
          _id: todo._id,
        }),
      });
    },
    addTodo(context, description) {
      if (description) {
        fetch("http://localhost:3000/api/v1/todos", {
          method: "POST",
          mode: "cors",
          cache: "default",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: description }),
        });
      }
      context.commit("addTodo", {
        description: description,
        done: false,
        id: "",
      });
    },
    removeTodo(context, id) {
      fetch(`http://localhost:3000/api/v1/todos/${id}`, {
        method: "DELETE",
        mode: "cors",
        cache: "default",
      });
      context.commit("removeTodo", this.getters.getTodoById(id));
    },

    doneTodo(context, id) {
      context.commit("doneTodo", this.getters.getTodoById(id));
      context.dispatch("saveTodo");
    },

    saveTodo({ state }) {
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setCurrentPage(context, page) {
      context.commit("setCurrentPage", page);
    },
    setDescriptionModel(context, id) {
      context.commit("setDescriptionModel", this.getters.getTodoById(id));
    },
  },
});

export default store;
