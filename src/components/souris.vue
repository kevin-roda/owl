<template>
  <!-- eslint-disable max-len -->
  <div class="rk_cursor">

    <svg
      @click='morphToBall()'
      :width="cursorWidth"
      :height="cursorheight"
         viewBox="0 0 132.29166 132.29166"
         version="1.1"
         id="svg5"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:svg="http://www.w3.org/2000/svg">
        <defs
           id="defs2" />
        <g
           id="layer1"
           transform="matrix(2.2970445,0,0,2.3898113,12.831795,6.0779865)">
          <path
             style="color:#000000;fill:#19e590;stroke-width:0.264583;-inkscape-stroke:none"
             d="m 14.176647,38.626536 c 7.889123,7.831299 -0.694059,-15.620237 8.715041,-7.066987 6.913934,6.285044 5.314782,5.479884 10.484504,7.058359 29.751094,9.08392 3.791894,-7.997181 3.21368,-12.581583 C 35.979708,21.198607 39.108366,15.151021 43.08169,12.398511 50.71709,7.1091065 47.615766,-0.22810208 28.095836,10.645432 5.9990621,22.954391 34.510335,-12.490365 9.1315753,8.2302669 2.0368772,14.022773 -1.9541548,17.38218 -1.7288116,18.46439 -1.1815384,21.092668 10.388066,34.865724 14.176647,38.626536 Z"

             id="rk_cursor_svg" />
        </g>
      </svg>
</div>
</template>

<script>
import dynamics from 'dynamics.js';

export default {
  name: 'souris',
  props: {
    msg: String,
  },
  data() {
    return {
      cursorWidth: 500,
      cursorheight: 50,
      cursorViewbox: (130 * 26.4) / 100,

      cursorState: this.$store.getters.getMouseState,
    };
  },
  methods: {
    morphToBall() {
      this.$store.commit('mouseState', 'ball');
    },
  },

  mounted() {
    // in my vuex store file
    this.$store.watch((state) => state.mouseState, (newValue) => {
      const path = document.querySelector('#rk_cursor_svg');
      const to = 'm -1.2412605,27.497851 c 0.94622097,4.894128 -2.2534656,6.858262 15.9815805,14.814784 9.987604,4.357904 7.181316,0.963581 12.593498,1.311627 3.359205,0.216023 12.921047,-0.611328 13.221758,-5.010591 0.332387,-4.862654 2.844043,-2.613197 4.27234,-10.024621 C 45.510658,25.046306 46.452804,18.374895 42.875733,14.078608 32.08285,1.1156761 32.971863,4.8938421 27.736506,2.5232485 21.827979,-0.15215952 9.4189118,0.97570099 2.0098262,8.7283797 -4.7194638,15.769738 -1.9791579,23.681232 -1.2412605,27.497851 Z';
      const options = {
        type: dynamics.easeOut,
        duration: 1500,

      };
      switch (newValue) {
        case 'ball':
          dynamics.animate(path, {
            d: to,
          }, options);
          break;
        case 'rectangle':
          break;
        default:
      }
    });
    // const rect = path.getBoundingClientRect();
    // const logoIntro = document.querySelector('.rk_owl_logo_intro');
    // logoIntro.setAttribute('style', `top:${rect.top}px;left:${rect.left}px;
    // height:${rect.height}px;width:${rect.width}px;position:fixed;`);

    setTimeout(() => {
      // logoIntro.remove();
    }, 500);
  },

};
</script>

<style scoped lang="scss">
.st0,.st1{fill:transparent;}
.st2{fill:#1A9B69;}
#sidebar-wave {
  fill:#1A9B69;
  transform: scale(0.3) translatex(12%);
}
$green: white;

.rk_owl_logo_intro:after{
  content:'';
  position: absolute;
  left:0;
  top:0;
  display: block;
  background: #1A9B69;
  z-index: 10;
  animation: openingOwl 0.5s ease;
}

@keyframes loadingReady{
  0%{
    width:80%;
    height:100vh;
  }

  100%{
    width:60%;
    height:40vh;
  }
}
@keyframes appearingOwl{
  0%{
    opacity:0;
  }

  100%{
    opacity:1;
  }
}
@keyframes openingOwl{
  0%{
    height: 0px;
    width:5px;
  }
  50%{
    height: 100%;
    width:5px;
  }

  100%{
    height: 100%;
    width:100%;

  }
}
@keyframes menu{
  0%{opacity: 0;
    stroke:$green;
    fill:none;
    stroke-dashoffset: 600;}
    10%{
      opacity: 10;
      fill:none;
      stroke-dashoffset: 600;
    }
    80%{
      fill:rgba(0,0,0,0);
      stroke-dashoffset: 0;
    }
    100%{
      opacity: 10;
      stroke:$green;
      fill: $green;
      stroke-dashoffset: 0;

    }
  }

  #owl_logo{
    position: relative;
    width:80%;
    height: 100vh;
    padding:50px 0;
    animation: loadingReady 0.4s ease-in 2.4s;
    animation-fill-mode: forwards;
    .rk_owl{
      opacity: 0 ;
      animation: appearingOwl 0s ease 0.5s;
      animation-fill-mode: forwards;
    }
    .rk_owl_and_f{
      .st0{
        stroke:$green;
        fill: $green;
        stroke-dasharray: 600;
        opacity: 1;
        animation: menu 2s cubic-bezier(0,0.23,1,.1);
        animation-delay: 0s;
      }

      .st1{
        opacity: 1;
        stroke-dasharray: 600;
        animation: menu 2s cubic-bezier(0,0.23,1,.1);
        animation-fill-mode: forwards;
        animation-delay: 0s;
      }
    }
  }

  </style>
