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
          <a data-toggle="collapse" href="#pagesExamples">
            <i class="material-icons">image</i>
            <p>Jobs
              <b class="caret"></b>
            </p>
          </a>
          <div class="collapse" id="pagesExamples">
            <ul class="nav">
              <li>
                <router-link tag="a" :to="{name:'Schedule'}">Schedule</router-link>
              </li>
               <li v-if="user.role==0">
                <router-link tag="a" :to="{name:'Contracts'}">Contracts</router-link>
              </li>
              <li>
                <router-link tag="a" :to="{name:'Task'}">Tasks</router-link>
              </li>
              <li>
                <router-link tag="a" :to="{name:'Assignment'}">Assignment</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a data-toggle="collapse" href="#componentsExamples">
            <i class="material-icons">apps</i>
            <p>Reviews
              <b class="caret"></b>
            </p>
          </a>
          <div class="collapse" id="componentsExamples">
            <ul class="nav">
              <li>
                <router-link tag="a" :to="{name:'CustomerReview'}">From Customers</router-link>
              </li>
              <li>
                <router-link tag="a" :to="{name:'BossReview'}">From Your Boss</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a data-toggle="collapse" href="#tablesExamples">
            <i class="material-icons">grid_on</i>
            <p>Devices
              <b class="caret"></b>
            </p>
          </a>
          <div class="collapse" id="tablesExamples">
            <ul class="nav">
              <li>
                <router-link tag="a" :to="{name:'Devices'}">Your Devices</router-link>
              </li>
              <li>
                <router-link tag="a" :to="{name:'Hiring'}">Hiring</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a data-toggle="collapse" href="#financeExamples">
            <i class="material-icons">grid_on</i>
            <p>Finance
              <b class="caret"></b>
            </p>
          </a>
          <div class="collapse" id="financeExamples">
            <ul class="nav">
              <li v-if="user.role==0">
                <router-link tag="a" :to="{name:'Income'}">Income</router-link>
              </li>
              <li>
                <router-link tag="a" :to="{name:'Salary'}">Salary</router-link>
              </li>
              <li>
                <router-link tag="a" :to="{name:'Dept'}">Dept</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a data-toggle="collapse" href="#TeamExamples">
            <i class="material-icons">grid_on</i>
            <p>Team
              <b class="caret"></b>
            </p>
          </a>
          <div class="collapse" id="TeamExamples">
            <ul class="nav">
              <li v-if="user.role==0">
                <router-link tag="a" :to="{name:'TeamMake'}">New Team</router-link>
              </li>
              <li>
                <router-link tag="a" :to="{name:'Team'}">Current Teams</router-link>
              </li>
            </ul>
          </div>
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
