import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import Contacts from './components/Contacts.vue'
import NewContact from './components/NewContact.vue'
import Profile from './components/Profile.vue'

Vue.use('VueRouter');

var router = new VueRouter ({
  routes: [
    { path: '/contacts', component: Contacts },
    { path: '/new', component: NewContact },
    { path: '/profile', component: Profile}
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  data: {
    test: "bar"
  }
}).$mount('#app')
