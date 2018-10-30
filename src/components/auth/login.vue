<template>
  <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
    <div>
      <div class="card card-login">
        <div class="card-header text-center" data-background-color="rose">
          <h4 class="card-title">Login</h4>
          <div class="social-line">
            <a href="#btn" class="btn btn-just-icon btn-simple">
              <i class="fa fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-just-icon btn-simple">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#eugen" class="btn btn-just-icon btn-simple">
              <i class="fa fa-google-plus"></i>
            </a>
          </div>
        </div>
        <p class="category text-center">
          Or Be Classical
        </p>
        <div class="card-content">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="material-icons">email</i>
            </span>
            <div class="form-group label-floating">
              <label class="control-label">Email address</label>
              <input type="email"  v-model="loginInfo.uid" class="form-control">
            </div>
          </div>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="material-icons">lock_outline</i>
            </span>
            <div class="form-group label-floating">
              <label class="control-label">Password</label>
              <input type="password" v-model="loginInfo.password" class="form-control">
            </div>
          </div>
        </div>
        <div class="footer text-center">
          <button @click="submitLogin()" class="btn btn-rose btn-simple btn-wd btn-lg">Let's go</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import * as types from '../../store/types'

export default {
  name: 'Login',
  data() {
    return {
      loginInfo: {
        uid: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      setUser: types.SET_USER,
    }),
    submitLogin () {
      this.$http.post('session', this.loginInfo)
      .then(response => {
        if (response.status == 201) {
          localStorage.setItem('ACCESS_TOKEN', response.headers.map['access-token'][0])
          localStorage.setItem('UID',  response.headers.map['uid'][0])
          localStorage.setItem('PROVIDER', response.headers.map['provider'][0])
          this.$http.headers.common['Access-Token'] = localStorage.getItem('ACCESS_TOKEN')
          this.$http.headers.common['Uid'] = localStorage.getItem('UID')
          this.$http.headers.common['Provider'] = localStorage.getItem('PROVIDER')
          window.location.href = '/app'
        }
      })
      .catch(function (e) {
        if (e.status === 401) {
          console.log(33342)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>