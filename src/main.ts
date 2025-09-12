import './style.css'
import { createSSRApp } from 'vue'
import App from './App.vue'

//createApp(App).mount('#app')

export const createApp = () => {
    const app = createSSRApp(App)

    return { app }
}
