<template>
  <main id="main-grid" v-bind:style="'size'">
    <div class="home-container" v-bind:style="'size'">
      <div id="current-issue"  v-bind:style="'size'">
        <featured-magazine />
      </div>
      <div id="previous-issues" v-bind:style="'size'">
        <magazines id="mag-grid" v-bind:style="'size'"/>
      </div>
    </div>
    <div id="button-container">
      <magazine-buttons />
    </div>
  </main>
</template>

<script>
import Magazines from "../views/Magazines.vue";
import FeaturedMagazine from "../components/FeaturedMagazine.vue";
import MagazineButtons from './MagazineButtons.vue';

export default {
  components: {
    Magazines,
    FeaturedMagazine,
    MagazineButtons,
  },
  props: [
    'size'
  ],
  computed: {
    checkSize() {
      let mediaSize = screen.width;
      if (mediaSize > 1200) {
        return '.large'
      }
      else if (mediaSize >500 && mediaSize < 1200) {
        return '.medium'
      }
      else {
        return '.small'
      }
    }
  }

};
</script>

<style>
#main-grid {
  justify-items: center;
  align-items: center;
  max-width: 100%;
  gap: 2px;
}

#current-issue {
  max-width: 100%;
  width: 600px;
  padding: 5px;
  justify-items: center;
  align-items: center;
}

#current-issue img {
  max-width: 100%;
  width: 600px;
}

#previous-issues {
  display: flex;
  flex-direction: row;
  flex-grow: auto;
  max-width: 100%;
  width: 700px;
}

.home-container {
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  gap: 2px;
}

.large {
  width: 900px;
}

.medium {
  width: 500px;
}

.small {
  width: 200px;
}



/* @media screen and (max-width: 1325px) {

    .home-container {
      flex-wrap: wrap;
      justify-items: center;
      align-items: center;
      gap: 2px;
    }

} */



</style>