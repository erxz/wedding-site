import {
  mount
} from '@vue/test-utils'

import Vue from 'vue'
import router from '../router'
import App from '../components/App.vue'

// Components
import Footer from '../components/Footer.vue'
import Construction from '../components/Construction.vue'

// Partials
import Home from '../views/Home.vue'

// Plugins
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload)

// Test content based on route
describe('Construction', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Construction)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

// Home page content
describe('Home', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct content', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toBe(`Alberto & Lucia  Nos hace muy felices celebrar nuestra boda junto a vosotros. Completa el formulario y confirma si asistirás! completar  ¿Dónde? Villa María Bonita
             Crevillente   ¿Cuándo? 6 de Octubre del 2018
             18.30h  ¿nos ayudáis con la luna de miel? ES3600811580380006184030   Aquí os dejamos algunas fotos de preboda, después
             subiremos las de la boda así que... no olvidéis enviarnos las vuestras!`)
  })
})

// // Footer
// describe('Footer', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(Footer)
//     expect(wrapper.isVueInstance()).toBeTruthy()
//   })
//   test('has correct content', () => {
//     const wrapper = mount(Footer)
//     expect(wrapper.text()).toBe(`Alber & Lucía
//     Design and code by enreckless`)
//   })
// })
