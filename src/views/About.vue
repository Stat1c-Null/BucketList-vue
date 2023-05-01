<template>
    <h2 id="title">Bucket List</h2>
    <h4 id="desc">Welcome to the app where you can keep track of your long term dreams and goals that you plan to accomplish in the future.</h4>
    <h4 id="goals">Total Bucket List Goals Completed: <span id="num">0</span></h4>
    <div id="info">
        <h3>Version 1.0.9</h3>
        <router-link @click="turnAddButtonOn" to="/">Go Back</router-link>
    </div>
</template>

<script>
    import App from '../App.vue';

    export default {
        name: 'About-main',
        methods: {
            turnAddButtonOn() {
                App.methods.toggleAddButtonOn();
            }
        }
    }
</script>

<style>
    #num {
        color: #7209b7;
    }

    #goals {
        margin-bottom: 5%;
        margin-left: 25%;
        color: #4cc9f0;
    }

    #info {
        margin-left: 40%;
    }

    #desc {
        margin: 5% 0;
        margin-left: 5%;
        color: #f72585;
    }

    #title {
        margin-left: 5%;
    }

</style>
