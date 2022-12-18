import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Qui from '@qvant/qui-max'
import '@qvant/qui-max/styles'
import FontAwesome from '@/plugins/font-awesome'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesome)
app.use(Qui)
app.use(router)

app.mount('#app')
