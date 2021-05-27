<template>
  <div id="list-test"  v-bind:style="'size'">
    <magazine-list />
  </div>
</template>

<script>

import MagazineList from "../components/MagazineList.vue";
export default {
  components: {
    MagazineList,
    // MagazineGrid
    },
};
</script>

<style>

</style>