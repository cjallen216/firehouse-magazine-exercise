<template>
  <div id="featured-issue">
      <magazine-card
      v-show="magazine.featured"
      v-bind:magazine="magazine"
      v-for="magazine in $store.state.magazines"
      v-bind:key="magazine.img"
    />
    </div>
</template>

<script>
import MagazineCard from "../components/MagazineCard.vue"

export default {
    components: {
    MagazineCard,
  },

}
</script>

<style>
#featured-issue img {
    padding: 1%;
    max-width: 100%;
    width: 600px;
}

</style>