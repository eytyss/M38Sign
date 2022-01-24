/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
  },
  getters:{
    user(state){
      return state.user
    }
  },
  mutations: {
    setUser(state, userId) {
      state.user = userId
    }
  },
  actions: {
    signUp({commit}, obj) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((user) => {
          commit('setUser', user.user.uid)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signIn({commit}, obj) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then((user) => {
          commit('setUser', user.user.uid)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    autoAuth({commit}, user){
      commit('setUser', user.uid)
    },
    logout({commit}) {
      const auth = getAuth()
      signOut(auth)
        .catch((error) => {
          console.log(error)
        })
      commit('setUser', null)
    }
  }
})
