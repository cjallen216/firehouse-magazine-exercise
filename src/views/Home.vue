<template>
  <div id="home">
    <dashboard />
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard.vue";

export default {
  components: {
    Dashboard,
  },
};
</script>

<style>
#home {
  max-width: 100%;
  box-sizing: border-box;
}
</style>