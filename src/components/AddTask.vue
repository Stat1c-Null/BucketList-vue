<template>
    <form @submit="onSubmit" action="add-form">
        <div class="form-control">
            <label for="">Task</label>
            <input type="text" v-model="text" name="text" placeholder="Add Task" />
        </div>
        <div class="form-control">
            <label for="">Day & Time</label>
            <input type="text" v-model="day" name="day" placeholder="Add Day & Time" />
        </div>
        <div class="form-control form-control-check">
            <label for="">Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder" />
        </div>

        <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
</template>

<script>
    export default {
        name: 'AddTask',
        data() {
            return {
                text: '',
                day: '',
                reminder: false,
                done: false
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault()//Doesnt actually submit

                if(!this.text) {
                    alert('Please add a task')
                    return
                } else if (!this.day) {
                    alert('Please specify time and date')
                    return
                }

                const newTask = {
                    //id: Math.floor(Math.random() * 100000), //Generate id for json
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder,
                    done: false
                }

                this.$emit('add-task', newTask)

                this.text = ''
                this.day = ''
                this.reminder = false
            }
        }
    }
</script>

<style scoped>
    .add-form {
        margin-bottom: 40px;
    }

    .form-control {
        margin: 20px 0;
    }

    .form-control label {
        display: block;
        color: #4361ee;
    }

    .form-control input {
        width: 100%;
        height: 40px;
        margin: 5px;
        padding: 3px 7px;
        font-size: 17px;
    }

    .form-control-check {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .form-control-check label {
        flex: 1;
    }

    .form-control-check input {
        flex: 4;
        height: 20px;
    }

    .btn{
        margin-bottom: 30px;
        background-color: #3a0ca3;
    }
</style>