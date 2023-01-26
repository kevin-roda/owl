<template lang="fr">
 <main :class="[{not_choosed: !asChoosed},{scrolled: homeScroll > 0} ,this.$store.getters.getState ] ">
   <!-- <section class="rk_pleine_hauteur rk_sct1_accueil" :class="isReady">
     <div class="rk_content">
       <h2>DIGITAL</h2>
       <cube @page-ready="pageReady">

       </cube>
     </div>
       <TransitionGroup name="octogones" tag="div">
        <div :key="ovtoDEv" v-for="ovtoDEv in nbOctoDEv" class="octo_dev">
    </div>
</TransitionGroup>
   </section>  -->
   <cube @page-ready="pageReady">
    </cube>
    <modal v-if="showModal" @close="showModal = false"></modal>
   <section class="rk_sct1 rk_pleine_hauteur rk_sct1_accueil" :class="isReady">
    
    <h1>
      <span>Formations web en </span> <span>Savoie</span> <span> / </span>
      <span>Haute-Savoie</span>
    </h1>
    
    <div class="rk_image_rect">

    </div>
    <div class="rk_image_rect">

    </div>
    <div class="rk_image_rect">

    </div>
    <div class="rk_image_rect">

    </div>
    <div class="rk_image_rect">

    </div>
   </section>
   
   <section class="rk_pleine_hauteur rk_sct2_accueil">
     
     <h2>Des cursus prêts!</h2>
     <div class="rk_logo_zone" :class="currentCursus">
      <div>
        <img src="../assets/wordpress-icon.svg" alt="Logo wordpress"/>
      </div>
      <div>
        <img src="../assets/php-icon.svg" alt="Logo PHP"/>
      </div>
      <div>
        <img src="../assets/html-icon.svg" alt="Logo html"/>
      </div>
      <div>
        <img src="../assets/css-icon.svg" alt="Logo css"/>
      </div>
      <div>
        <img src="../assets/js-icon.svg" alt="Logo javascript"/>
      </div>
      <div>
        <img src="../assets/nodejs-icon.svg" alt="Logo NodeJs"/>
      </div>
      <div>
        <img src="../assets/typescript-icon.svg" alt="Logo typescript"/>
      </div>
      <div>
        <img src="../assets/vuejs-icon.svg" alt="Logo typescript"/>
      </div>
      <p class="wordpress">La formation wordpres bla bla La formation wordpres bla bla La formation wordpres bla blaLa formation wordpres bla bla</p>
      <p class="backend">La formation wordpres bla bla La formation wordpres bla bla La formation wordpres bla blaLa formation wordpres bla bla</p>
      <p class="frontend">La formation front-end bla bla La formation wordpres bla bla La formation wordpres bla blaLa formation wordpres bla bla</p>
      <p class="fullstack">La formation front-end bla bla La formation wordpres bla bla La formation wordpres bla blaLa formation wordpres bla bla</p>
      <div>
        <img src="../assets/vuejs-icon.svg" alt="Logo vueJs"/>
      </div>
      <div class="rk_tree_h rk_btt1"></div>
      <div class="rk_tree_h rk_btt20"></div>
      <div class="rk_tree_h rk_btt21"></div>
      <div class="rk_tree_v rk_btt22"></div>
      <div class="rk_tree_v rk_btt23"></div>
      <div class="rk_tree_h rk_btt24"></div>
      <div class="rk_tree_h rk_btt25"></div>
      <div class="rk_tree_v rk_btt26"></div>
      <div class="rk_tree_h rk_btt27"></div>
      <div class="rk_tree_h rk_btt28"></div>
      <div class="rk_tree_v rk_btt30"></div>
      <div class="rk_tree_h rk_btt31"></div>
     </div>
     <div class="rk_text">
       <div class="rk_shape_floating"  :style="'transform:translate(' +(-position + 4)+'px, ' +(-position + 4)+'px);'">
      </div>
       
         <div class="rk_cursus">
        <h3>Quel Développeur veut-tu devenir ?</h3>
        <div>
          <p @click="changeCursus('wordpress')">Wordpress</p>
           <p @click="changeCursus('front')">Front-end</p>
        </div>
        <div>
          <p @click="changeCursus('back')">Back-end</p> <p  @click="changeCursus('fullstack')">Fullstack</p>
        </div>
          
          
        </div>
       </div>
     </section>
     <section class="rk_sct_pictos">
       <div class="rk_picto">
         <i>

         </i>
         <div class="rk_picto_txt">
           Permier picto
         </div>
       </div>
       <div class="rk_picto_separator">

       </div>
       <div class="rk_picto">
         <i>

         </i>
         <div class="rk_picto_txt">
           Deuxieme picto
         </div>
       </div>
       <div class="rk_picto_separator">

       </div>
       <div class="rk_picto">
         <i>

         </i>
         <div class="rk_picto_txt">
           Troisieme picto
         </div>
       </div>
     </section>
     <section class="rk_pleine_hauteur rk_sct3_cours">

       <h2>Les cours proposés</h2>

       <div class="rk_cours_link" @click="showModal = true; $store.commit('currentCoursePage', '717f35156c6c497f83d3c934e80592e5'); ">
         <div class="rk_nb">
           .01
         </div>
         <div class="rk_subtitle">
           Lorem ipsum dolor
         </div>
         <div class="rk_intro">
           Lorem ipsum dolor  Lorem ipsum dolor
           Lorem ipsum dolor  Lorem ipsum dolor
           Lorem ipsum dolor
         </div>
         <div class="rk_click">
           Voir ce cours
         </div>
        </div>
       <div class="rk_cours_link">
         <div class="rk_nb">
           .01
         </div>
         <div class="rk_subtitle">
           Lorem ipsum dolor
         </div>
         <div class="rk_intro">
           Lorem ipsum dolor  Lorem ipsum dolor
           Lorem ipsum dolor  Lorem ipsum dolor
           Lorem ipsum dolor
         </div>
         <div class="rk_click">
           Voir ce cours
         </div>
        </div>
       <div class="rk_cours_link">
         <div class="rk_nb">
           .01
         </div>
         <div class="rk_subtitle">
           Lorem ipsum dolor
         </div>
         <div class="rk_intro">
           Lorem ipsum dolor  Lorem ipsum dolor
           Lorem ipsum dolor  Lorem ipsum dolor
           Lorem ipsum dolor
         </div>
         <div class="rk_click">
           Voir ce cours
         </div>
        </div>
       <div class="rk_cours_link">
         <div class="rk_nb">
           .01
         </div>
         <div class="rk_subtitle">
           Lorem ipsum dolor
         </div>
         <div class="rk_intro">
           Lorem ipsum dolor  Lorem ipsum dolor
           Lorem ipsum dolor  Lorem ipsum dolor
           Lorem ipsum dolor
         </div>
         <div class="rk_click">
           Voir ce cours
         </div>
        </div>

     </section>
     <section class="rk_sct3_accueil">
       <div class="rk_container">
         <div class="rk_title">
           <h2>Contact</h2>
         </div>
         <div class="rk_contact">
           <form method="POST">
             <div class="rk_input_groupe">
               <input class="" type="text" placeholder="Nom" name="nom">
               <input class="" type="text" placeholder="Prénom" name="prenom">
             </div>
             <div class="rk_input_groupe">
               <input class="" type="email" placeholder="Email" name="email">
             </div>
             <div class="rk_input_groupe">
               <input class="" type="text" placeholder="Tel." name="tel">
             </div>
             <div class="rk_input_groupe">
               <button class="rk_form_btn" type="submit">Envoyer</button>
             </div>
           </form>
         </div>
       </div>
     </section>
   </main>

 </template>

