import { App } from 'vue'
import Button from './index'

export default {
    install(app: App) {
        app.component('Button', Button)
    }
}