<template>
    <!--you can also do @dblclick instead of @click for two clicks-->
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']" :id="task.done ? 'taskComplete' : ''" ref="target" :style="{
        transform: cardTransform,
        transition: 'transform 0.25s ease-out'
        }">
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
    /*import { ref, computed } from 'vue'
    import {useMouseInElement} from '@vueuse/core'
    
    const target = ref(null)//Target element over which mouse will hover

    const { elementX, elementY, isOutside, elementHeight, elementWidth } = 
        useMouseInElement(target)

    const cardTransform = computed(() => {
        const MAX_ROTATION = 6

        const rX = (
            MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION
        ).toFixed(2)//Handles X-Axis

        const rY = (
            MAX_ROTATION / 2 - (elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2
        ).toFixed(2)//Handles Y-Axis

        return isOutside.value
            ? ''
            : `rotateX(${rX}deg) rotateY(${rY}deg)`
    })
    */
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