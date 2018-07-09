import {
  mount
} from '@vue/test-utils'

// Components
import Construction from '../components/Construction.vue'

// Test content based on route
describe('Construction', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Construction)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

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
