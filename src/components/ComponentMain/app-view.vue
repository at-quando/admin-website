<template>
  <div class="wrapper">
    <navbar/>
    <div class="main-panel">
      <header-nav/>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'AppView',
  created() {
    
  }
}
</script>
<style>
.content {
  margin-top: 75px !important;
}
</style>
