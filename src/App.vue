<template>
  <div id="app">
    <router-view/>
    <div class="links">
      <router-link to="/detail">Detail</router-link>
      <router-link to="/tree">Tree</router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  & .links {
    top: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>
