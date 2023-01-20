
<!-- fermer menu quand click sur fenetter et faire apparaitre un par un les menu  -->
<template>
  <header :class="{ ready: isReady }">
    <Logo>
    </Logo>
    <div class="rk_menu_opener" :class="isMenuOpened" @click="isMenuOpened = 'opened'">
      <div class="rk_trait"></div>
      <div class="rk_trait"></div>
      <div class="rk_trait"></div>
    </div>

    <nav class="menu">
      <router-link class="menu__link" :to="'/old'"><span>Old</span></router-link>

      <a href="/cours" class="menu__link">
        <span>cours</span> </a><a href="http://testcours.mbfd8820.odns.fr/cours-web/vue-js/"
        class="menu__link"><span>vue-js</span></a>
    </nav>
    <div class="rk_close_menu" @click="isMenuOpened = 'closing'">
      <div class="rk_trait"></div>
      <div class="rk_trait"></div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/logo.vue';

export default {
  name: 'menu',
  data: function () {
    return {
      isMenuOpened: '',
      isReady: false,
    };
  },
  components: {
    // Pages,
    Logo,
    // Souris,
  },
  mounted() {


  },
  created: function () {
    let currenApp = this;

    setTimeout(function () {
      currenApp.isMenuOpened = 'init';
      currenApp.$store.commit('appState', 'loaded');

    }, 2500);
    setTimeout(function () {
      currenApp.isMenuOpened = 'closed';
      currenApp.$emit('page-ready');
      currenApp.isReady = true;
    }, 3500);

  },
  methods: {},
  watch: {
    isMenuOpened: function (newstatus, oldStatus) {
      let currenApp = this;
      if (currenApp.isMenuOpened == 'opened') {
        currenApp.isMenuOpened = 'opened preparing';
        setTimeout(function () {
          currenApp.isMenuOpened = 'opened ready';
        }, 400);
      }
      if (currenApp.isMenuOpened == 'closing') {
        currenApp.isMenuOpened = 'opened preparing';
        setTimeout(function () {
          currenApp.isMenuOpened = 'init';
        }, 400);
        setTimeout(function () {
          currenApp.isMenuOpened = 'closed';
        }, 800);
      }
    },
  },
};
</script>



<style lang="scss">
header.ready {
  z-index: 100000;
  position: relative;

}

.rk_menu_opener {
  position: fixed;
  right: 50px;
  top: 50px;
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  cursor: pointer;

  .rk_trait {
    width: 50px;
    height: 6px;
    background: #19e590;

    transform: translateX(200px);
  }

  &.opened {
    .rk_trait {
      transition: transform 0.4s;
    }

    .rk_trait:nth-child(1) {
      transform: translateX(200px);
    }

    .rk_trait:nth-child(2) {
      transition-delay: 0.2s;
      transform: translateX(200px);
    }

    .rk_trait:nth-child(3) {
      transition-delay: 0.4s;
      transform: translateX(200px);
    }
  }

  &.init {
    .rk_trait {
      transition: transform 0.4s;

      &:nth-child(1) {
        transition-delay: 0.2s;
        transform: translateX(0px);
      }

      &:nth-child(2) {
        transition-delay: 0.4s;
        transform: translateX(0px);
      }

      &:nth-child(3) {
        transition-delay: 0.6s;
        transform: translateX(0px);
      }
    }
  }

  &.closed {
    .rk_trait {
      transition-delay: 0s;
      transition: transform 0.4s;
      transform: translateX(0px);
    }
  }

  &:hover .rk_trait {
    &:nth-child(1) {
      transform: translateX(50%);
    }

    &:nth-child(3) {
      transform: translateX(-50%);
    }
  }
}

.rk_menu_opener.opened+nav {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  background: rgba(43, 43, 43, 0);
  backdrop-filter: blur(0);
  transition: all 0.5s;
  overflow: hidden;
  z-index: 11;

  a {
    text-decoration: none;
    width: 33%;
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    transition: all 0.4s ease;
    transform: translateX(100vw);

    &:nth-child(1) {
      align-self: flex-end;
    }

    &:nth-child(2) {
      align-self: center;
    }

    &:nth-child(3) {
      align-self: flex-start;
    }

    span {
      padding: 10px 20px;
      background: #19e590;
    }
  }
}

.rk_menu_opener.opened~.rk_close_menu {
  position: fixed;
  top: 50px;
  right: 50px;
  display: block;
  height: 50px;
  width: 50px;
  cursor: pointer;
  z-index: 11;

  .rk_trait {
    width: 50px;
    height: 6px;
    position: absolute;
    background: #19e590;
    transform-origin: center;
    transition: all 0.4s ease;
  }
}

// .rk_menu_opener.preparing {
//   & ~ .rk_close_menu {
//     .rk_trait {
//       &:nth-child(1) {
//         transform: rotate(45deg) translate(200px, 0);
//       }
//       &:nth-child(2) {
//         transform: rotate(-45deg) translate(200px, 0);
//       }
//     }
//   }
// }

.rk_menu_opener {
  &.ready {
    &+nav {
      background: rgba(43, 43, 43, 0.1);
      backdrop-filter: blur(10px);

      a {
        transform: translateX(0);

        &:nth-child(1) {
          transition-delay: 0.2s;
        }

        &:nth-child(2) {
          transition-delay: 0.4s;
        }

        &:nth-child(3) {
          transition-delay: 0.6s;
        }
      }
    }

    &~.rk_close_menu {
      .rk_trait {
        &:nth-child(1) {
          transition-delay: 0.6s;
          transform: rotate(45deg) translate(0, 0);
        }

        &:nth-child(2) {
          transition-delay: 0.8s;
          transform: rotate(-45deg) translate(0, 0);
        }
      }
    }
  }

  &:not(.ready) {
    &~.rk_close_menu {
      .rk_trait {
        &:nth-child(1) {
          transform: rotate(45deg) translate(200px, 0);
        }

        &:nth-child(2) {
          transform: rotate(-45deg) translate(200px, 0);
        }
      }
    }
  }

}

.menu {
  display: none;
}
</style>
