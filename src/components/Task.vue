<link rel="stylesheet" href="../../node_modules/atropos/atropos.css" />

<template>
    <atropos class="my-atropos">
        <!--you can also do @dblclick instead of @click for two clicks-->
        <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']" :id="task.done ? 'task-complete' : ''" ref="target">
            <h3>
            <i @click="$emit('complete-task', task.id)" :class="[task.done ? 'fa fa-check-square' : 'fa fa-square', 'task', 'task-icon']" :id="task.done ? 'task-complete' : ''"></i><!--If task is completed show checkmark, if not empty square-->
            <p v-if="task.done == false">{{task.text}}</p>
            <p v-else><span class="taskDone">{{task.text}}</span></p>
            <i @click="$emit('delete-task', task.id)" class="fa fa-times delete-task"></i>
            </h3>
            <p>{{task.day.month}} {{ task.day.year }}</p>
        </div>
    </atropos>
</template>

<script>
    
    import Atropos from 'atropos/vue';

    export default {
        name: 'Task-main',
        components: {
            Atropos,
        },
        props: {
            task: Object,
        }
    }
</script>

<style scope>
    .task-icon:hover {
        color: #4cc9f0;
    }

    .delete-task:hover {
        color: #f72585;
    }

    #task-complete {
        background-color: rgb(153, 79, 250);
    }

    .taskDone {
        text-decoration: line-through;
        text-decoration-color: #f72585;
    }

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