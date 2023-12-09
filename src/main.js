import './assets/main.css'
import '@tabler/core/dist/css/tabler.css';
import '@tabler/core/dist/js/tabler.js';

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
