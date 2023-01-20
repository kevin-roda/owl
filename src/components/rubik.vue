<template lang="fr">
  <div class='cube_ctt' :class="angle">

    <div  v-for="(parts,inc) in faces" :class="rotationCls[inc]" id="stage">
      <div class="spinner one">
        <div v-for="(face,i) in faces[inc][0]" :class="'face'+(i + 1)+' col'+face"></div>
      </div>
      <div class="spinner two">
        <div v-for="(face,i) in faces[inc][1]" :class="'face'+(i + 1)+' col'+face"></div>
      </div>
      <div class="spinner three">
        <div v-for="(face,i) in faces[inc][2]" :class="'face'+(i + 1)+' col'+face"></div>
      </div>
      <div class="spinner four">
        <div v-for="(face,i) in faces[inc][3]" :class="'face'+(i + 1)+' col'+face"></div>
      </div>
      <div class="spinner five">
        <div v-for="(face,i) in faces[inc][4]" :class="'face'+(i + 1)+' col'+face"></div>
      </div>
      <div class="spinner six">
        <div v-for="(face,i) in faces[inc][5]" :class="'face'+(i + 1)+' col'+face"></div>
      </div>
      <div class="spinner seven">
        <div v-for="(face,i) in faces[inc][6]" :class="'face'+(i + 1)+' col'+face"></div>
      </div>
      <div class="spinner eight">
        <div v-for="(face,i) in faces[inc][7]" :class="'face'+(i + 1)+' col'+face"></div>
      </div>
      <div class="spinner nine">
        <div v-for="(face,i) in faces[inc][8]" :class="'face'+(i + 1)+' col'+face"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "cube",
  components: {

  },
  data() {
    return {
      rotationCls: ["", "", ""],
      angle: "horizontal",
      faces: [
        [
          [6, 2, 3, 4, 3, 6],
          [2, 2, 3, 4, 5, 6],
          [2, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [2, 2, 3, 4, 5, 6],
          [2, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 4],
          [3, 2, 3, 4, 5, 1],
          [3, 6, 3, 4, 5, 1],
        ],
        [
          [1, 2, 3, 4, 6, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 5],
          [1, 2, 3, 4, 5, 1],
          [1, 2, 3, 4, 5, 1],
        ],
        [
          [6, 2, 3, 4, 5, 6],
          [2, 2, 3, 4, 5, 6],
          [2, 1, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 6],
          [2, 2, 3, 4, 5, 6],
          [2, 1, 3, 4, 5, 6],
          [1, 2, 3, 4, 2, 6],
          [3, 2, 3, 4, 5, 6],
          [3, 5, 3, 4, 5, 6],
        ]
      ],
      faces2: [
        [
          [6, 2, 6, 4, 3, 6],
          [2, 2, 2, 4, 5, 6],
          [2, 1, 2, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [2, 2, 3, 4, 5, 6],
          [2, 1, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 4],
          [3, 2, 3, 4, 5, 1],
          [3, 1, 3, 4, 5, 1],
        ],
        [
          [1, 2, 1, 4, 6, 6],
          [1, 2, 2, 4, 5, 6],
          [1, 1, 2, 4, 5, 6],
          [1, 2, 3, 4, 6, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 1, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 5],
          [1, 2, 3, 4, 5, 1],
          [1, 1, 3, 4, 5, 1],
        ],
        [
          [6, 2, 1, 4, 2, 6],
          [6, 2, 3, 4, 5, 6],
          [6, 5, 3, 4, 5, 6],
          [6, 2, 3, 4, 2, 6],
          [6, 2, 3, 4, 5, 6],
          [6, 5, 3, 4, 5, 6],
          [3, 2, 3, 4, 1, 6],
          [5, 2, 3, 4, 5, 6],
          [5, 4, 3, 4, 5, 6],
        ]
      ],
      faces3: [
        [
          [6, 2, 3, 4, 5, 6],
          [2, 2, 3, 4, 5, 6],
          [2, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 6],
          [2, 2, 3, 4, 5, 6],
          [2, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 3],
          [3, 2, 3, 4, 5, 1],
          [3, 6, 3, 4, 5, 1],
        ],
        [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 3],
          [1, 2, 3, 4, 5, 1],
          [1, 2, 3, 4, 5, 1],
        ],
        [
          [1, 2, 6, 4, 3, 1],
          [1, 2, 6, 4, 5, 1],
          [6, 1, 5, 4, 5, 1],
          [2, 2, 3, 4, 6, 1],
          [2, 2, 3, 4, 5, 1],
          [2, 1, 3, 4, 5, 1],
          [2, 2, 3, 4, 6, 1],
          [2, 2, 3, 4, 5, 1],
          [2, 5, 3, 4, 5, 1],
        ]
      ],
      faces4: [
        [
          [6, 2, 2, 4, 3, 6],
          [2, 2, 2, 4, 5, 6],
          [2, 6, 2, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [2, 2, 3, 4, 5, 6],
          [2, 1, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 4],
          [3, 2, 3, 4, 5, 1],
          [3, 1, 3, 4, 5, 1],
        ],
        [
          [1, 2, 2, 4, 6, 6],
          [1, 2, 2, 4, 5, 6],
          [1, 6, 2, 4, 5, 6],
          [1, 2, 3, 4, 6, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 1, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 5],
          [1, 2, 3, 4, 5, 1],
          [1, 1, 3, 4, 5, 1],
        ],
        [
          [5, 2, 6, 4, 2, 6],
          [6, 2, 1, 4, 5, 6],
          [6, 3, 1, 4, 5, 6],
          [5, 2, 3, 4, 2, 6],
          [6, 2, 3, 4, 5, 6],
          [6, 3, 3, 4, 5, 6],
          [5, 2, 3, 4, 2, 6],
          [6, 2, 3, 4, 5, 6],
          [6, 3, 3, 4, 5, 6],
        ]
      ],
      faces5: [
        [
          [6, 2, 3, 4, 6, 6],
          [2, 2, 3, 4, 5, 6],
          [2, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 6],
          [2, 2, 3, 4, 5, 6],
          [2, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 1],
          [3, 2, 3, 4, 5, 1],
          [3, 6, 3, 4, 5, 1],
        ],
        [
          [1, 2, 3, 4, 6, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 6, 1],
          [1, 2, 3, 4, 5, 1],
          [1, 2, 3, 4, 5, 1],
        ],
        [
          [2, 2, 6, 4, 5, 1],
          [2, 2, 6, 4, 5, 1],
          [2, 1, 5, 4, 5, 1],
          [2, 2, 3, 4, 5, 1],
          [2, 2, 3, 4, 5, 1],
          [2, 1, 3, 4, 5, 1],
          [2, 2, 3, 4, 5, 6],
          [2, 2, 3, 4, 5, 6],
          [2, 1, 3, 4, 5, 6],
        ]
      ],
    }
  },
  created: function () {
    var i = 0;
    var currentApp = this;
    var moveCube = setInterval(function () {

      i++;

      switch (i) {
        case 1:
          currentApp.faces = currentApp.faces2;
          currentApp.rotationCls = ["", "", "rotateX"];
          break;

        case 2:
          currentApp.faces = currentApp.faces2;
          currentApp.rotationCls = ["", "", "rotateLY"];
          currentApp.angle = "vertical";
          break;

        case 3:
          currentApp.faces = currentApp.faces3;
          currentApp.rotationCls = ["", "", "rotateLX"];
          currentApp.angle = "horizontal";
          break;

        case 4:
          currentApp.faces = currentApp.faces4;
          currentApp.rotationCls = ["", "", "rotateLY"];
          currentApp.angle = "vertical";
          break;

        case 5:
          currentApp.faces = currentApp.faces5;
          currentApp.rotationCls = ["", "", "rotateX"];
          currentApp.angle = "horizontal";
          break;

        case 6:
          clearInterval(moveCube);
          break;

      }

    }, 400);

  }
}
</script>

<style lang="scss" scoped>
.cube_ctt {
  height: 200px;
  width: 200px;
  position: absolute;
  left: 80%;
  bottom: 0;
  transform: translate(-156%, -50%);
  z-index: 10;
  -webkit-filter: grayscale(0) drop-shadow(0 10px 3px #000);
  filter: grayscale(0) drop-shadow(0 20px 30px black);
}

.spinner div {
  position: absolute;
  width: 42px;
  height: 42px;
  border: 2px solid black;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 120px;
}

.col1 {
  background: #3DF8AA;
}

.col2 {
  background: #19E590;
}

.col3 {
  background: green;
}

.col4 {
  background: white;
}

.col5 {
  background: orange;
}

.col6 {
  background: #00A05D;
}




.spinner {
  transform-style: preserve-3d;

  &.one {
    position: absolute;
    left: 0;
  }

  &.two {
    position: absolute;
    left: 46px;
  }

  &.three {
    position: absolute;
    left: 92px;
  }

  &.four {
    position: absolute;
    top: 46px;
  }

  &.five {
    position: absolute;
    left: 46px;
    top: 46px;
  }

  &.six {
    position: absolute;
    left: 92px;
    top: 46px;
  }

  &.seven {
    position: absolute;
    top: 92px;

  }

  &.eight {
    position: absolute;
    left: 46px;
    top: 92px;

  }

  &.nine {
    position: absolute;
    left: 92px;
    top: 92px;

  }

  .face1 {
    -webkit-transform: translateZ(23px);
    -ms-transform: translateZ(23px);
    transform: translateZ(23px);
  }

  .face2 {
    -webkit-transform: rotateY(90deg) translateZ(23px);
    -ms-transform: rotateY(90deg) translateZ(23px);
    transform: rotateY(90deg) translateZ(23px);
  }

  .face3 {
    -webkit-transform: rotateY(90deg) rotateX(90deg) translateZ(23px);
    -ms-transform: rotateY(90deg) rotateX(90deg) translateZ(23px);
    transform: rotateY(90deg) rotateX(90deg) translateZ(23px);
  }

  .face4 {
    -webkit-transform: rotateY(180deg) rotateZ(90deg) translateZ(23px);
    -ms-transform: rotateY(180deg) rotateZ(90deg) translateZ(23px);
    transform: rotateY(180deg) rotateZ(90deg) translateZ(23px);
  }

  .face5 {
    -webkit-transform: rotateY(-90deg) rotateZ(90deg) translateZ(23px);
    -ms-transform: rotateY(-90deg) rotateZ(90deg) translateZ(23px);
    transform: rotateY(-90deg) rotateZ(90deg) translateZ(23px);
  }

  .face6 {
    -webkit-transform: rotateX(-90deg) translateZ(23px);
  }
}

#spinner {
  -webkit-animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: 12s;
  -webkit-transform-style: preserve-3d;
  -webkit-transform-origin: 60px 60px 0;
  -webkit-transform: rotateY(-95deg);
}

.horizontal {
  #stage {

    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteraticon-count: infinite;
    -webkit-animation-duration: 0.4s;
    -webkit-animation-fill-mode: forwards;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: rotateX(53deg) rotateY(13deg) rotateZ(-27deg);

    &:nth-child(3) {
      -webkit-transform-origin: 69px 69px;
      width: 138px;
      height: 138px;
      top: -1px;
      left: 133px;
      position: absolute;

    }

    &:nth-child(2) {
      -webkit-transform-origin: 69px 69px;
      width: 138px;
      height: 138px;
      top: 35px;
      left: 122px;
      position: absolute;

    }

    &:nth-child(1) {
      -webkit-transform-origin: 69px 69px;
      width: 138px;
      height: 138px;
      top: 71px;
      left: 112px;
      position: absolute;

    }
  }


}

