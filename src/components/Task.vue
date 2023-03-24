<template>
    <!--you can also do @dblclick instead of @click for two clicks-->
    <div @click="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{task.text}}
        <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
    
</template>

<script>
    export default {
        name: 'Task-main',
        props: {
            task: Object,
        },
    }
</script>

<style scope>
    .fas {
        color: #3a0ca3;
    }

    .task {
        background: #ebebeb;
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 15px;
    }

    .task.reminder {
        border-left: 5px solid #4361ee;
    }

    .task h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>