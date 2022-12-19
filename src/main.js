import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createQui, QButton, QCollapse, QCollapseItem } from '@qvant/qui-max'
// import required styles
import '@qvant/qui-max/css/main'
import '@qvant/qui-max/fonts'
import '@qvant/qui-max/icons'

// import the only styles of component you gonna use
import '@qvant/qui-max/css/q-button'
import '@qvant/qui-max/css/q-collapse-item'
import FontAwesome from '@/plugins/font-awesome'

const app = createApp(App)

const Qui = createQui()

app.component('font-awesome-icon', FontAwesome)
app.use(Qui)
app.use(QButton)
app.use(QCollapse)
app.use(QCollapseItem)
app.use(router)

app.mount('#app')
