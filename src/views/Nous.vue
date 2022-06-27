<template>
  <div class="rk_single_page">
    <div @mouseover="this.$router.go(-1)" class="rk_closePage">
      X
    </div>
    <h1>À propos de Owl formations</h1>

  </div>
</template>

<script>

export default {
  name: 'Nous',
  data() {
    return {
    };
  },
  mounted() {
    console.log(this.$store.getters.getState);
    const application = document.querySelector('#app');
    application.style.width = '100vw';
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rk_single_page {
  position:relative;
  padding-top:50px;
  h1{
    margin:0;
  }
}
.rk_closePage {
  position: absolute;
  left:50%;
  transform: translatex(-50%);
  top:0;
  background-color:red;
  width:50px;
  height:50px;
  display:flex;
  align-items: center;
  justify-content: center;
}

</style>
