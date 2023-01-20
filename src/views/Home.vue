<template>
  <div class="home" :class="this.$store.getters.getState">
    <section class="rk_sct1 rk_pleine_hauteur rk_sct1_menu">
      <h1 :class="{
        rk_slct_1: currentSection == 1,
        rk_slct_2: currentSection == 2,
        rk_slct_3: currentSection == 3,
      }">

        <span @mouseleave="currentSection = 0" @mouseenter="timeout(1)">
          <span>D</span>
          <span>é</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>p</span>
          <span>e</span>
          <span>u</span>
          <span>r</span>
          <div :style="mainBg" class="rk_bg_form rk_bg_1"></div>
          <div :style="mainBg" class="rk_bg_form rk_bg_2"></div>
          <div :style="mainBg" class="rk_bg_form rk_bg_3"></div>
        </span>
        <span @mouseleave="currentSection = 0" @mouseenter="timeout(2)">
          <span>K</span>
          <span>é</span>
          <span>v</span>
          <span>i</span>
          <span>n</span>
          <span> &nbsp;</span>
          <span>r</span>
          <span>o</span>
          <span>d</span>
          <span>a</span>
          <div :style="mainBg" class="rk_bg_form rk_bg_1"></div>
          <div :style="mainBg" class="rk_bg_form rk_bg_2"></div>
          <div :style="mainBg" class="rk_bg_form rk_bg_3"></div>
          <div :style="mainBg" class="rk_bg_form rk_bg_4"></div>
        </span>
        <span @mouseleave="currentSection = 0" @mouseenter="timeout(3)">
          <router-link :to="'/cours'">
            <span>F</span>
            <span>o</span>
            <span>r</span>
            <span>m</span>
            <span>a</span>
            <span>t</span>
            <span>e</span>
            <span>u</span>
            <span>r</span>
          </router-link>
          <div :style="mainBg" class="rk_bg_form rk_bg_1"></div>
          <div :style="mainBg" class="rk_bg_form rk_bg_2"></div>
          <div :style="mainBg" class="rk_bg_form rk_bg_3"></div>
          <div :style="mainBg" class="rk_bg_form rk_bg_4"></div>

          <!-- <span>w</span>
        <span>e</span>
        <span>b</span> -->
        </span>
      </h1>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import Pages from '@/components/pages.vue';
// import Souris from '@/components/souris.vue';

