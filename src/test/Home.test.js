import {
  mount
} from '@vue/test-utils'

import Vue from 'vue'

// Partials
import Home from '../views/Home.vue'

// Plugins
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload)

// Home page content
describe('Home', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct content', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toBe(`6 de Octubre del 2018
             18.30h Alberto & Lucía  Bienvenidos a este pequeño espacio dedicado a nuestra boda.    Completa el formulario y confirma si asistirás! completar  Cerca de esta finca encontraréis hoteles donde podéis alojaros y descansar de la gran fiesta. Os dejamos un mapa! El lugar que hemos elegido para compartir este día tan especial con vosotros es  Villa María Bonita (Crevillente).   ¿nos ayudáis con la luna de miel? Podéis aportar vuestro granito de arena en este número de cuenta para que podamos realizar nuestro viaje de novios y traeros muchos regalitos!! ES3600811580380006184030   Poneros bien guapos que nuestro gran fotógrafo
            Diego Ruiz va a hacer unas fotos tan geniales como estas. Cuando pase la boda podréis encontrar todos esos recuerdos en esta web.`)
  })
})