<script>
import Cube from '../components/rubik.vue';
import CoursList from '../components/cours_list.vue';

export default {
  name: 'accueil',
  components: {
    cube: Cube,
    modal: CoursList,
  },
  data() {
    return {
      isReady: '',
      showModal: false,
      position: '',
      homeScroll: 0,
      nbOctoDEv: 0,
      octoInterval: '',
      asChoosed: false,
      currentCursus: ''
    };
  },
  mounted() {
    let vueElem = this;
    document.onscroll = function () {

      vueElem.position = vueElem.getVerticalScrollPercentage();
      vueElem.$store.commit('scrollState', vueElem.position);

    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('wheel', this.handleScrollHome);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    changeCursus(cursus) {
      this.currentCursus = "";
      setTimeout(() => {
        this.currentCursus = cursus;
      }, 450);
    },
    OctoFill(isDev) {
      clearInterval(this.octoInterval);
      let currentElem = this;
      currentElem.octoInterval = setInterval(() => {
        if (isDev) {
          currentElem.nbOctoDEv++;
        } else {
        }
      }, 100);
    },
    OctoEmpty(isDev) {
      clearInterval(this.octoInterval);
      let currentElem = this;
      currentElem.octoInterval = setInterval(() => {
        if (currentElem.nbOctoDEv <= 0) {
          clearInterval(currentElem.octoInterval);
        } else if (isDev) {
          currentElem.nbOctoDEv--;
        } else {
        }
      }, 100);
    },
    handleScrollHome(e) {
      if (Math.sign(e.wheelDelta) == -1) {
        if (this.homeScroll < 7) {
          this.homeScroll++;
        }
      } else {
        if (this.homeScroll > 0) {
          this.homeScroll--;

        }

      }

    },
    handleScroll(event) {
      const windowH = document.documentElement.clientHeight;
      const hTotal = document.documentElement.scrollHeight - windowH;
      const hdebutScale = hTotal - windowH;
      const currentScroll = window.scrollY;
      const pourcentage = Math.round((currentScroll * 100) / hTotal);
      const form = document.querySelector('.rk_sct3_accueil .rk_container');
      // rgb(147, 193, 120)
      // rgb(70, 92, 139)
      if (currentScroll > hdebutScale) {
        form.style.transform =
          'scale(' +
          Math.round(((currentScroll - hdebutScale) * 100) / windowH) / 100 +
          ')';
      }
    },
    getVerticalScrollPercentage() {
      var p = document.body.parentNode;
      return (
        ((document.body.scrollTop || p.scrollTop) /
          (p.scrollHeight - p.clientHeight)) *
        100
      );
    },
    pageReady() {
      this.isReady = 'page_ready';
    },
  },
};
</script>

<style lang="scss" scoped>
$color1: #15161a;
$color2: #1f2026;
$textClr1: white;
$textClr2: #19e590;

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

// octogones

$octoheight: 10vh;
$octoWidth: 10vh;

// cursus

$cursusTop: 0px;
$cursusMiddle : 100px;
$cursusBottom: 200px;
$cursusCenter: 40%;
$cursusLeft: 20%;
$cursusRight: 70%;
$tpsAnim: .2s;


main {
  background: $color1;

  &.not_choosed {
    // overflow: hidden;
    height: 100vh;
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

    &.scrolled {
      .rk_sct1 {
        transform: translateY(0);

        h1 {
          span {
            @for $i from 1 through 12 {
              span:nth-child(#{$i}) {
                transition-delay: 0.1s * $i;
              }
            }
          }
        }
      }
    }
  }
}

// Titre
.octogones-move,
.octogones-enter-active,
.octogones-leave-active {
  transition: all 0.2s ease;
}

.octogones-enter-from,
.octogones-leave-to {
  transform: scale(0);
}

.octo_dev {
  width: $octoheight;
  height: $octoWidth;
  position: fixed;
  background: #19e5903a;
  clip-path: polygon(30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%);
  z-index: 10;
  backdrop-filter: blur(10px);

  @for $i from 0 through 100 {
    @if $i % 2==0 {
      &:nth-child(#{$i + 1}) {
        bottom: ($octoheight * $i) / 2;
        right: random(7) * $octoheight;
      }

      &:nth-child(#{$i + 2}) {
        top: ($octoheight * $i)/ 2;
        right: random(7) * $octoheight;
      }
    }
  }
}

@keyframes octoAppear {
  to {
    transform: scale(1);
  }
}

.rk_sct1_accueil {
  position: relative;
  display: flex;
  justify-content: center;
  transform: translateY(40vh);
  align-items: center;
  transition: all 0.8s ease;
  width: 100%;

  .rk_image_rect {
    clip-path: polygon(100% 0, 70% 100%, 0 100%, 30% 0);
    width: 380px;

    height: 130px;
    background-color: #fff;
    position: absolute;
    background-image: url(https://picsum.photos/id/395/960/1080);
    background-size: 50vw 100vh;
    background-attachment: fixed;

    &:nth-child(2) {
      top: 35vh;
      left: 7vw;
      background-position: -4vw -35vh;
    }

    &:nth-child(3) {
      top: 28vh;
      left: 17vw;
      background-position: -14vw -28vh;

    }

    &:nth-child(4) {
      top: 41vh;
      left: 18vw;
      background-position: -15vw -41vh;

    }

    &:nth-child(5) {
      top: 55vh;
      left: 11vw;
      background-position: -8vw -55vh;
    }

    &:nth-child(6) {
      top: 48vh;
      left: 5vw;
      background-position: -2vw -48vh;
    }
  }

  h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 30%;

    >span {
      span {
        &:nth-child(2) {
          color: white;
        }

        display: inline-block;
        transition: all 0.4s;
        transform: translateY(60px);
        opacity: 0;
      }

      &:nth-child(1) {

        font-size: 3rem;
        color: $textClr2;

        @for $i from 1 through 12 {
          span:nth-child(#{$i}) {
            transition-delay: 1 + (0.1s * $i);
          }
        }
      }

      &:nth-child(3) {
        color: white;
        transition-delay: 2.6s;
        font-size: 32px;

        span:nth-child(1) {
          color: $textClr2;
        }
      }

      &:nth-child(3) {

        font-size: 3rem;
        color: $textClr1;

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

  &:after {
    content: '';
    width: 240vh;
    height: 1px;
    left: 0vh;
    top: 0vh;
    background: $textClr1;
    opacity: 0.3;
    z-index: 0;
    position: absolute;
    transform: rotate(60deg);
    transform-origin: top left;
  }

  &:before {
    content: '';
    width: 2000px;
    height: 1px;
    left: 0;
    top: 50vh;
    background: $textClr1;
    opacity: 0.3;
    z-index: 0;
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: top left;
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

    &:before {
      content: '';
      width: 1px;
      height: 200vh;
      right: 30vw;
      top: -40vh;
      background: $textClr1;
      opacity: 0.3;
      z-index: 0;
      position: absolute;
      transform: rotate(-10deg);
      transform-origin: top right;
    }
  }

  h1 {
    color: $textClr2;
    margin: 0;
    transform: translate(50%);
    text-align: center;
    font-size: $nmlTxtMed;

    &:before {
      content: '';
      width: 600vh;
      height: 1px;
      right: 0;
      top: 50vh;
      background: $textClr1;
      opacity: 0.3;
      z-index: 0;
      position: absolute;
      transform: rotate(50deg) translateX(50%);
      transform-origin: top right;
    }
  }
}

// PRESENTATION

.rk_sct2_accueil {
  display: flex;
  position: relative;
  z-index: 1;

  .rk_logo_zone {
    position: absolute;
    left: 25%;
    top: 40%;
    transform: translate(-50%);
    height: 50vh;
    width: 50%;

    >p {
      position: absolute;
      text-align: left;
      width: 25%;
      top: 0;
      margin: 0;
      color: $textClr2;
      right: -10px;
      padding: 20px;
      transform: translateX(100%);
      font-family: Avenir, Helvetica, Arial, sans-serif;
      font-weight: 700;
      background-color: $color2;
      transition: transform .4s;
    }

    img {
      width: 100%;
      height: 100%;
    }

    .rk_tree_h {
      position: absolute;
      width: 4px;
      height: 0px;
      border-radius: 0;
      z-index: 0;
      padding: 0;
      background-color: $textClr2;
      transition: height .4s;
    }

    .rk_tree_v {
      position: absolute;
      height: 4px;
      width: 0px;
      border-radius: 0;
      z-index: 0;
      padding: 0;
      background-color: $textClr2;
      transition: width .4s;
    }

    .rk_btt1 {
      left: $cursusCenter;
      top: 54px;
      transform: translateX(-50%);
    }

    .rk_btt20 {
      left: calc($cursusCenter - 50px);
      top: 54px;
      transform: translateX(-50%);
    }

    .rk_btt21 {
      left: calc($cursusCenter + 50px);
      top: 54px;
      transform: translateX(-50%);
    }

    .rk_btt22 {
      left: calc($cursusCenter - 50px);
      top: 79px;
      transform: translateX(-2px);

    }

    .rk_btt23 {
      left: calc($cursusCenter + 50px);
      top: 79px;
      transform: translateX(calc(-100% + 2px));

    }

    .rk_btt24 {
      left: $cursusCenter;
      top: 79px;
      transform: translateX(-50%);
    }

    .rk_btt25 {
      left: $cursusCenter;
      top: 150px;
      transform: translateX(-50%);
    }

    .rk_btt26 {
      left: $cursusCenter;
      top: 171px;
      transform: translateX(-50%);
    }

    .rk_btt27 {
      left: calc($cursusCenter - 50px);
      top: 175px;
      transform: translateX(0px);
    }

    .rk_btt28 {
      left: calc($cursusCenter + 50px);
      top: 175px;
      transform: translateX(-4px);
    }

    .rk_btt30 {
      left: $cursusCenter;
      top: 123px;
      transform: translateX(-100%);

    }

    .rk_btt31 {
      left: calc($cursusCenter - 150px);
      top: 123px;
    }

    div {
      z-index: 1;

      padding: 2px;
      width: 50px;
      height: 50px;
      position: absolute;
      transform: translatex(-50%);
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;


      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: $textClr2;
        width: 100%;
        height: 0%;
        z-index: -1;
        transition: height $tpsAnim;

      }




      &:nth-child(1) {
        top: $cursusTop;
        left: $cursusCenter;
      }

      &:nth-child(2) {
        top: $cursusMiddle;
        left: $cursusCenter;
      }

      &:nth-child(3) {
        top: $cursusTop;
        left: calc($cursusCenter - 50px);
      }

      &:nth-child(4) {
        top: $cursusTop ;
        left: calc($cursusCenter + 50px);
      }

      img {
        transform: translateY(50px);
        transition: all .4s;
        width: 38px;
        height: 38px;
      }


      &:nth-child(5) {
        top: $cursusMiddle ;
        left: $cursusCenter;
      }

      &:nth-child(6) {
        top: $cursusMiddle;
        left: $cursusCenter;
      }

      &:nth-child(8) {
        top: $cursusBottom ;
        left: calc($cursusCenter - 50px);
      }

      &:nth-child(7) {
        top: $cursusBottom ;
        left: calc($cursusCenter + 50px);
      }




    }


    //     $cursusTop: 0px;
    // $cursusMiddle : 100px;
    // $cursusBottom: 200px;
    // $cursusCenter: 50%;
    // $cursusLeft: 25%;
    // $cursusRight: 75%;
    &.wordpress {
      p.wordpress {
        transform: translatex(0);
      }

      .rk_btt1 {
        height: 50px;
        transition-delay: $tpsAnim * 2;

      }

      div:nth-child(1) {
        top: $cursusTop;
        left: $cursusCenter;

        &:before {
          transition-delay: $tpsAnim * 1.5;
          height: 100%;
        }

        img {
          transform: translateY(0);
          transition-delay: $tpsAnim / 2;

        }
      }

      div:nth-child(2) {
        top: $cursusMiddle;
        left: $cursusCenter;

        &:before {
          transition-delay: $tpsAnim * 2.5;
          height: 100%;
        }

        img {
          transition-delay: $tpsAnim * 2;
          transform: translateY(0);
        }
      }

    }

    &.back {
      p.backend {
        transform: translatex(0);
      }

      .rk_btt1 {
        height: 50px;
        transition-delay: $tpsAnim * 2;

      }

      div:nth-child(5) {
        top: $cursusTop;
        left: $cursusCenter;

        &:before {
          transition-delay: $tpsAnim * 1.5;
          height: 100%;
        }

        img {
          transform: translateY(0);
          transition-delay: $tpsAnim / 2;

        }
      }

      div:nth-child(6) {
        top: $cursusMiddle;
        left: $cursusCenter;

        &:before {
          transition-delay: $tpsAnim * 2.5;
          height: 100%;
        }

        img {
          transition-delay: $tpsAnim * 2;
          transform: translateY(0);
        }
      }

    }

    &.front {

      p.frontend {
        transform: translatex(0);
      }

      .rk_btt20,
      .rk_btt21 {
        height: 25px;
        transition-delay: $tpsAnim * 2;

      }

      .rk_btt22,
      .rk_btt23 {
        width: 55px;
        transition-delay: $tpsAnim * 3.5;

      }

      .rk_btt24 {
        height: 25px;
        transition-delay: $tpsAnim * 4;

      }

      .rk_btt25 {
        height: 25px;
        transition-delay: $tpsAnim * 5.5;

      }

      .rk_btt26 {
        width: 100px;
        transition-delay: $tpsAnim * 6.5;
      }

      .rk_btt27,
      .rk_btt28 {
        height: 25px;
        transition-delay: $tpsAnim * 8;
      }


      div:nth-child(3) {

        &:before {
          transition-delay: $tpsAnim * 1.5;
          height: 100%;
        }

        img {
          transform: translateY(0);
          transition-delay: $tpsAnim / 2;

        }
      }

      div:nth-child(4) {
        &:before {
          transition-delay: $tpsAnim * 1.5;
          height: 100%;
        }

        img {
          transition-delay: $tpsAnim / 2;
          transform: translateY(0);
        }
      }

      div:nth-child(5) {
        &:before {
          transition-delay: $tpsAnim * 6;
          height: 100%;
        }

        img {
          transition-delay: $tpsAnim * 5.5;
          transform: translateY(0);
        }
      }

      div:nth-child(8),
      div:nth-child(7) {
        &:before {
          transition-delay: $tpsAnim * 9;
          height: 100%;
        }

        img {
          transition-delay: $tpsAnim * 8.5;
          transform: translateY(0);
        }
      }
    }

    &.fullstack {

      p.fullstack {
        transform: translatex(0);
      }

      .rk_btt20,
      .rk_btt21 {
        height: 25px;
        transition-delay: $tpsAnim * 2;

      }

      .rk_btt22,
      .rk_btt23 {
        width: 55px;
        transition-delay: $tpsAnim * 3.5;

      }

      .rk_btt24 {
        height: 25px;
        transition-delay: $tpsAnim * 4;

      }

      .rk_btt25 {
        height: 25px;
        transition-delay: $tpsAnim * 5.5;

      }

      .rk_btt26 {
        width: 100px;
        transition-delay: $tpsAnim * 6.5;
      }

      .rk_btt27,
      .rk_btt28 {
        height: 25px;
        transition-delay: $tpsAnim * 8;
      }

      .rk_btt30 {
        width: 150px;
        transition-delay: $tpsAnim * 6.5;
      }

      .rk_btt31 {
        height: 79px;
        transition-delay: $tpsAnim * 8;
      }


      div:nth-child(3) {

        &:before {
          transition-delay: $tpsAnim * 1.5;
          height: 100%;
        }

        img {
          transform: translateY(0);
          transition-delay: $tpsAnim / 2;

        }
      }

      div:nth-child(4) {
        &:before {
          transition-delay: $tpsAnim * 1.5;
          height: 100%;
        }

        img {
          transition-delay: $tpsAnim / 2;
          transform: translateY(0);
        }
      }

      div:nth-child(5) {
        &:before {
          transition-delay: $tpsAnim * 6;
          height: 100%;
        }

        img {
          transition-delay: $tpsAnim * 5.5;
          transform: translateY(0);
        }
      }

      div:nth-child(6) {
        left: calc($cursusCenter - 150px);
        top: $cursusBottom;

        &:before {
          transition-delay: $tpsAnim * 9;
          height: 100%;
        }

        img {
          transition-delay: $tpsAnim * 8.5;
          transform: translateY(0);
        }
      }

      div:nth-child(8),
      div:nth-child(7) {
        &:before {
          transition-delay: $tpsAnim * 9;
          height: 100%;
        }

        img {
          transition-delay: $tpsAnim * 8.5;
          transform: translateY(0);
        }
      }
    }
  }

  &:after {
    content: '';
    width: 100px;
    height: 10px;
    background: $textClr2;
    position: absolute;
    left: 15vw;
    bottom: 10vh;
  }

  &:before {
    content: '';
    width: 200px;
    height: 10px;
    background: $textClr2;
    position: absolute;
    left: 46vw;
    top: 30vh;
  }

  h2 {
    min-width: 30vw;
    max-width: 30vw;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: $textClr2;
    font-size: $grdTxt;
    text-transform: uppercase;
    line-height: $grdTxt;
    word-spacing: 100vw;
    margin: 0;
    margin-left: 20vw;
    position: relative;

    &:after {
      content: '01';
      position: absolute;
      left: 0;
      opacity: 0.1;
      font-size: $cube;
      transform: translatex(-50%) translatey(-200%);
    }
  }

  .rk_text {
    position: relative;

    .rk_cursus {
      width: 50vw;


      h3 {
        color: white;
        width: 100%;
      }

      div {
        display: flex;
        justify-content: space-evenly;

        p {
          width: 200px;
          height: 80px;
          background-color: $color2;
          color: white;
          border: solid 2px $textClr2;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          font-size: $moyTxt;
        }
      }


    }

    &:after {
      background-color: $color1;
      content: '';
      z-index: 1;

      position: absolute;
      top: 0;
      left: 0;
      clip-path: polygon(0 0, 100% 0, 54% 100%, 0 100%);
      width: 25%;
      height: 45px;
    }

    .rk_shape_floating {
      background-color: $color2;
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      clip-path: polygon(0 0, 100% 0, 54% 100%, 0 100%);
      width: 25%;
      height: 45px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    background: $color2;
  }

}

// PICTOS

.rk_sct_pictos {
  background: rgb(13, 154, 127);
  background: linear-gradient(90deg,
      rgba(13, 154, 127, 1) 0%,
      rgba(25, 229, 144, 1) 100%);
  display: flex;
  justify-content: center;
  padding: 40px 0;
  z-index: 1;
  position: relative;

  .rk_picto {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    .rk_picto_txt {
      color: $textClr1;
      text-transform: uppercase;
      margin-top: 20px;
      font-weight: 700;
    }
  }

  .rk_picto_separator:after {
    content: '';
    width: 10vw;
    height: 1px;
    display: block;
    background: $textClr1;
    margin-top: 40px;
  }

  .rk_picto i {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: solid 4px white;
    display: flex;
    flex-direction: column;
  }
}

// COURS

.rk_sct3_cours {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    width: 1px;
    height: 200vh;
    right: 20vw;
    top: 0vh;
    background: $textClr1;
    opacity: 0.3;
    z-index: 0;
    position: absolute;
    transform: rotate(-25deg);
    transform-origin: top left;
  }

  &:before {
    content: '';
    width: 100vh;
    height: 1px;
    left: 0;
    top: 50vh;
    background: $textClr1;
    opacity: 0.3;
    z-index: 0;
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: top left;
  }

  h2 {
    height: 30%;
    width: 100%;
    text-align: center;
    font-size: $grdTxt;
    color: $textClr2;
    text-transform: uppercase;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:after {
      content: '02';
      font-size: $cube;
      position: absolute;
      left: 50%;
      opacity: 0.1;
      transform: translatex(-50%) translatey(-10%);
    }
  }

  .rk_cours_link {
    text-decoration: none;
    width: 25%;
    max-height: 300px;
    max-width: 300px;
    background: $color2;
    border-bottom: solid 4px $textClr2;
    padding-top: 40px;
    padding-left: 40px;
    padding: 40px 0 40px 40px;
    margin: 10px;
    position: relative;

    .rk_nb {
      color: $textClr2;
      font-size: $nmlTxt;
      font-weight: 700;
    }

    .rk_subtitle {
      color: $textClr1;
      text-transform: uppercase;
      font-weight: 700;
    }

    .rk_intro {
      color: $textClr1;
      opacity: 0.8;
      margin-top: 10px;
    }

    .rk_click {
      color: $textClr1;
      opacity: 0.8;
      text-transform: uppercase;
      font-weight: 700;
      margin-top: 10px;
    }
  }
}


.rk_cours_link:hover {
  &:before {
    content: '';
    width: 4px;
    height: 0%;
    background: $textClr2;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    animation: coursHoverLeftRight 0.2s linear;
    animation-fill-mode: forwards;
  }

  .rk_subtitle:before {
    content: '';
    width: 0%;
    height: 4px;
    background: $textClr2;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    animation: coursHoverTop 0.2s linear 0.2s;
    animation-fill-mode: forwards;
  }

  .rk_nb:before {
    content: '';
    width: 4px;
    height: 0%;
    background: $textClr2;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    animation: coursHoverLeftRight 0.2s linear 0.4s;
    animation-fill-mode: forwards;
  }
}

@keyframes coursHoverLeftRight {
  from {
    height: 0%;
  }

  to {
    height: 100%;
  }
}

@keyframes coursHoverTop {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}

// CONTACT

.rk_sct3_accueil {
  position: relative;

  &:after {
    content: '';
    width: 10vw;
    height: 10px;
    background: $textClr2;
    position: absolute;
    top: 0;
    left: 0;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vh 0 10vh;

  .rk_container {
    -webkit-filter: grayscale(0) drop-shadow(0 10px 3px #000);
    filter: grayscale(0) drop-shadow(0 8px 3px black);
    width: 80vw;
    background-color: $color2;
    display: flex;

    .rk_title {
      width: 50%;
      display: flex;

      h2 {
        width: 100%;
        padding-right: 10%;
        font-size: $grdTxt;
        color: $textClr2;
        text-transform: uppercase;
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        &:after {
          content: '03';
          font-size: $cube;
          position: absolute;
          right: 10%;
          opacity: 0.1;
          transform: translatex(-50%) translatey(-10%);
        }
      }
    }

    .rk_contact {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      .rk_input_groupe {
        text-align: center;
        display: flex;
        position: relative;

        input {
          width: 100%;

          &:-webkit-input-placeholder &:focus:after {
            width: 100%;
            transition: 0.4s;
            left: 0;
          }
        }

        &:nth-child(1) input {
          max-width: 50%;
        }

        input,
        button {
          background-color: transparent;
          border-top: none;
          border-left: none;
          border-right: none;
          border-radius: 0;
          margin-bottom: 15px;
          transition: all 0.2s;
          border-bottom-color: rgb(60, 60, 60);
          color: $textClr2;

          &:focus {
            outline: none !important;
            border-color: $textClr2;
          }
        }

        input::placeholder {
          color: white;
          transition: all 0.8s;
        }

        input:focus::placeholder {
          color: $textClr2;
          transform: translatey(-1200%);
        }

        input::placeholder:after {
          position: absolute;
          bottom: 10px;
          left: 50%;
          width: 50px;
          content: '';
          height: 2px;
          background-color: #3399ff;
          transition: 0.4s;
        }
      }

      form {
        max-width: 100%;
        padding: 10%;
      }
    }
  }
}

.rk_pleine_hauteur {
  min-height: 100vh;
}

@media screen and (max-width: 1250px) {
  section {
    max-width: 100vw;
    width: 100vw;
    overflow: hidden;
  }

  .rk_sct_pictos {
    flex-direction: column;

    .rk_picto_separator:after {
      width: 1px;
      height: 10vh;
      margin: 20px auto;
    }
  }

  .rk_sct3_cours {
    flex-wrap: wrap;
    flex-direction: row;
    height: auto;

    h2 {
      max-width: 80vw;
      height: 30vh;
    }

    .rk_cours_link {
      max-width: 40vw;
      flex: 50%;
      flex-basis: 50%;
      flex: 0 50%;
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 980px) {
  section {
    max-width: 100vw;
    width: 100vw;
    overflow: hidden;
  }

  .rk_sct1_accueil {
    position: relative;

    &:after {
      transform: rotate(51deg);
    }

    h1 {
      font-size: $moyTxtSml;

      &:before {
        right: 0;
        top: 80vh;
        transform: rotate(-5deg);
      }
    }

    h2 {
      line-height: $TgrdTxtSml;
      font-size: $TgrdTxtSml;

      &:after {
        width: $cubeSml;
        height: $cubeSml;
      }

      &:before {
        left: 0;
        top: 4vh;
        transform: rotate(-57deg);
      }
    }
  }

  .rk_sct2_accueil {
    flex-direction: column;

    h2 {
      min-width: 100%;
      height: 30vh;
      font-size: $grdTxtSml;
      line-height: $grdTxtSml;

      &:after {
        transform: translatex(-25%) translatey(-100%) !important;
      }
    }

    &:after {
      bottom: 5vh;
    }
  }

  .rk_sct_pictos {
    flex-direction: column;

    .rk_picto_separator:after {
      width: 1px;
      height: 10vh;
      margin: 20px auto;
    }
  }

  .rk_sct3_cours {
    flex-wrap: wrap;
    flex-direction: row;
    height: auto;

    h2 {
      max-width: 80vw;
      line-height: $grdTxtSml;
      font-size: $grdTxtSml;
      height: 30vh;
    }

    .rk_cours_link {
      width: 80vw;
      margin-bottom: 20px;
    }
  }

  .rk_sct3_accueil {
    .rk_container {
      flex-direction: column;

      .rk_title {
        width: 100%;

        h2 {
          line-height: $grdTxtSml;
          font-size: $grdTxtSml;
          justify-content: center;
          padding: 0;
          height: 30vh;

          &:after {
            transform: translatex(0%) translatey(-10%);
          }
        }
      }

      .rk_contact {
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 769px) {}

@media screen and (min-width: 1024px) {}
</style>