export default {
  name: "Home",
  data() {
    return {
      nbPage: 4,
      speed: 0,
      mainBg: "",
      currentSection: 0,
      movingInterval: "",
      logoHtml: "",
      currentPage: this.$store.getters.getCurrentPage,
    };
  },
  watch: {
    $route() {
      clearInterval(this.movingInterval);
    },
    currentSection(val) {
      if (val == 1) {
        this.mainBg =
          "background-image: url(https://picsum.photos/id/1/1920/1080);";
        console.log(this.mainBg);
      } else if (val == 2) {
        this.mainBg =
          "background-image: url(https://picsum.photos/id/1006/1920/1080);";
      } else if (val == 3) {
        this.mainBg =
          "background-image: url(https://picsum.photos/id/395/1920/1080);";
      } else {
        this.mainBg = "";
      }
    },
  },
  components: {
    // Pages,
    // Logo,
    // Souris,
  },
  methods: {
    timeout(sct) {
      setTimeout(() => {
        this.currentSection = sct;
      }, 600);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color1: #15161a;
$color2: #1f2026;
$textClr1: white;
$textClr2: #19e590;
$pages: 1, 2, 3, 4, 5, 6;
$green: #1a9c69;

/* normal sizes */
$TgrdTxt: 20rem;
$grdTxt: 5rem;
$moyTxt: 2rem;
$nmlTxt: 3rem;
$cube: 15rem;

/* medium sizes */
$TgrdTxtMed: 20rem;
$grdTxtMed: 5rem;
$moyTxtMed: 2rem;
$nmlTxtMed: 3rem;
$cubeMed: 15rem;

/* small sizes */
$TgrdTxtSml: 5rem;
$grdTxtSml: 2rem;
$moyTxtSml: 1rem;
$nmlTxtSml: 3rem;
$cubeSml: 4rem;

.home {
  a {
    color: inherit !important;
  }

  section {
    height: 100vh;
  }

  &.loaded {
    .rk_sct1_menu {
      h1 {
        height: 100%;

        >span {
          height: 100%;
          background-color: $color2;
        }
      }
    }
  }

  .rk_sct1_menu {
    position: relative;
    display: flex;
    justify-content: center;
    transform: translateY(40vh);
    align-items: center;
    transition: all 0.8s ease;
    height: 100vh;
    overflow: hidden;

    h1 {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
      width: 100%;
      transition-delay: 1s;

      display: flex;
      justify-content: space-evenly;
      font-size: 42px;
      z-index: 0;
      position: relative;
      overflow: hidden;

      @for $i from 1 through 3 {
        >span:nth-child(#{$i}) {
          transition: all 0.4s;
          transition-delay: (0.8 + (0.2 * $i)) + s;
        }
      }

      @for $i from 1 through 3 {
        &.rk_slct_#{$i} {
          @if $i ==1 {
            @for $j from 1 through 4 {
              >span:nth-child(2) {
                .rk_bg_#{$j} {
                  transition-delay: (0.3 + (0.1 * $j)) + s;
                  opacity: 1;
                }
              }

              >span:nth-child(3) {
                .rk_bg_#{$j} {
                  transition-delay: (0.6 + (0.1 * $j)) + s;
                  opacity: 1;
                }
              }
            }
          }

          @else if $i ==2 {
            @for $j from 1 through 4 {
              >span:nth-child(1) {
                .rk_bg_#{$j} {
                  transition-delay: (0.3 + (0.1 * $j)) + s;
                  opacity: 1;
                }
              }

              >span:nth-child(3) {
                .rk_bg_#{$j} {
                  transition-delay: (0.6 + (0.1 * $j)) + s;
                  opacity: 1;
                }
              }
            }
          }

          @else {
            @for $j from 1 through 4 {
              >span:nth-child(2) {
                .rk_bg_#{$j} {
                  transition-delay: (0.3 + (0.1 * $j)) + s;
                  opacity: 1;
                }
              }

              >span:nth-child(1) {
                .rk_bg_#{$j} {
                  transition-delay: (0.6 + (0.1 * $j)) + s;
                  opacity: 1;
                }
              }
            }
          }
        }
      }

      >span {
        position: relative;

        &:hover {
          div {
            opacity: 1;
          }
        }

        &:nth-child(1) {
          .rk_bg_form {
            background-size: 100vw;
            background-position: 0vw;
            background-image: url(https://picsum.photos/id/1/1920/1080);
          }
        }

        &:nth-child(2) {
          .rk_bg_form {
            background-size: 100vw;
            background-position: -33.3333vw;
            background-image: url(https://picsum.photos/id/1006/1920/1080);
          }

          .rk_bg_1 {
            clip-path: polygon(0 0, 100% 0, 100% 20%, 50% 70%);
          }

          .rk_bg_2 {
            clip-path: polygon(100% 100%, 50% 70%, 100% 20%);
          }

          .rk_bg_3 {
            clip-path: polygon(0 0, 50% 70%, 0 100%);
          }

          .rk_bg_4 {
            clip-path: polygon(100% 100%, 50% 70%, 0 100%);
          }
        }

        &:nth-child(3) {
          .rk_bg_form {
            background-image: url(https://picsum.photos/id/395/1920/1080);
            background-size: 100vw;
            background-position: -66.6666vw;
          }

          .rk_bg_1 {
            clip-path: polygon(0 72%, 100% 100%, 0 100%, 0 72%);
          }

          .rk_bg_2 {
            clip-path: polygon(100% 0, 100% 20%, 50% 22%, 0 72%, 0 0);
          }

          .rk_bg_3 {
            clip-path: polygon(0 72%, 50% 22%, 100% 20%, 50% 70%);
          }

          .rk_bg_4 {
            clip-path: polygon(0 72%, 100% 100%, 100% 20%, 50% 70%);
          }
        }

        .rk_bg_form {
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0;
          transition: all 0.4s;
        }

        .rk_bg_1 {
          clip-path: polygon(59% 0, 100% 0, 100% 50%, 75% 30%, 0 22%, 0 0);
        }

        .rk_bg_2 {
          clip-path: polygon(43% 58%,
              59% 85%,
              100% 50%,
              75% 30%,
              0 22%,
              0% 50%);
          transition-delay: 0.1s;
        }

        .rk_bg_3 {
          clip-path: polygon(43% 58%,
              59% 85%,
              100% 50%,
              100% 100%,
              0 100%,
              0% 50%);
          transition-delay: 0.2s;
        }

        .rk_bg_4 {
          transition-delay: 0.3s;
        }

        height: 100%;
        width: 33.33333%;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          &:nth-child(1) {
            color: white;
          }

          position: relative;
          z-index: 2;
          display: inline-block;
          transition: all 0.4s;
          transform: translateY(60px);
          opacity: 0;
        }

        &:nth-child(1) {
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: $textClr2;
          font-size: 3rem;
          color: $textClr2;

          @for $i from 1 through 12 {
            span:nth-child(#{$i}) {
              transition-delay: 1 + (0.1s * $i);
            }
          }
        }

        &:nth-child(2) {
          color: white;
          font-size: 32px;

          span:nth-child(1) {
            color: $textClr2;
          }
        }

        &:nth-child(3) {
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: $textClr2;
          font-size: 3rem;
          color: $textClr2;

          @for $i from 1 through 15 {
            span:nth-child(#{15 - $i}) {
              transition-delay: 1 + (0.1s * $i);
            }
          }
        }
      }
    }

    .rk_content {
      position: relative;
    }

    display: flex;
    flex-direction: column-reverse;
    flex-direction: center;
    justify-content: center;

    h2 {
      z-index: 1;
      color: $textClr1;
      font-size: $TgrdTxt;
      line-height: $TgrdTxt;
      margin: 0;
      text-transform: uppercase;
      text-align: center;
      position: relative;
    }

    h1 {
      color: $textClr1;
      margin: 0;
      text-align: center;
      font-size: $moyTxt;
    }
  }

  &.loaded {
    .rk_sct1 {
      transform: translateY(0);

      h1 {
        span {
          span {
            opacity: 1;

            transform: translateY(0px);
          }
        }
      }
    }
  }
}
</style>
