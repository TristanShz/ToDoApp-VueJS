<template lang="">
  <div class="flex items-center justify-center">
    <div
      class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto flex items-center justify-center flex-col overflow-x-hidden"
    >
      <h1 class="text-3xl text-gray-900 mb-8">Edit Todo</h1>
      <input
        v-model="$store.state.description"
        class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700 mb-8"
      />
      <router-link to="/todos"
        ><button
          @click="
            () => {
              $store.dispatch('editTodo', $route.params.id);
            }
          "
          class="flex p-2 ml-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500"
        >
          Valider
        </button></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "EditTodo",
};
</script>
<style lang=""></style>
