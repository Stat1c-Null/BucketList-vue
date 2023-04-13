<template>
    <!--you can also do @dblclick instead of @click for two clicks-->
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']" :id="task.done ? 'taskComplete' : ''">
        <h3>
        <i @click="$emit('complete-task', task.id)" :class="[task.done ? 'fa fa-check-square' : 'fa fa-square', 'task']" :id="task.done ? 'taskComplete' : ''"></i><!--If task is completed show checkmark, if not empty square-->
        <p v-if="task.done == false">{{task.text}}</p>
        <p v-else><span class="taskDone">{{task.text}}</span></p>
        <i @click="$emit('delete-task', task.id)" class="fa fa-times"></i>
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
    #taskComplete {
        background-color: rgba(144, 65, 247, 0.5);
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