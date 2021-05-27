<template>
  <div class="card" v-bind:class="{ read: magazine.read }"  v-bind:style="'size'">
    <div class="cover-image">
      <router-link
        v-bind:to="{ name: 'magazine-details', params: { img: magazine.img } }"
      >
        <img
          v-if="magazine.img"
          v-bind:src="
            'https://img.firehouse.com/files/base/cygnus/fhc/image/' +
            magazine.img +
            '.png'
          "
        />
        <!-- <h3 v-if="magazine.featured" class="magazine-month">
          {{ magazine.title }}
        </h3> -->
        <h3>{{magazine.title}}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "magazine-card",
  props: {
    magazine: Object,
  },
};
</script>

<style>
.card img {
  width: 150px;
}

a {
  text-decoration: none;
}
</style>