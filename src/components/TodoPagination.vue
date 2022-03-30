<template lang="">
  <div class="flex items-center justify-center" id="pagination">
    <span v-show="currentPage !== 1" @click="setCurrentPage(1)">
      <font-awesome-icon icon="fa-solid fa-angles-left"
    /></span>
    <span v-show="currentPage !== 1" @click="setCurrentPage(currentPage - 1)">
      <font-awesome-icon icon="fa-solid fa-angle-left"
    /></span>
    <span
      v-for="number in maxPage"
      :key="number"
      @click="setCurrentPage(number)"
      :class="{ currentPage: number == currentPage }"
      >{{ number }}
    </span>
    <span
      v-show="currentPage !== maxPage && maxPage"
      @click="setCurrentPage(currentPage + 1)"
    >
      <font-awesome-icon icon="fa-solid fa-angle-right"
    /></span>
    <span
      v-show="currentPage !== maxPage && maxPage"
      @click="setCurrentPage(maxPage)"
    >
      <font-awesome-icon icon="fa-solid fa-angles-right"
    /></span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    currentPage: Number,
    maxPage: Number,
  },
  methods: {
    setCurrentPage(page) {
      this.$emit("onPageSet", page);
    },
  },
};
</script>
<style lang=""></style>
