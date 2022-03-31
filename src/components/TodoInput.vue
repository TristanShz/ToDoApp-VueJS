<template>
  <div class="flex mt-4">
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700"
      placeholder="Add Todo"
      v-model="$store.state.description"
      @keyup.enter="$store.dispatch('addTodo', $store.state.description)"
    />
    <button
      class="flex p-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500"
      @click="$store.dispatch('addTodo', $store.state.description)"
    >
      Ajouter
    </button>
  </div>
</template>
