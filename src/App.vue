<template>
  <div class="wrapper">
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import * as types from "./store/types"

export default {
  mounted() {
    if (localStorage.getItem('ACCESS_TOKEN')) {
      this.$http.get('session')
      .then(response => {
        if (response.status == 201) {
          this.setUser(response.body.user)
        }
      })
      .catch(function (e) {
        if (e.status === 401) {
          console.log(e)
        }
      })
    }
  },
  methods: {
    ...mapActions({
      setUser: types.SET_USER,
    })
  }
};
</script>
