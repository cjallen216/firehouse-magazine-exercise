<template>
  <div class="magazine-container" v-bind:style="'size'">
    <div class="magazine-flex" v-bind:style="'size'">
    <magazine-card
      v-show="!magazine.featured"
      v-bind:magazine="magazine"
      v-for="magazine in $store.state.magazines"
      v-bind:key="magazine.img"
    />
    </div>
  </div>
</template>

<script>
import MagazineCard from "@/components/MagazineCard.vue";
export default {
  name: "magazine-list",
  components: {
    MagazineCard,
  },
};
</script>

<style>
.magazine-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 25px;
}

.magazine-flex {
  max-width: 100%;
  /* width: 800px; */
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>