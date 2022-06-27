<template lang="fr">
  <main :class="this.$store.getters.getState">
    <!-- <section class="rk_pleine_hauteur rk_sct1_accueil" :class="isReady">
      <h1><span>Formations web en savoie</span><span> / </span><span>haute savoie</span></h1>
      <div class="rk_content">
        <h2>DIGITAL</h2>
        <cube @page-ready="pageReady"></cube>
      </div>
    </section> -->
    <section class="rk_sct1 rk_pleine_hauteur rk_sct1_accueil" :class="isReady">
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
      <span> <span>et</span> </span>
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
        
        <!-- <span>w</span>
        <span>e</span>
        <span>b</span> -->

      </span>
    </h1>
    </section>
    
    <section class="rk_pleine_hauteur rk_sct2_accueil">
      
      <h2>Une formation unique</h2>
      
      <div class="rk_text">
        <div class="rk_shape_floating"  :style="'transform:translate(' +(-position + 4)+'px, ' +(-position + 4)+'px);'"></div>
        <p>        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proi
          dent, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

      </section>
      <section class="rk_sct_pictos">
        <div class="rk_picto">
          <i></i>
          <div class="rk_picto_txt">
            Permier picto
          </div>
        </div>
        <div class="rk_picto_separator">

        </div>
        <div class="rk_picto">
          <i></i>
          <div class="rk_picto_txt">
            Deuxieme picto
          </div>
        </div>
        <div class="rk_picto_separator">

        </div>
        <div class="rk_picto">
          <i></i>
          <div class="rk_picto_txt">
            Troisieme picto
          </div>
        </div>
      </section>
      <section class="rk_pleine_hauteur rk_sct3_cours">

        <h2>Les cours proposés</h2>

        <a href="#" class="rk_cours_link">
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
        </a>
        <a href="#" class="rk_cours_link">
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
        </a>
        <a href="#" class="rk_cours_link">
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
        </a>
        <a href="#" class="rk_cours_link">
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
        </a>

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
import Cube from '../components/rubik.vue'

export default {
  name: "accueil",
  components: {
    'cube': Cube,
  },
  data() {
    return {
      isReady: "",
      position: '',
    }
  },
  mounted() {
    let vueElem = this;
    document.onscroll = function () {
      vueElem.position = vueElem.getVerticalScrollPercentage()
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
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
        form.style.transform = 'scale(' + (Math.round(((currentScroll - hdebutScale) * 100) / windowH)) / 100 + ')';
      }


    },
    getVerticalScrollPercentage() {
      var p = document.body.parentNode
      return (document.body.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight) * 100
    },
    pageReady() {
      console.log('ready');
      this.isReady = "page_ready";
    },
  }
}
</script>

  <style lang="scss">
  $color1: #15161a;
  $color2: #1f2026;
  $textClr1 : white;
  $textClr2 : #19e590;
  
  /* normal sizes */
  $TgrdTxt : 20rem;
  $grdTxt : 5rem;
  $moyTxt : 2rem;
  $nmlTxt : 3rem;
  $cube : 15rem;
  
  /* medium sizes */
  $TgrdTxtMed : 20rem;
  $grdTxtMed : 5rem;
  $moyTxtMed : 2rem;
  $nmlTxtMed : 3rem;
  $cubeMed : 15rem;
  
  /* small sizes */
  $TgrdTxtSml : 5rem;
  $grdTxtSml : 2rem;
  $moyTxtSml : 1rem;
  $nmlTxtSml : 3rem;
  $cubeSml : 4rem;
  
  

  
  main {
    background: $color1;
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
  
  // Titre

   
  .rk_sct1_accueil {
    position: relative;
   display: flex;
    justify-content: center;
        transform: translateY(40vh);
    align-items: center;
    transition: all .8s ease;
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
        color:$textClr2;
        @for $i from 1 through 12 {
        span:nth-child(#{$i}) {
            transition-delay:1 + (.1s * $i);
        }
      }
      }

       &:nth-child(2) span{
        color:white;
        transition-delay:2.6s;
        font-size:32px;
       }
       &:nth-child(3){
        color:$textClr2;
        @for $i from 1 through 15 {
        span:nth-child(#{15 - $i}) {
            transition-delay:1 + (.1s * $i);
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
      color: $textClr1;
      margin: 0;
      text-transform: uppercase;
      text-align: center;
      font-size: $moyTxt;
  
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
        transform: rotate(50deg);
        transform-origin: top right;
      }
    }
  }
  
  
  // PRESENTATION
  
  .rk_sct2_accueil {
    display: flex;
    position: relative;
    z-index: 1;
  
    &:after {
      content: "";
      width: 100px;
      height: 10px;
      background: $textClr2;
      position: absolute;
      left: 15vw;
      bottom: 10vh;
    }
  
    &:before {
      content: "";
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
      font-size: $grdTxt ;
      text-transform: uppercase;
      line-height: $grdTxt ;
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
      &:after {
        background-color: $color1;
        content:'';
        z-index: 1;

        position: absolute;
        top: 0;
        left: 0;
        clip-path: polygon(0 0, 100% 0, 54% 100%, 0 100%);
        width:25%;
        height:45px;
      }
      .rk_shape_floating {
        background-color: $color2;
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        clip-path: polygon(0 0, 100% 0, 54% 100%, 0 100%);
        width:25%;
        height:45px;
      }
  
      display: flex;
      justify-content: center;
      align-items:center;
      background: $color2;
  
    }
  
    .rk_text p {
      color: $textClr1;
      padding: 15%;
      letter-spacing: 1px;
    }
  
  }
  
  // PICTOS
  
  .rk_sct_pictos {
    background: rgb(13, 154, 127);
    background: linear-gradient(90deg, rgba(13, 154, 127, 1) 0%, rgba(25, 229, 144, 1) 100%);
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
      background: $textClr1 ;
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
      font-size: $grdTxt ;
      color: $textClr2 ;
      text-transform: uppercase;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
  
      &:after {
        content: "02";
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
      background: $textClr2 ;
      position: absolute;
      top: 0;
      left: 0;
    }
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:5vh 0 10vh;
  
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
          font-size: $grdTxt ;
          color: $textClr2 ;
          text-transform: uppercase;
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: center;
  
          &:after {
            content: "03";
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
              border-color: $textClr2 ;
            }
          }
  
          input::placeholder {
            color: white;
            transition: all 0.8s;
          }
  
          input:focus::placeholder {
            color: $textClr2 ;
            transform: translatey(-1200%);
          }
  
          input::placeholder:after {
            position: absolute;
            bottom: 10px;
            left: 50%;
            width: 50px;
            content: '';
            height: 2px;
            background-color: #3399FF;
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
  
  
  
  
  @media screen and (max-width:1250px) {
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
  
  @media screen and (max-width:980px) {
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
        line-height: $TgrdTxtSml ;
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
        line-height: $grdTxtSml ;
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
  
            line-height: $grdTxtSml ;
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
  
  @media screen and (min-width:769px) {}
  
  @media screen and (min-width:1024px) {}
  </style>
 