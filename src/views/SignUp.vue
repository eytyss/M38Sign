<template>
<div class="overlay">
    <div class="login">
      <div class="login__inner">
        <div class="login__header">
          <div class="login__title">
            <h1 class="login__heading">Sign Up</h1>
          </div>
        </div>
        <br>
        <div class="login__content">
          <div class="login__form">
            <form @submit.prevent="onSubmit" class="form">
              <div class="form__group">
                <input class="form__input" placeholder="Email Address" type="text" v-model="email" name="email" required>

              </div>
              <br>
              <div class="form__group">
                <input class="form__input" placeholder=" Password" type="password" v-model="password" required>
              </div>
              <div class="form__group">
                <button class="form__btn" type="submit">
                  <span class="form__btn-text">sign in</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      email:'',
      password:''
    }
  },
  computed:{
    user() {
      return this.$store.getters.user
    }
  },
  watch: {
    user() {
      if (this.user !== null && this.user !== undefined) {
        this.$router.push('/home')
      }
    }
  },

  methods: {
    onSubmit(){
     // eslint-disable-next-line no-unused-vars
     const obj = {
      email: this.email,
      password: this.password
     }
     this.$store.dispatch("signUp",obj)

    }
  },
  components: {

  }
}
</script>
