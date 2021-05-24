<template>
  <div id="app">
    <nav>
      <router-link v-bind:to="{ name: 'home' }">Featured + Grid</router-link> |
      <router-link v-bind:to="{ name: 'mag-grid' }">Grid Only</router-link> |
      <router-link v-bind:to="{ name: 'featured' }">Featured Only</router-link>
    </nav>
    <br>
    <table>
      <tr>
        <th>Firehouse Magazine</th>
      </tr>
    </table>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: border-box;
  }

table, th, td {
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  padding: 15px;
  background-color: black;
  color: aliceblue;  
  text-align: left;
}

</style>