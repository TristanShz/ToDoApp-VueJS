<template lang="">
  <div class="mb-5">
    <div class="mb-2">{{ pourcentageDone }} réalisé</div>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        class="bg-blue-600 h-2.5 rounded-full"
        :style="{
          width: pourcentageDone,
        }"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pourcentageDone: String,
  },
};
</script>
<style lang=""></style>
