<template>
  <div id="app" class="min-h-screen h-full" style="background: #edf2f7">
    <div class="flex items-center justify-center">
      <div class="w-full flex items-center justify-center font-sans">
        <div
          class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto"
        >
          <div class="mb-4">
            <h1 class="text-3xl text-gray-900">Ma Todo</h1>
          </div>
          <todo-input @onAddTodo="addTodo" />
          <todo-progressbar v-bind:pourcentageDone="pourcentageDone" />
          <todo-card
            v-bind:todoByPages="todoByPages"
            @onDeleteTodo="removeTodo"
          />
          <todo-pagination
            v-bind:pageSize="pageSize"
            v-bind:currentPage="currentPage"
            v-bind:maxPage="maxPage"
            @onPageSet="setCurrentPage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput.vue";
import TodoPagination from "@/components/TodoPagination.vue";
import TodoCard from "@/components/TodoCard.vue";
import TodoProgressbar from "@/components/TodoProgressbar.vue";
export default {
  name: "App",
  components: {
    TodoInput,
    TodoPagination,
    TodoCard,
    TodoProgressbar,
  },
  data() {
    return {
      pageSize: 5,
      currentPage: 1,
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
    };
  },
  computed: {
    pourcentageDone() {
      if (this.todos.length) {
        return (
          Math.floor(
            (this.todos.filter((todo) => todo.done).length /
              this.todos.length) *
              100
          ) + "%"
        );
      } else {
        return "0%";
      }
    },
    todoByPages() {
      return this.todos.slice(
        this.pageSize * (this.currentPage - 1),
        this.pageSize * this.currentPage
      );
    },

    maxPage() {
      return Math.ceil(this.todos.length / this.pageSize);
    },
  },
  methods: {
    addTodo(description) {
      let id;
      if (this.todos.length) id = this.todos[0].id + 1;
      else id = 1;
      if (description) {
        let newTodo = {
          id: id,
          done: false,
          description: description,
        };
        this.todos.unshift(newTodo);
      }
    },

    removeTodo(id) {
      this.todos.splice(
        this.todos.findIndex((todo) => todo.id === id),
        1
      );
    },

    setCurrentPage(page) {
      if (page == "max") this.currentPage = this.maxPage;
      if (page <= 0) this.currentPage = 1;
      else if (page > this.maxPage) this.currentPage = this.maxPage;
      else this.currentPage = page;
    },
  },
};
</script>