.vertical {
  #stage {
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteraticon-count: infinite;
    -webkit-animation-duration: 0.4s;
    -webkit-animation-fill-mode: forwards;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: rotateX(-13deg) rotateY(-60deg) rotate(27deg);

    &:nth-child(3) {
      -webkit-transform-origin: 69px 69px;
      width: 138px;
      height: 138px;
      top: 40px;
      left: 82px;
      position: absolute;
    }

    &:nth-child(2) {
      -webkit-transform-origin: 69px 69px;
      width: 138px;
      height: 138px;
      left: 122px;
      top: 34px;
      position: absolute;

    }

    &:nth-child(1) {
      -webkit-transform-origin: 69px 69px;
      width: 138px;
      height: 138px;
      left: 162px;
      top: 29px;
      position: absolute;
    }
  }

}


.rotateLY {
  -webkit-animation-name: rotationLY;
}

.rotateY {
  -webkit-animation-name: rotationY;

}

.rotateLX {
  -webkit-animation-name: rotationLX;
}

.rotateX {
  -webkit-animation-name: rotationX;

}


@-webkit-keyframes rotationLX {
  0% {
    -webkit-transform: rotateX(53deg) rotateY(13deg) rotateZ(-27deg);
  }

  100% {
    -webkit-transform: rotateX(53deg) rotateY(13deg) rotateZ(-117deg);
  }
}

@-webkit-keyframes rotationX {
  0% {
    -webkit-transform: rotateX(53deg) rotateY(13deg) rotateZ(-27deg);
  }

  100% {
    -webkit-transform: rotateX(53deg) rotateY(13deg) rotateZ(63deg);
  }
}

@-webkit-keyframes rotationLY {
  0% {
    -webkit-transform: rotateX(-13deg) rotateY(-60deg) rotate(27deg);
  }

  100% {
    -webkit-transform: rotateX(-13deg) rotateY(-60deg) rotate(117deg);
  }
}

@-webkit-keyframes rotationY {
  0% {
    -webkit-transform: rotateX(-13deg) rotateY(-60deg) rotate(27deg);
  }

  100% {
    -webkit-transform: rotateX(-13deg) rotateY(-60deg) rotate(-63deg);
  }
}
</style>
