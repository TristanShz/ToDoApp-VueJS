<template>
  <div class="flex mt-4">
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700"
      placeholder="Add Todo"
      v-model="description"
      @keyup.enter="addTodo"
    />
    <button
      class="flex p-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500"
      @click="addTodo"
    >
      Ajouter
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "",
    };
  },
  methods: {
    addTodo() {
      this.$emit("onAddTodo", this.description);
      this.description = "";
    },
  },
};
</script>
