<template>
  <div id="app" class="app" v-bind:class="{ 'app-xs': $route.path !== '/test' }">
    <router-view />
    <appfooter></appfooter>
  </div>
</template>

<script>
import appfooter from './Footer'
export default {
  name: 'app',
  components: {
    appfooter
  }
}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<style>
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:600");
  .app {
    font-family: "Source Sans Pro", sans-serif;
    color: #1d1d1d;
  }
  .app-xs {
    padding: 15px;
    max-width: 500px;
    margin: 15px auto 0;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
</style>
