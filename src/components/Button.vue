<template>
    <button @click="onClick()" :style="{background: color}" class="btn btn-add">{{text}}</button>
</template>

<script>
    export default {
        name: 'Button-main',
        props: {
            text: String,
            color: String
        },
        methods: {
            onClick() {
                this.$emit('btn-click')
            },
        },
    }
</script>