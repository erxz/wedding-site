import {
  mount
} from '@vue/test-utils'
import App from '../components/App.vue'
import Footer from '../components/Footer.vue'
import Construction from '../components/Construction.vue'
import Home from '../views/Home.vue'

// describe('Footer', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(Footer)
//     expect(wrapper.isVueInstance()).toBeTruthy()
//   })

//   test('has correct content', () => {
//     const wrapper = mount(Footer)
//     expect(wrapper.text()).toBe(`Alber & Lucía
//    Design and code by enreckless`)
//   })
// })

// Test content based on route
describe('Construction', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Construction)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

// And more..
describe('Home', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('has correct content', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toBe(`Alberto & Lucia  Nos hace muy felices celebrar nuestra boda junto a vosotros. Completa el formulario y confirma si asistirás! completar  ver en google maps ¿Dónde? Villa María Bonita  Crevillente   ¿Cuándo? 6 de Octubre del 2018  18.30h  ¿nos ayudáis con la luna de miel? Banco XXX  ES6000491500051234567892`)
  })
})
