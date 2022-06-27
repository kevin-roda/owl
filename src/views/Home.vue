<template>
  <div class="home" :class="this.$store.getters.getState">

      
    <section class="rk_sct1 ">
    <h1>
      <span>
        <span>F</span>
        <span>o</span>
        <span>r</span>
        <span>m</span>
        <span>a</span>
        <span>t</span>
        <span>e</span>
        <span>u</span>
        <span>r</span>
      </span>
      <span>et </span>
      <span>
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
        
        <span>w</span>
        <span>e</span>
        <span>b</span>

      </span>
    </h1>
    </section>

    <section class="rk_sct2">

    </section>



</div>
</template>

<script>
// @ is an alias to /src
// import Pages from '@/components/pages.vue';
// import Souris from '@/components/souris.vue';


export default {
  name: 'Home',
  data() {
    return {
      nbPage: 4,
      speed: 0,
      movingInterval: '',
      logoHtml: '',
      currentPage: this.$store.getters.getCurrentPage,
    };
  },
  watch: {
    $route() {
      clearInterval(this.movingInterval);
    },
    speed(val, oldVal) {
      if (val !== oldVal) {
        clearInterval(this.movingInterval);
        const vue = this;

        if (vue.currentPage + vue.speed <= 0 && vue.speed < 0) {
          vue.currentPage = 1;
        } else if (vue.currentPage + vue.speed > vue.nbPage && vue.speed > 0) {
          vue.currentPage = vue.nbPage;
        } else {
          vue.currentPage += vue.speed;
        }
        let pageElem = `.page-${vue.currentPage}`;
        let nextElem = document.querySelector(pageElem);
        nextElem.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
          inline: 'center',
        });

        this.movingInterval = setInterval(() => {
          if (vue.currentPage + vue.speed <= 0 && vue.speed < 0) {
            vue.currentPage = 1;
          } else if (vue.currentPage + vue.speed > vue.nbPage && vue.speed > 0) {
            vue.currentPage = vue.nbPage;
          } else {
            vue.currentPage += vue.speed;
          }
          pageElem = `.page-${vue.currentPage}`;
          nextElem = document.querySelector(pageElem);
          nextElem.scrollIntoView({
            block: 'center',
            behavior: 'smooth',
            inline: 'center',
          });
        }, 500);
      } else {
        clearInterval(this.movingInterval);
      }
    },
  },
  components: {
    // Pages,
    // Logo,
    // Souris,
  },
  methods: {
    morphToBall: () => {
      console.log('ok');
    },
  },
  //  mounted() {
  //    this.$store.commit('appState', 'mounted');
  //  }
  /*  
  mounted() {
  if (this.$store.getters.getState.length === 0) {
  this.$store.commit('appState', 'mounted');
}
const vue = this;
const application = document.querySelector('#app');
application.style.width = `${this.nbPage * 45 + 30}%`;
const handleMousemove = (event) => {
const position = event.x;
const percent = ((Math.round(100 - (((position * 100) / window.innerWidth))) * 2) - 100) * -1;
if ((percent <= -90)) {
vue.speed = -1;
} else if (percent > -90 && percent <= 90) {
vue.speed = 0;
} else if (percent > 90) {
vue.speed = 1;
}
};
document.addEventListener('mousemove', handleMousemove);
setTimeout(() => {
this.$store.commit('appState', 'loaded');
}, 4000);
}, */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$pages: 1, 2, 3, 4, 5, 6;
$green: #1A9C69;

.home{
  section {
    height: 100vh;
  }
  .rk_sct1 {
    display: flex;
    justify-content: center;
        transform: translateY(40vh);
    align-items: center;
    transition: all .8s ease;
  }
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 42px;
    overflow: hidden;
    > span {
      span {
        display: inline-block;
        transition: all .4s;
        transform: translateY(60px);
        opacity: 0;
      }
      &:nth-child(1){
        @for $i from 1 through 12 {
        span:nth-child(#{$i}) {
            transition-delay:1 + (.1s * $i);
        }
      }
      }

       &:nth-child(2){
        color:white;
       }
       &:nth-child(3){
        @for $i from 1 through 15 {
        span:nth-child(#{15 - $i}) {
            transition-delay:1 + (.1s * $i);
        }
      }
      }
      
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
