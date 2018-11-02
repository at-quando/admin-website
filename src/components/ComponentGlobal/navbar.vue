<template>
  <div class="sidebar" data-active-color="rose" data-background-color="black" :data-image="require('../../assets/img/sidebar-1.jpg')">
    <div class="logo">
      <a href="http://www.creative-tim.com/" class="simple-text">
        THE CLASSIC STUDIO
      </a>
    </div>
    <div class="logo logo-mini">
      <a href="http://www.creative-tim.com/" class="simple-text">
        Ct
      </a>
    </div>
    <div class="sidebar-wrapper" v-if="user">
      <div class="user">
        <div class="photo">
            <img src="../../assets/img/faces/avatar.jpg" />
        </div>
        <div class="info">
          <a data-toggle="collapse" href="#collapseExample" class="collapsed">
            {{user.name}}
            <b class="caret"></b>
          </a>
          <div class="collapse" id="collapseExample">
            <ul class="nav">
              <li>
                <router-link tag="a" :to="{name:'UserProfile'}">Edit Profile</router-link>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul class="nav">
        <li class="active">
          <router-link tag="a" :to="{name:'Dashboard'}">
            <i class="material-icons">dashboard</i>
            <p>Dashboard</p>
          </router-link>
        </li>
        <li>
          <router-link tag="a" :to="{name:'List'}">
            <i class="material-icons">image</i>
            <p>Articles</p>
          </router-link>
        </li>
        <li>
          <router-link tag="a" :to="{name:'Albums'}">
            <i class="material-icons">image</i>
            <p>Albums</p>
          </router-link>
        </li>
        <li>
          <router-link tag="a" :to="{name:'Videos'}">
            <i class="material-icons">image</i>
            <p>Videos</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as types from '../../store/types'

export default {
  computed: {
    ...mapGetters({
      user: types.USER
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
