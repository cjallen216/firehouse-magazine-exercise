<template>
  <div id="featured-issue" v-bind:style="'size'">
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
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    width: 100%;
}

#featured-issue {
  position: relative;
      display: block;
      width: 100%;
      padding: 0;
      overflow: hidden;
}

</style>