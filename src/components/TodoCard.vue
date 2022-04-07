<template lang="">
  <div>
    <div
      v-for="todo in $store.getters.todoByPages"
      :key="todo._id"
      class="flex mb-4 items-center"
    >
      <p class="w-full text-gray-900" :class="{ 'line-through': todo.done }">
        {{ todo.description }}
      </p>
      <router-link :to="{ name: 'edit', params: { id: todo._id } }"
        ><button
          @click="$store.dispatch('setDescriptionModel', todo._id)"
          class="flex p-2 ml-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500"
        >
          Edit
        </button></router-link
      >
      <button
        class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white"
        :class="[
          todo.done
            ? 'text-green-500 border-green-500 hover:bg-green-500'
            : 'text-gray-500 border-gray-500 hover:bg-gray-500',
        ]"
        @click="
          () => {
            $store.dispatch('doneTodo', todo._id);
          }
        "
      >
        {{ todo.done ? "Fait" : "Pas fait" }}
      </button>
      <button
        class="flex p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
        @click="$store.dispatch('removeTodo', todo._id)"
      >
        Supprimer
      </button>
    </div>
  </div>
</template>
