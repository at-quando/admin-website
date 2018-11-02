import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/store'
import filter from './helper/filter'
import directive from './helper/directive'
import router from './router'
import VueResource from 'vue-resource'
import GlobalComponents from './GlobalComponent'

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// import VueI18n from 'vue-i18n'
// import i18n from './locales/config'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/bootstrap.css'
import './assets/css/google-font.css'
import './assets/css/material.css'
import './assets/css/demo.css'

import '../static/jquery-3.1.1.min.js'
import '../static/jquery-ui.min.js'
import '../static/bootstrap.min.js'
import '../static/material.min.js'
import '../static/perfect-scrollbar.jquery.min.js'
import '../static/jquery.validate.min.js'
import '../static/moment.min.js'
import '../static/chartist.min.js'
import '../static/bootstrap-notify.js'
import '../static/jquery.sharrre.js'
import '../static/bootstrap-datetimepicker.js'
import '../static/jquery-jvectormap.js'
import '../static/nouislider.min.js'
import '../static/jquery.select-bootstrap.js'
// import '../static/jquery.datatables.js'
import '../static/sweetalert2.js'
import '../static/jasny-bootstrap.min.js'
import '../static/fullcalendar.min.js'
import '../static/jquery.tagsinput.js'
import '../static/material-dashboard.js'
import '../static/demo.js'

Vue.use(VueQuillEditor)
Vue.use(ElementUI)
// Vue.use(VueI18n)
Vue.use(Vuex)
Vue.use(router)
Vue.use(VueResource)
Vue.use(GlobalComponents)

Vue.http.options.root = process.env.SERVER_IP
// set header for all request
Vue.http.headers.common['Access-Token'] = localStorage.getItem('ACCESS_TOKEN')
Vue.http.headers.common['Uid'] = localStorage.getItem('UID')
Vue.http.headers.common['Provider'] = localStorage.getItem('PROVIDER')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  filter,
  directive,
  template: '<App/>',
  components: { App }
})
