<template>
  <div id="app" class="app" v-bind:class="{ 'app-xs font-system': $route.path !== '/test' }">
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

<!-- Some global styles -->
<style lang="scss">
  @import '~normalize.css';
  * {
    box-sizing: border-box;
  }
  body {
    font-family:  "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    color: hsl(0, 0%, 11%);
    font-size: 16px;
    line-height: 1.5;
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: currentColor;
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
