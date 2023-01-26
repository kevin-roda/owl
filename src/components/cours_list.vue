<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="rk_cours">
                <cours :coursName="course.pageName" :coursId="course.pageId" v-for="(course, index) in courses"
                    :key="index"></cours>
            </div>

            <button class="modal-default-button" @click="$emit('close')">
                OK
            </button>
        </div>
    </transition>
</template>

<script>
import axios from 'axios';
import cours from '../components/single_cours.vue';

export default {
    name: 'souris',

    props: ['coursName', 'coursId'],
    components: {
        cours: cours,
    },
    data() {
        return {
            cursorWidth: 500,
            courses: []
        };
    },
    methods: {
        morphToBall() {

        },
    },

    beforeMount() {
        let currentVue = this;
        axios.get('https://www.fly.owlf.school/listcours/' + this.$store.getters.getCurrentCoursePage)
            .then(function (response) {
                // handle success
                currentVue.courses = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },

};
</script>

<style scoped lang="scss">
.modal-mask {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;

    .rk_cours {
        position: absolute;
        display: flex;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        justify-content: space-evenly;
        padding: 20px;

    }
}

.modal-mask:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    z-index: -1;

    backdrop-filter: blur(4px);

    transition: all 2s linear;
    -moz-transition: all 2s linear;
    -webkit-transition: all 2s linear;
    -o-transition: all 2s linear;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
