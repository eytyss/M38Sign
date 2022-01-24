<template>
<div class="overlay">
    <div class="login">
      <div class="login__inner">
        <div class="login__header">
          <div class="login__title">
            <h1 class="login__heading">Sign in</h1>
          </div>
          <br>
        </div>
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
    user(value) {
      if (value !== null && value !== undefined) {
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
     this.$store.dispatch("signIn", obj)

    }
  },
  components: {

  }
}
</script>
<style>
.overlay{
  display: grid;
  place-items: center;
  height:88vh;
}

.login__inner{
  box-shadow: 0 0 20px rgba(8, 7, 16, 0.185);
  padding: 50px 35px;
  background-color: white;
  border-radius: 10px;
  border: 2px solid rgba(128, 128, 128, 0.13);

}

.form__group{
  margin-bottom: 5px;
}

.form__input {
  outline: none;
  background-color: #fff;
  border-radius: 4px;
  border: none;
  display: block;
  padding: 0.9rem 0.7rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 17px;
  color: #4A4A4A;
  text-indent: 40px;
  text-align: left;
}

.form__btn{
    margin-top: 50px;
    width: 100%;
    background-color: #ffffff;
    color: #0807107a;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    border:1px solid rgba(226, 214, 214, 0.876)
}
</style>
