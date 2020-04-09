import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'


Vue.config.productionTip=false


Vue.component(Button.name,Button)

new Vue({
    el:'#root',
    render:h=>h(App),
})
