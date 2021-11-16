import { createApp } from 'vue'
import App from './App.vue'

import Button from './components/Button'

import './style/index.less'


createApp(App).use(Button).mount('#app')
