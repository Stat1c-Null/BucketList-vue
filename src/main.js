import { createApp } from 'vue'
import App from './App.vue'
//single dor ( . ) represents that folder or file is located in the same directory as the file from which we are calling
import router from './router'

createApp(App).use(router).mount('#app')
