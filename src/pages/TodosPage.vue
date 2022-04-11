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
          <todo-input />
          <todo-progressbar />
          <todo-card />
          <todo-pagination />
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
  name: "TodosPage",
  components: {
    TodoInput,
    TodoPagination,
    TodoCard,
    TodoProgressbar,
  },
  created() {
    const myInit = {
      method: "GET",
      mode: "cors",
      cache: "default",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    fetch("http://localhost:3000/api/v1/todos", myInit)
      .then(function (todosList) {
        return todosList.json();
      })
      .then((todosList) => {
        this.$store.dispatch(
          "setStates",
          JSON.parse(JSON.stringify(todosList))
        );
      });
  },
};
</script>
