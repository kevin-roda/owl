<template>
    <transition name="modal">
        <div class="modal-mask">
            <div :class="'rk_cours ' + modalState + ' ' + courseSelected">

                <cours :coursName="course.pageName" :crs_index="index + 1" :currentPage="course.isCurrentPage"
                    :coursId="course.pageId" v-for="(course, index) in courses" :key="index"></cours>
            </div>

            <div :class="'rk_close_menu ' + modalState" @click="closeModal">
                <div class="rk_trait"></div>
                <div class="rk_trait"></div>
            </div>
        </div>
    </transition>
</template>

<script>
import axios from 'axios';
import cours from '../components/single_cours.vue';

export default {
    name: 'souris',

    props: ['coursName', 'coursId', 'crs_index', 'currentPage'],
    components: {
        cours: cours,
    },
    data() {
        return {
            courseSelected: '',
            modalState: '',
            courses: [],
        };
    },

    computed: {
        pageChanged() {
            return this.$store.getters.getcurrentCourseSelectedPage;
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
            this.modalState = '';
            this.$store.commit('currentCourseSelectedPage', '');
        }
    },
    watch: {
        pageChanged(to, from) {
            this.courses.map(function (x) {
                x.isCurrentPage = '';
                return x
            });
            if (to < 1) {

            } else {

                this.courseSelected = 'selected'
                this.courses[to - 1].isCurrentPage = "currentPage";
                document.documentElement.style.setProperty("--nbChild", this.courses.length);

            }

        },
    },
    beforeMount() {
        let currentVue = this;
        this.modalState = 'loading';
        axios.get('https://www.fly.owlf.school/listcours/' + this.$store.getters.getCurrentCoursePage)
            .then(function (response) {
                currentVue.modalState = 'ready';
                // handle success
                response.data.map(function (x) {
                    x.isCurrentPage = '';
                    return x
                });
                currentVue.courses = response.data;
                console.log(currentVue.courses);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },

};
</script>

<style scoped lang="scss">
$wideScreen: 1280px;
$dekstop: 720px;
$tablet: 450px;
$phone: 200px;

$angle : calc(90deg / var(--nbChild));

.rk_close_menu {
    position: absolute;
    top: 50px;
    left: 50px;
    display: block;
    height: 50px;
    width: 50px;
    cursor: pointer;
    z-index: 11;
    overflow: hidden;

    .rk_trait {
        width: 50px;
        height: 6px;
        position: absolute;
        background: #19e590;
        transform-origin: center;
        transition: all 0.4s ease;
    }
}

.rk_cours.loading+.rk_close_menu {
    .rk_trait {
        &:nth-child(1) {
            transform: rotate(45deg) translate(200px, 0);
        }

        &:nth-child(2) {
            transform: rotate(-45deg) translate(200px, 0);
        }
    }
}

.rk_cours.ready+.rk_close_menu {
    .rk_trait {
        &:nth-child(1) {
            transition-delay: 0.6s;
            transform: rotate(45deg) translate(16px, 16px);
        }

        &:nth-child(2) {
            transition-delay: 0.8s;
            transform: rotate(-45deg) translate(-16px, 16px);
        }
    }
}

@mixin respond($breakpoint) {

    @if($breakpoint ==wideScreen) {
        @media (min-width: 1280px) {
            @content
        }
    }

    @if($breakpoint ==desktop) {
        @media (max-width: 1280px) {
            @content
        }
    }

    @if($breakpoint ==tablet) {
        @media (max-width: 720px) {
            @content
        }
    }

    @if($breakpoint ==phone) {
        @media (max-width: 450px) {
            @content
        }
    }

}

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
        justify-content: start;
        flex-wrap: wrap;
        padding: 20px;

        &.selected {

            .rk_course_page:not(.currentPage) {


                h2 {
                    bottom: 100%;
                }

                @for $i from 1 through 8 {


                    &:nth-child(#{$i}) {
                        transform-origin: bottom center;

                        &:hover {
                            transform: translateY(0) translatex(-50%) scale(1) rotate(calc(-55deg + calc($angle * $i))) !important;
                            padding-bottom: 100px !important;
                        }

                        @include respond(wideScreen) {

                            transform: translateY(0) translatex(-50%) scale(1) rotate(calc(-55deg + calc($angle * $i)));
                            left: 50%;
                            bottom: -120px;
                        }

                        @include respond(desktop) {
                            left: calc(calc(calc(100vw - $dekstop) / 2) + calc(calc($dekstop / 8) * calc($i - 1)));
                        }

                        @include respond(tablet) {
                            left: calc(calc(calc(100vw - $tablet) / 2) + calc(calc($tablet / 8) * calc($i - 1)));
                        }

                        @include respond(phone) {
                            left: calc(calc(calc(100vw - $phone) / 2) + calc(calc($phone / 8) * calc($i - 1)));

                        }
                    }
                }
            }
        }

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
