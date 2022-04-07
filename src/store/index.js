import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: "",
    pageSize: 5,
    currentPage: 1,
    description: "",
    descriptionModel: "",
  },
  getters: {
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
    editTodo(state, todoToEdit) {
      if (state.descriptionModel)
        todoToEdit.description = state.descriptionModel;
      state.descriptionModel = "";
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
    editTodo(context, idToEdit) {
      const todoToEdit = this.getters.getTodoById(idToEdit);
      //Si c'est une modification de description, alors on la change, sinon
      //on garde la même description (si c'est seulement une modification du state "done")
      const newDescription = context.state.descriptionModel
        ? context.state.descriptionModel
        : todoToEdit.description;
      fetch(`http://localhost:3000/api/v1/todos/${todoToEdit._id}`, {
        method: "PUT",
        mode: "cors",
        cache: "default",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: newDescription,
          done: todoToEdit.done,
        }),
      });

      context.commit("editTodo", todoToEdit);
    },
    addTodo(context, description) {
      if (description) {
        fetch("http://localhost:3000/api/v1/todos", {
          method: "POST",
          mode: "cors",
          cache: "default",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: description }),
        })
          .then((response) => {
            return response.json();
          })
          .then((id) => {
            context.commit("addTodo", {
              description: description,
              done: false,
              _id: id,
            });
          });
      }
    },
    removeTodo(context, idToRemove) {
      fetch(`http://localhost:3000/api/v1/todos/${idToRemove}`, {
        method: "DELETE",
        mode: "cors",
        cache: "default",
      });
      context.commit("removeTodo", this.getters.getTodoById(idToRemove));
    },

    doneTodo(context, idToDone) {
      context.commit("doneTodo", this.getters.getTodoById(idToDone));
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
