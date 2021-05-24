<template>
  <div class="details" v-bind:class="{ img: magazine.img }">
    <img v-bind:src="'https://img.firehouse.com/files/base/cygnus/fhc/image/' + magazine.img + '.png'" />
    <h3 class="magazine-month">{{magazine.title}}</h3>
  </div>
</template>

<script>
export default {
  name: "magazine-details",
  data() {
    return {
      img: "",
    };
  },
  created() {
    const img = this.$route.params.img;
    this.magazine =
      this.$store.state.magazines.find((magazine) => magazine.img == img);
  },
};
</script>

<style>
img {
  padding: 1px;
  max-width: 100%;
  width: 800px;
}
</style>