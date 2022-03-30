<template lang="">
  <div>
    <div
      v-for="todo in todoByPages"
      :key="todo.id"
      class="flex mb-4 items-center"
    >
      <p class="w-full text-gray-900" :class="{ 'line-through': todo.done }">
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
</template>
<script>
export default {
  props: {
    todoByPages: Array,
  },

  methods: {
    removeTodo(id) {
      this.$emit("onDeleteTodo", id);
    },
  },
};
</script>
<style lang=""></style>
