<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <router-link to="/" v-if='!userIsAuth'>Sign In | </router-link>
        <router-link to="/signUp" v-if='!userIsAuth'>Sign Up</router-link>
        <router-link to="/" v-if='userIsAuth'><a class="logout" href="#" @click='logout'>Logout</a></router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      userIsAuth() {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f0f4f5;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logout{
    display: flex;
    justify-content: center;
    padding: 15px 5px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    border:1px solid rgba(226, 214, 214, 0.876);
    text-align: center;
}
</style>
