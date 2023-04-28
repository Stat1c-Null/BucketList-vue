<template>
    <h2>Bucket List</h2>
    <h4 id="desc">Welcome to the app where you can keep track of your long term dreams and goals that you plan to accomplish in the future.</h4>
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
    #info {
        margin-left: 40%;
    }

    #desc {
        margin: 5% 0;
        color: #f72585;
    }

</style>
