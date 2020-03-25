<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      res:{},
    }
  },
  mounted(){
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>
