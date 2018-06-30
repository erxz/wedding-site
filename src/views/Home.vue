<template>
  <main>
    <section class="intro pattern">
      <div class="big-heart mx-auto center">
        <svg width="29" height="25" viewBox="0 0 24 21" aria-labelledby="heart" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.608 20.997c-22.647-12.354-6.268-27.713 0-17.369 6.269-10.344 22.649 5.015 0 17.369z" />
        </svg>
      </div>
      <div class="container container--one">
        <div class="row">
          <div class="col intro-item--left">
            <h1>Alberto & Lucia</h1>
          </div>
          <div class="col intro-item--center">
            <img src="~@/assets/images/alberlucia2x.jpg" alt="Alberto y Lucía dándose la mano" width="427">
          </div>
          <div class="col intro-item--right">
            <p class="type-italic">Nos hace muy felices celebrar nuestra boda junto a vosotros. Completa el formulario y confirma si asistirás!</p>
            <a href="https://goo.gl/forms/J8DAIlVWYavx0XnD2" class="btn uppercase">completar</a>
          </div>
        </div>
      </div>
    </section>
    <section class="where">
      <div class="container container--two where-bg">
        <div class="row">
          <div class="col right">
            <img src="~@/assets/images/location2x.png" alt="Foto de Villa María" width="395" class="where-img">
            <div class="where-link"><a href="https://goo.gl/maps/aM4tvNE5Yz52" class="uppercase" rel="noopener" target="_blank">ver en google maps</a></div>
          </div>
          <div class="col where-col--right">
            <h6 class="uppercase">¿Dónde?</h6>
            <h2>Villa María Bonita <br> Crevillente</h2>
            <div class="divider"></div>
            <img src="~@/assets/images/map.png" alt="Imagen de la ubicación de Villa María" class="where-map">
          </div>
        </div>
      </div>
    </section>
    <section class="pattern">
      <div class="container container--three">
        <div class="row">
          <div class="col center">
            <h6 class="uppercase">¿Cuándo?</h6>
            <h2>6 de Octubre del 2018 <br> 18.30h</h2>
            <div class="divider mx-auto"></div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h4 class="uppercase">¿nos ayudáis con la luna de miel?</h4>
            <h3>Banco XXX <br> ES6000491500051234567892</h3>
            <div class="divider"></div>
          </div>
          <div class="col">
            <img src="~@/assets/images/honeymoon.png" alt="Imagen de una isla paradisíaca" class="">
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<!-- If I have to write more css I prefer another separate file -->
<style src="../scss/main.scss" scoped></style>


