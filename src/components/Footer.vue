<template>
    <footer>
        <p>Copyright Tsunami Surfers &copy; 2023</p>
        <!--Stop showing title when clicked on About page-->
        <router-link @click="$emit('toggle-add-button-off')" to="/about" class="link">About</router-link>
    </footer>
</template>

<script>
    export default {
        name: 'Footer-main',
    }
</script>

<style scoped>
    .link {
        color: #7209b7;
    }
    .link:hover {
        color: #f72585;
    }

    a {
        color: #333;
    }

    footer {
        margin-top: 30px;
        text-align: center;
    }
</style>