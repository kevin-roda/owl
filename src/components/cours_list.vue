<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="rk_cour">

            </div>

            <button class="modal-default-button" @click="$emit('close')">
                OK
            </button>
        </div>
    </transition>
</template>

<script>

const { Client } = require('@notionhq/client');
import axios from 'axios';

export default {
    name: 'souris',
    props: {
        msg: String,
    },
    data() {
        return {
            cursorWidth: 500,
        };
    },
    methods: {
        morphToBall() {

        },
    },

    beforeMount() {
        // const secretKey = 'secret_IlF1kMwlAquRlOAfOll4l5Z4zXe0zJcdC8QJSlfAckA'
        // const headers = {
        //     Authorization: 'Bearer secret_IlF1kMwlAquRlOAfOll4l5Z4zXe0zJcdC8QJSlfAckA',
        //     'Notion-Version': '2022-02-22',
        //     'Access-Control-Allow-Origin': '*',
        // }
        // const options = {
        //     method: 'GET',
        //     url: '/notion/945c89ee12804ac4bfa7c60649e14208',
        //     headers

        // };
        // axios
        //     .request(options)
        //     .then(function (response) {
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         console.error(error);
        //     });
        var url = "https://api.notion.com/v1/pages/945c89ee12804ac4bfa7c60649e14208";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.setRequestHeader("Notion-Version", "2022-02-22");
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

        xhr.setRequestHeader("Authorization", "Bearer secret_IlF1kMwlAquRlOAfOll4l5Z4zXe0zJcdC8QJSlfAckA");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        };

        xhr.send();
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
