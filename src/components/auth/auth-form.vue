<template>
<div>
  <nav class="navbar navbar-primary navbar-transparent navbar-absolute">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="../dashboard.html">PICOLO PHOTO</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="../dashboard.html">
              <i class="material-icons">dashboard</i> Home
            </a>
          </li>
          <li :class="!checkPage? 'active': ''">
            <router-link tag="a" :to="{name: 'SignUp'}">
              <i class="material-icons">person_add</i> Register
            </router-link>
          </li>
          <li :class="checkPage? 'active': ''">
            <router-link tag="a" :to="{name: 'Login'}">
              <i class="material-icons">fingerprint</i> Login
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="wrapper wrapper-full-page">
    <div class="full-page" :class="checkPage? 'login-page': 'register-page'" filter-color="black" :style="{'background-image': `url(${require('../../assets/img/login.jpg')})`}">
        <div class="content">
          <div class="container">
            <div class="row">
              <router-view/>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="container">
            <nav class="pull-left">
              <ul>
                <li>
                  <a href="#">
                      FACEBOOK FANPAGE
                  </a>
                </li>
                <li>
                  <a href="#">
                      Portfolio
                  </a>
                </li>
                <li>
                  <a href="#">
                      Blog
                  </a>
                </li>
              </ul>
            </nav>
            <p class="copyright pull-right">
              <a href="http://www.creative-tim.com/">Picolo is a new brand made by  &copy;The Classic Studio.</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 data () {
   return {
     checkPage: null
   }
 },
  created () {
    this.checkPage = this.$route.path === '/auth/login'
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>