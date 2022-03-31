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
  getters: {
    todoId(state) {
      if (state.todos.length) return state.todos[0].id + 1;
      else return 1;
    },
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todos.unshift(newTodo);
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
      if (description) {
        context.commit("addTodo", {
          id: this.getters.todoId,
          done: false,
          description: description,
        });
      }
    },

    removeTodo(context, id) {
      context.commit("removeTodo", id);
    },
  },
});

export default store;
