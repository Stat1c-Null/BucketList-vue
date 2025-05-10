<template>
    <Transition>
        <div v-if="showAddTask">
            <AddTask @add-task="addTask"/>
        </div>
    </Transition>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" @complete-task="completeTask" :tasks="tasks"/>
    <button @click="sendEmail">Test</button>
</template>

<script>
    import Tasks from '../components/Tasks'
    import AddTask from '../components/AddTask'
    import emailjs from '@emailjs/browser'

    export default {
        name: 'Home-main',
        props: {
            showAddTask: Boolean,
        },
        components: {
            Tasks,
            AddTask
        },
        data() {
            return {
                tasks: [],
            }
        },
        methods: {
            sendEmail() {
                emailjs
                    .sendForm('service', 'template', this.$refs.form, {
                    publicKey: '',
                    })
                    .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                    );
                },
            async completeTask(id) {
                const taskToToggle = await this.fetchTask(id)//Get the task you trying to complete
                const updTask = {...taskToToggle, done: !taskToToggle.done}//Set completion variable to same one as before
                //Fetch the task
                const res = await fetch(`api/tasks/${id}`, {
                    method: 'PUT',
                    headers: {
                    'Content-type': 'application/json'
                    }, 
                    body: JSON.stringify(updTask)
                })

                const data = await res.json()

                this.tasks = this.tasks.map((task) => task.id === id ? {...task, done: data.done} : task)//Set the result
            },
            async addTask(task) {
                const res = await fetch('api/tasks', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(task),
                })

                const data = await res.json()

                this.tasks =[...this.tasks, data]
            },
            async deleteTask(id) {
                if(confirm('Are you sure?')) {
                    const res = await fetch(`api/tasks/${id}`, {
                    method: 'DELETE'
                    })

                    res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')
                }
            },
            async toggleReminder(id){
                const taskToToggle = await this.fetchTask(id)
                const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

                const res = await fetch(`api/tasks/${id}`, {
                    method: 'PUT',
                    headers: {
                    'Content-type': 'application/json'
                    }, 
                    body: JSON.stringify(updTask)
                })

                const data = await res.json()

                this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task)
            },
            async fetchTasks() {
                //Get data from json database that is hosted locally
                const res = await fetch('api/tasks')

                const data = await res.json()

                return data
            },
            async fetchTask(id) {
                //Get data from json database that is hosted locally
                const res = await fetch(`api/tasks/${id}`)

                const data = await res.json()

                return data
            },
        },
        async created() {
            this.tasks = await this.fetchTasks()
        },
    }
</script>

<style scoped>
    .v-enter-active, .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from, .v-leave-to {
        opacity: 0;
    }
</style>