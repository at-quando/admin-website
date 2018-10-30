import Navbar from './components/ComponentGlobal/navbar.vue'
import Header from './components/ComponentGlobal/header.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('navbar', Navbar)
    Vue.component('header-nav', Header)
  }
}

export default GlobalComponents
