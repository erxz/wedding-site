<template>
  <main>
    <section class="pattern grey-pattern fadeIn">
      <div class="big-heart mx-auto center">
        <h2>6 de Octubre del 2018
              <br> 18.30h</h2>
      </div>
      <div class="container container--one">
        <div class="row">
          <div class="col intro-item--left">
            <h1>Alberto & Lucía</h1>
          </div>
          <div class="col intro-item--center">
            <img v-lazy="require(`../assets/images/alberlucia2x.jpg`)" alt="Alberto y Lucía dándose la mano" width="427">
          </div>
          <div class="col intro-item--right">
            <p class="type-italic">Bienvenidos a este pequeño espacio dedicado a nuestra boda.    Completa el formulario y confirma si asistirás!</p>
            <a href="https://goo.gl/forms/J8DAIlVWYavx0XnD2" class="btn uppercase">completar</a>
          </div>
        </div>
      </div>
    </section>
    <section class="where">
      <div class="container container--two where-bg">
        <div class="row">
          <div class="col where-col--left">
            <img v-lazy="require(`../assets/images/location2x.png`)" alt="Foto de Villa María" width="395" class="where-img" />
            <div class="where-link">
              <p class="where-text">Cerca de esta finca encontraréis hoteles donde podéis alojaros y descansar de la gran fiesta. Os dejamos un mapa!</p>
            </div>
          </div>
          <div class="col col--right where-col--right">
            <p class="type-italic">El lugar que hemos elegido para compartir este día tan especial con vosotros es </p>
            <h2 style="font-weight:bold">Villa María Bonita (Crevillente).</h2>
            <div class="divider"></div>
            <div class="where-map google-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d100276.89466781069!2d-0.8830823!3d38.2411596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63b94322204949%3A0x49368d13b65285ea!2zVmlsbGEgIk1hcsOtYSBCb25pdGEi!5e0!3m2!1sen!2ses!4v1530359510883"
                frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pattern">
      <div class="container container--three">
        <div class="row p-t-spacer">
          <div class="col">
            <h6 class="uppercase mt-0">¿nos ayudáis con la luna de miel?</h6>
            <p>Podéis aportar vuestro granito de arena en este número de cuenta para que podamos realizar nuestro viaje de novios y traeros muchos regalitos!!</p>
            <h3>ES3600811580380006184030</h3>
            <div class="divider"></div>
          </div>
          <div class="col col--right">
            <img v-lazy="require(`../assets/images/honeymoon.png`)" alt="Imagen de una isla paradisíaca" />
          </div>
        </div>
      </div>
    </section>
    <section class="grey-pattern photos">
      <div class="container container--one">
        <div class="row">
          <div class="col center">
            <p>Poneros bien guapos que nuestro gran fotógrafo
              <br><a href="http://www.ontheroadstudio.es/" target="_blank" rel="noopener noreferrer" class="diego-link">Diego Ruiz</a> va a hacer unas fotos tan geniales como estas. <br>Cuando pase la boda podréis encontrar todos esos recuerdos en esta web.</p>
          </div>
        </div>
        <div class="mansory">
          <div class="mansory-brick">
            <img v-lazy="require(`../assets/images/photo12x.png`)" class="lazy" alt="foto de alber y lucía" width="568" height="379"/>
          </div>
          <div class="mansory-brick">
            <img v-lazy="require(`../assets/images/photo32x.png`)" class="lazy photos-two" alt="foto de alber y lucía" width="440"/>
          </div>
          <div class="mansory-brick">
            <img v-lazy="require(`../assets/images/photo22x.png`)" class="lazy" alt="foto de alber y lucía" width="405" height="270" />
          </div>
          <div class="mansory-brick">
            <img v-lazy="require(`../assets/images/photo42x.png`)" class="lazy" alt="foto de alber y lucía" width="500"/>
          </div>
        </div>
      </div>
    </section>
  </main>
  </template>

<!-- If I have to write more css I prefer another separate file -->
<style src="../scss/main.scss" scoped></style>
