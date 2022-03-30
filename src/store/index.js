import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 11,
        done: false,
        description: "Design de ma Todo",
      },
      {
        id: 10,
        done: false,
        description: "Design de ma Todo",
      },
      {
        id: 9,
        done: false,
        description: "Design de ma Todo",
      },
      {
        id: 8,
        done: true,
        description: "Design de ma Todo",
      },
      {
        id: 7,
        done: false,
        description: "Design de ma Todo",
      },
      {
        id: 6,
        done: false,
        description: "Design de ma Todo",
      },
      {
        id: 5,
        done: false,
        description: "Design de ma Todo",
      },
      {
        id: 4,
        done: false,
        description: "Design de ma Todo",
      },
      {
        id: 3,
        done: false,
        description: "Design de ma Todo",
      },
      {
        id: 2,
        done: false,
        description: "Design de ma Todo",
      },
      {
        id: 1,
        done: true,
        description: "Design de ma Todo",
      },
    ],
  },
  mutations: {
    addTodo(state, description) {
      let id;
      if (state.todos.length) id = state.todos[0].id + 1;
      else id = 1;
      if (description) {
        let newTodo = {
          id: id,
          done: false,
          description: description,
        };
        state.todos.unshift(newTodo);
      }
    },

    removeTodo(state, id) {
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === id),
        1
      );
    },
  },

  actions: {
    addTodo(context, description) {
      context.commit("addTodo", description);
    },

    removeTodo(context, id) {
      context.commit("removeTodo", id);
    },
  },
});

export default store;
