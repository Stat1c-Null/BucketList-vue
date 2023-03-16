<template>
    <footer>
        <p>Copyright Tsunami Surfers &copy; 2023</p>
        <!--Stop showing title when clicked on About page-->
        <router-link @click="$emit('toggle-hide-header')" to="/about" >About</router-link>
    </footer>
</template>

<script>
    export default {
        name: 'Footer-main',
    }
</script>

<style scoped>
    a {
        color: #333;
    }

    footer {
        margin-top: 30px;
        text-align: center;
    }
</style>