import Vue from 'vue'
import Router from 'vue-router'
import Construction from '../components/Construction'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: window.location.pathName,
  routes: [{
      path: '/test',
      component: Home
    },
    {
      path: '/',
      component: Construction,
      props: {
        introText: "Holi la web está en construcción, pero pronto estará LIVE!"
      }
    },
    {
      path: '*',
      component: Construction,
      props: {
        introText: "Este es el típico 404. Vuelve a inicio anda!"
      }
    }
  ]
})
