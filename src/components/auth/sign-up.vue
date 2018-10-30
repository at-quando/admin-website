<template>
  <div class="col-md-10 col-md-offset-1">
    <div class="card card-signup">
      <h2 class="card-title text-center">Register</h2>
      <div class="row">
        <div class="col-md-5 col-md-offset-1">
          <div class="card-content">
            <div class="info info-horizontal">
              <div class="icon icon-rose">
                <i class="material-icons">timeline</i>
              </div>
              <div class="description">
                <h4 class="info-title">Marketing</h4>
                <p class="description">
                    We've created the marketing campaign of the website. It was a very interesting collaboration.
                </p>
              </div>
            </div>
            <div class="info info-horizontal">
              <div class="icon icon-primary">
                  <i class="material-icons">code</i>
              </div>
              <div class="description">
                <h4 class="info-title">Fully Coded in HTML5</h4>
                <p class="description">
                    We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.
                </p>
              </div>
            </div>
            <div class="info info-horizontal">
              <div class="icon icon-info">
                <i class="material-icons">group</i>
              </div>
              <div class="description">
                <h4 class="info-title">Built Audience</h4>
                <p class="description">
                  There is also a Fully Customizable CMS Admin Dashboard for this product.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="social text-center">
              <button class="btn btn-just-icon btn-round btn-twitter">
                  <i class="fa fa-twitter"></i>
              </button>
              <button class="btn btn-just-icon btn-round btn-dribbble">
                  <i class="fa fa-dribbble"></i>
              </button>
              <button class="btn btn-just-icon btn-round btn-facebook">
                  <i class="fa fa-facebook"> </i>
              </button>
              <h4> or be classical </h4>
          </div>
          <form class="form" method="" action="#">
            <div class="card-content">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="material-icons">face</i>
                </span>
                <input type="text" class="form-control" v-model="signupInfo.name" placeholder="Your Name...">
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="material-icons">phone</i>
                </span>
                <input type="text" class="form-control" v-model="signupInfo.phone" placeholder="Phone...">
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="material-icons">email</i>
                </span>
                <input type="email" class="form-control" v-model="signupInfo.uid" placeholder="Email...">
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="material-icons">lock_outline</i>
                </span>
                <input type="password" placeholder="Password..." v-model="signupInfo.password" class="form-control" />
              </div>
              <!-- If you want to add a checkbox to this form, uncomment this code -->
              <div class="checkbox">
                <label>
                  <input type="checkbox" name="optionsCheckboxes"> I agree to the
                  <a href="#something">terms and conditions</a>.
                </label>
              </div>
            </div>
            <div class="footer text-center">
              <a href="#pablo" class="btn btn-primary btn-round" :disabled="signupInfo.name === '' || signupInfo.uid === ''  || signupInfo.password === ''" @click="singup()">Get Started</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SignUp',
  data() {
    return {
      signupInfo: {
        name: '',
        uid: '',
        password: '',
        phone: ''
      }
    }
  },
  methods: {
    singup() {
       this.$http.post('users', this.signupInfo)
      .then(response => {
        console.log(234, response.body)
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