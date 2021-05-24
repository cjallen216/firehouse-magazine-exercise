<template>
  <main id="main-grid">
    <div class="home-container">
      <div id="current-issue">
        <featured-magazine />
      </div>
      <div id="previous-issues">
        <magazines id="mag-grid" />
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
  flex-shrink: auto;
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

/* @media screen and (max-width: 1325px) {

    .home-container {
      flex-wrap: wrap;
      justify-items: center;
      align-items: center;
      gap: 2px;
    }

} */



</style>