<template lang="">
  <div class="flex items-center justify-center" id="pagination">
    <span
      v-show="$store.state.currentPage !== 1"
      @click="$store.dispatch('setCurrentPage', 1)"
    >
      <font-awesome-icon icon="fa-solid fa-angles-left"
    /></span>
    <span
      v-show="$store.state.currentPage !== 1"
      @click="$store.dispatch('setCurrentPage', $store.state.currentPage - 1)"
    >
      <font-awesome-icon icon="fa-solid fa-angle-left"
    /></span>
    <span
      v-for="number in $store.getters.maxPage"
      :key="number"
      @click="$store.dispatch('setCurrentPage', number)"
      :class="{ currentPage: number == $store.state.currentPage }"
      >{{ number }}
    </span>
    <span
      v-show="
        $store.state.currentPage !== $store.getters.maxPage &&
        $store.getters.maxPage
      "
      @click="$store.dispatch('setCurrentPage', $store.state.currentPage + 1)"
    >
      <font-awesome-icon icon="fa-solid fa-angle-right"
    /></span>
    <span
      v-show="
        $store.state.currentPage !== $store.getters.maxPage &&
        $store.getters.maxPage
      "
      @click="$store.dispatch('setCurrentPage', $store.getters.maxPage)"
    >
      <font-awesome-icon icon="fa-solid fa-angles-right"
    /></span>
  </div>
</template>
