<template>
  <div class="mag-container">
    <div class="mag-flex">
      <magazine-card
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
  name: "magazine-grid",
  components: {
    MagazineCard,
  },
};
</script>

<style>
.mag-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 25px;
}

.mag-flex {
  width: 700px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>