<template>
  <div class='home'>
    <header class="header">
    <div class="container">
        <div class="header__inner">
            <div class="header__logo">
              Logo
            </div>
            <nav class="nav">
                <a class="nav__link" href="#">Features</a>
                <a class="nav__link" href="#">Works</a>
                <a class="nav__link" href="#">About</a>
            </nav>
        </div>
    </div>
</header>
  </div>
</template>

<script>
export default {
	name: 'Home',
   methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
}
</script>

<style>
.home {
    background: #f0f4f5;
    height:88vh;
}

.container {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
}

.header__inner{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__logo{
   font-size: 3vmin;
  font-family: "Sen", sans-serif;
  color: #1c203b;
  cursor:pointer
}
.nav {
    display: flex;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
}

.nav__link {
    margin-left: 50px;
    color: rgb(58, 48, 48);
    text-decoration: none;
    opacity: .75;
    transition: opacity .1s linear;
}

.nav__link:first-child {
    margin-left: 0;
}

.nav__link:hover {
    opacity: 1;
}


</style>