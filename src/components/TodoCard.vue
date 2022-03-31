<template lang="">
  <div>
    <div
      v-for="todo in $store.getters.todoByPages"
      :key="todo.id"
      class="flex mb-4 items-center"
    >
      <div v-if="todo.id === $store.state.editingId" class="flex">
        <input
          v-model="
            $store.getters.todoByPages.find(
              (_todo) => _todo.id === $store.state.editingId
            ).description
          "
          class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700"
        />
        <button
          @click="
            () => {
              $store.dispatch('toggleEditId', undefined);
              $store.dispatch('saveTodo', todo.id);
            }
          "
          class="flex p-2 ml-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500"
        >
          Valider
        </button>
      </div>
      <p
        v-else
        @dblclick="$store.dispatch('toggleEditId', todo.id)"
        class="w-full text-gray-900"
        :class="{ 'line-through': todo.done }"
      >
        {{ todo.description }}
      </p>
      <!-- <p class="w-full text-gray-900" :class="{ 'line-through': todo.done }">
        {{ todo.description }}
      </p> -->
      <button
        class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white"
        :class="[
          todo.done
            ? 'text-green-500 border-green-500 hover:bg-green-500'
            : 'text-gray-500 border-gray-500 hover:bg-gray-500',
        ]"
        @click="
          () => {
            $store.dispatch('doneTodo', todo.id);
            $store.dispatch('saveTodo', todo.id);
          }
        "
      >
        {{ todo.done ? "Fait" : "Pas fait" }}
      </button>
      <button
        class="flex p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
        @click="$store.dispatch('removeTodo', todo.id)"
      >
        Supprimer
      </button>
    </div>
  </div>
</template>
