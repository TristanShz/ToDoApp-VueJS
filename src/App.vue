<template lang="">
  <div class="h-screen">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>
<script>
import header from "./layouts/MyHeader.vue";
import footer from "./layouts/MyFooter.vue";
export default {
  name: "App",
  components: {
    myHeader: header,
    myFooter: footer,
  },
};
</script>
<style lang=""></style>
