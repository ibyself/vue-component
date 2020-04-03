import Vue from 'vue'
import App from './App.vue'
// import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip=false

//全局注册组件
// Vue.component('HelloWorld',HelloWorld)

// new Vue({
//     el:'#root',
//     // render:h=>h(App)
//     render:function(createElement){
//         return createElement(App)
//     }
// })

new Vue({
    el:'#root',
    components:{
        App   
    },
    template:'<App/>'
})

/**
 * render 没有问题
 * 内部使用vue-template-compliler提前编译好了模板
 * template:有问题
 *   不使用vue-template-compliler，就不能编译template
 *   vue默认引入的是不带编译器的打包版本vue.runtime.common.js
  解决: 让webpack打包引入带编译器的版本
      'vue$': 'vue/dist/vue.esm.js'
  哪种好: render
    编码简洁
    打包文件小
 */