<template>
  <div class="site-construction">
    <a href="/">
      <img src="../assets/images/emojis.png" alt="Emoji de la boda de Alber y Lucía" width="140">
    </a>
    <h1>{{introText}}</h1>
    <p>Completa el formulario de <a href="https://goo.gl/forms/J8DAIlVWYavx0XnD2">asistencia aquí</a> </p>
    <div style="width:100%;height:0;padding-bottom:75%;position:relative;">
      <iframe src="https://giphy.com/embed/o0UDAcR1XmWJi" width="100%" height="100%" style="position:absolute" frameBorder="0"
        class="giphy-embed" allowFullScreen></iframe>
    </div>
    <!-- <h1>La página no ha sido encontrada</h1>
    <p><a href="/">Vuelve al inicio</a></p> -->
  </div>
</template>

<style lang="scss" scoped>
  .site-construction {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1em;
  }
  h1 {
    font-size: 25px;
    margin-bottom: 0;
  }
  h1,
  p {
    text-align: center;
  }
  a {
    text-decoration: underline;
  }
</style>

<script>
  export default {
    props: ["introText"]
  };
</script>
