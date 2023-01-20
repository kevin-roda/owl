<template>
  <div>
    <Menu></Menu>
    <router-view />
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->


</template>



<script>
// @ is an alias to /src
// import Pages from '@/components/pages.vue';
import Menu from '@/components/menu.vue';

// import Souris from '@/components/souris.vue';


export default {
  name: 'app',
  data() {

  },
  components: {
    // Pages,
    Menu,
    // Souris,
  },
  methods: {

  },

};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

body {
  margin: 0;
  max-width: 100vw;
  overflow-x: hidden;
  background: #15161a;
}

html {
  scroll-behavior: smooth;
  transition: scroll 0.4s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #19e590;
  height: 100vh;

  width: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
