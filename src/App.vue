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
          <todo-input
            @onAddTodo="
              (description) => $store.dispatch('addTodo', description)
            "
          />
          <todo-progressbar v-bind:pourcentageDone="pourcentageDone" />
          <todo-card
            :todoByPages="todoByPages"
            :editingId="editingId"
            @onToggleEditId="toggleEditId"
          />
          <todo-pagination
            :currentPage="currentPage"
            :maxPage="maxPage"
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
      editingId: undefined,
    };
  },
  computed: {
    pourcentageDone() {
      if (this.$store.state.todos.length) {
        return (
          Math.floor(
            (this.$store.state.todos.filter((todo) => todo.done).length /
              this.$store.state.todos.length) *
              100
          ) + "%"
        );
      } else {
        return "0%";
      }
    },
    todoByPages() {
      return this.$store.state.todos.slice(
        this.pageSize * (this.currentPage - 1),
        this.pageSize * this.currentPage
      );
    },

    maxPage() {
      return Math.ceil(this.$store.state.todos.length / this.pageSize);
    },
  },
  methods: {
    setCurrentPage(page) {
      if (page <= 0) this.currentPage = 1;
      else if (page > this.maxPage) this.currentPage = this.maxPage;
      else this.currentPage = page;
    },
    toggleEditId(todoId) {
      this.editingId = todoId;
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      let id = 1;
      while (localStorage.getItem(id)) {
        try {
          let newTodo = JSON.parse(localStorage.getItem(id));
          this.$store.state.todos.unshift({
            id: newTodo.id,
            done: newTodo.done,
            description: newTodo.description,
          });
        } catch (e) {
          localStorage.removeItem(id);
        }

        id++;
      }
    });
  },
};
</script>
