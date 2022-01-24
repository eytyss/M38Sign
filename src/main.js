import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth";


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    const firebaseConfig = {
      apiKey: "AIzaSyAs615l_hm21HwuMnHiNSotMzNNSRSQAKs",
      authDomain: "auth38-86da3.firebaseapp.com",
      projectId: "auth38-86da3",
      storageBucket: "auth38-86da3.appspot.com",
      messagingSenderId: "37769161081",
      appId: "1:37769161081:web:1d6f1953494a5c1f8c27a8"
    }
    // eslint-disable-next-line no-unused-vars
    const app = initializeApp(firebaseConfig)
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.dispatch("autoAuth", user)
        this.$router.push('/home')
      }
    })
  }
}).$mount('#app')
