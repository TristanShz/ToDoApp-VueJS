<template>
  <div id="app" class="min-h-screen h-full" style="background: #edf2f7">
    <div class="flex items-center justify-center">
      <div class="w-full flex items-center justify-center font-sans">
        <div
          class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto"
        >
          <div class="mb-4">
            <h1 class="text-3xl text-gray-900">Ma Todo</h1>
            <div class="flex mt-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700"
                placeholder="Add Todo"
                v-model="description"
                @keyup.enter="addTodo()"
              />
              <button
                class="flex p-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500"
                @click="addTodo()"
              >
                Ajouter
              </button>
            </div>
          </div>
          <div class="mb-5">
            <div class="mb-2">{{ pourcentageDone }}% réalisé</div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-2.5 rounded-full"
                :style="{
                  width: `${pourcentageDone}%`,
                }"
              ></div>
            </div>
          </div>
          <div>
            <div
              v-for="todo in todoByPages"
              :key="todo.id"
              class="flex mb-4 items-center"
            >
              <p
                class="w-full text-gray-900"
                :class="{ 'line-through': todo.done }"
              >
                {{ todo.description }}
              </p>
              <button
                class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white"
                :class="[
                  todo.done
                    ? 'text-green-500 border-green-500 hover:bg-green-500'
                    : 'text-gray-500 border-gray-500 hover:bg-gray-500',
                ]"
                @click="todo.done = !todo.done"
              >
                {{ todo.done ? "Fait" : "Pas fait" }}
              </button>
              <button
                class="flex p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
                @click="removeTodo(todo.id)"
              >
                Supprimer
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center" id="pagination">
            <span v-show="currentPage !== 1" @click="currentPage = 1">
              <font-awesome-icon icon="fa-solid fa-angles-left"
            /></span>
            <span v-show="currentPage !== 1" @click="currentPage -= 1">
              <font-awesome-icon icon="fa-solid fa-angle-left"
            /></span>
            <span
              v-for="number in numberOfPage()"
              :key="number"
              @click="currentPage = number + 1"
              :class="{ currentPage: number + 1 == currentPage }"
              >{{ number + 1 }}
            </span>
            <span v-show="currentPage !== maxPage" @click="currentPage += 1">
              <font-awesome-icon icon="fa-solid fa-angle-right"
            /></span>
            <span
              v-show="currentPage !== maxPage"
              @click="currentPage = maxPage"
            >
              <font-awesome-icon icon="fa-solid fa-angles-right"
            /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const PAGE_SIZE = 5;

export default {
  name: "App",
  data() {
    return {
      pageSize: PAGE_SIZE,
      description: "",
      currentPage: 1,
      todos: [
        {
          id: 14,
          done: false,
          description: "Ajouter une todo avec Vue",
        },
        {
          id: 13,
          done: true,
          description: "Design de ma Todo",
        },
        {
          id: 12,
          done: false,
          description: "Design de ma Todo",
        },
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
      let pourcentage = Math.floor(
        (this.todos.filter((todo) => todo.done).length / this.todos.length) *
          100
      );
      return pourcentage ? pourcentage : 0;
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
    addTodo() {
      if (this.description) {
        let newTodo = {
          id: this.todos[0].id + 1,
          done: false,
          description: this.description,
        };
        this.description = "";
        this.todos.unshift(newTodo);
      }
    },

    removeTodo(id) {
      this.todos.splice(
        this.todos.findIndex((todo) => todo.id === id),
        1
      );
    },

    numberOfPage() {
      let pageArr = [];
      for (let i = 0; i < this.maxPage; i++) pageArr.push(i);
      return pageArr;
    },
  },
};
</script>
