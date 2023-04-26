import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//createApp(App).mount('#app')
//pendurar toda aplicação em uma variavel app e poder acessar tudo que tem nela
window.app = createApp(App).mount('#app')

//exemple
console.log(app.usuario)
