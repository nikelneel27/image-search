import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'
import VueLazyload from 'vue-lazyload'




Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueLazyload)

// Vue.use(window.VueChartJs)
// console.log(Vue);
const firebaseConfig = {
  apiKey: "AIzaSyAqwkeKC4rtotpjPx9_Dff85yOERU3CrXs",
  authDomain: "image-search-65f9c.firebaseapp.com",
  databaseURL: "https://image-search-65f9c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "image-search-65f9c",
  storageBucket: "image-search-65f9c.appspot.com",
  messagingSenderId: "509512892014",
  appId: "1:509512892014:web:2c9c59ec333302f670307f",
  measurementId: "G-0L9LL45RRV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if (!app) {
    app = new Vue({
      store,
      router,
      VueLazyload,
      render: h => h(App),
    }).$mount('#app')

  }
})

