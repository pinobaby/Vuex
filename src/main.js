import { createApp } from 'vue'
import store from './components/store/index'
import App from './App.vue'


createApp(App)
    .use( store)
    .mount('#app')
