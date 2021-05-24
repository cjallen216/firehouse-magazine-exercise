<template>
  <div id="button-container">
      <button
        id="button"
        onclick="document.location='https://www.firehouse.com/subscribe'"
      >
        Subscribe
      </button>
      <button
        id="button"
        onclick="document.location='https://www.firehouse.com/magazine/5408e3b028ed5701887727d9'"
      >
        Archives
      </button>
      <button
        id="button"
        onclick="document.location='https://endeavor.omeda.com/fh/login.do'"
      >
        Renewal
      </button>
    </div>
</template>

<script>
export default {
    name: 'mag-buttons',
}
</script>

<style>
#button {
  background-color: red;
  color: whitesmoke;
}

#button-container {
  grid-area: buttons;
  display: flex;
  padding: 10px;
  gap: 5px;
}
</style>