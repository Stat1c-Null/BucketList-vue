<template>
    <div v-if="!tasks.length"><h3 id="text">Your bucket list is empty, fill it up with goals!</h3></div>
    <div :key="task.id" v-for="task in tasks">
        <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" @complete-task="$emit('complete-task', task.id)" :task="task" />
    </div>
</template>

<script>
    import Task from './Task'

    export default {
        name: 'Tasks-main',
        props: {
            tasks: Array
        },
        components: {
            Task,
        },
        emits: ['delete-task', 'toggle-reminder', 'complete-task'],
    }
</script>

<style scoped>
    #text {
        color: #f72585;
        text-align: center;
        margin: 7% 0;
    }

</style>

