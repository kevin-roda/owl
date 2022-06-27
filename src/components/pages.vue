<template>
  <div @mouseover="status = 'mousein'" @mouseleave="status = 'mouseout'"
  :style="'top:calc(50% - '+ (((100 * totalPages) /2) - 100 *
  (index - 1))+'px);'" class="rk_page_card"
  :class="'page-' + index + ' ' + (currentPage == index ? 'isCurrent': '') + ' '+status">
  <h2>{{ pageTitle }}</h2>
  <router-link  @mouseover="this.$store.commit('currentPage', currentPage); router.push('nous');"
  class="rk_page_link"  to="/nous">En savoir plus</router-link>
</div>
</template>

<script>

import Router from '../router/index';

export default {
  name: 'pagePreview',
  props: {
    pageTitle: String,
    index: Number,
    totalPages: Number,
    currentPage: Number,
  },
  data() {
    return {
      status: 'mouseout',
      router: Router,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home.loaded, .home.mounted,{
  .rk_page_card{
    h1{
      margin:0;
    }
    &:not(.isCurrent){
      transform:  translatex(-50%) scale(0.7) !important;
    }
    &.isCurrent{
      &.mousein{
        .rk_page_link{
          position:absolute;
          bottom:0;
          left:50%;
          transform : translatex(-50%) translateY(0%);
          animation-fill-mode: forwards;
          animation: navAppear 1s ease;
        }
      }
    }
    .rk_page_link{
      position:absolute;
      bottom:0;
      left:50%;
      animation-fill-mode: forwards;
      transform : translatex(-50%) translateY(100%);
      animation-delay: 2s;
    }
    overflow: hidden;
    left:20%;
    width:50%;
    height:50px;
    margin:0 auto;
    background: #19e590;
    color:#15161a;
    position: absolute;
  }
}
@keyframes navAppear {
  0%  {
    transform : translatex(-50%) translateY(100%);
  }
  80% {
    transform : translatex(-50%) translateY(100%);
  }
  100% {
    transform : translatex(-50%) translateY(0%);
  }
}
</style>
