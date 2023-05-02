<template>
    <form @submit="onSubmit" action="add-form">
        <div class="form-control">
            <label for="">Goal</label>
            <input type="text" v-model="text" name="text" placeholder="Add a Dream" />
        </div>
        <div class="form-control">
            <label for="">Month & Year</label>
            <VueDatePicker v-model="day" class="date" placeholder="Add a date of completion" month-picker dark/>
        </div>
        <div class="form-control form-control-check">
            <label for="">Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder" />
        </div>

        <input type="submit" value="Save Goal" class="btn btn-block" />
    </form>
</template>

<script>
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';

    export default {
        name: 'AddTask',
        components: {
            VueDatePicker
        },
        data() {
            return {
                text: '',
                day: null,
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
                }

                if(!this.day) {
                    alert('Please enter approximate date')
                    return
                }

                //Convert number month into a word
                const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

                let num = this.day.month
                this.day.month = months[num]

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
    .dp__theme_dark {
        --dp-background-color: #ffffff;
        --dp-text-color: #000000;
        --dp-hover-color: #484848;
        --dp-hover-text-color: #ffffff;
        --dp-hover-icon-color: #959595;
        --dp-primary-color: #005cb2;
        --dp-primary-text-color: #ffffff;
        --dp-secondary-color: #a9a9a9;
        --dp-border-color: #d4d4d4;
        --dp-menu-border-color: #2d2d2d;
        --dp-border-color-hover: #aaaeb7;
        --dp-disabled-color: #737373;
        --dp-scroll-bar-background: #212121;
        --dp-scroll-bar-color: #484848;
        --dp-success-color: #00701a;
        --dp-success-color-disabled: #428f59;
        --dp-icon-color: #959595;
        --dp-danger-color: #e53935;
        --dp-highlight-color: rgba(0, 92, 178, 0.2);
    }
    .date {
        margin-left: 1%;
        border: 1px solid rgb(94, 94, 94);
    }

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
        height: 25px;
        margin-right: 60%;
    }

    .btn{
        margin-bottom: 30px;
        background-color: #3a0ca3;
    }
</style>