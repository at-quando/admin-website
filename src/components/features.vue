<template>
  <div>
    <router-view name="auth"/>
    <router-view name="dash"/>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'Features',
  created() {
  }
};
</script>
