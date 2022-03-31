<template lang="">
  <div>
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>
<script>
import header from "./layouts/MyHeader.vue";
export default {
  name: "App",
  components: {
    myHeader: header,
  },
};
</script>
<style lang=""></style>
