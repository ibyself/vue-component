/**
 * vuex最核心的管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/** data对象*/
const state={
    count:1
}
/**包含n个用于直接更新状态数据的方法的对象
 * 在mutations函数中不可以包含逻辑或异步代码
 */
const mutations={
    INCREMENT(state){
        state.count++
    },
    DECREMENT(state){
        state.count--
    }
}
/**包含n个用于间接更新状态数据的方法的对象
 * 在actions函数中可以包含逻辑或异步代码
 */
const actions={
    // increment(context){
    //     context.commit('INCREMENT')
    // },
    // decrement({commit}){
    //     commit('DECREMENT')
    // },
    incrementIfOdd({commit,state}){
        if(state.count%2===1){
            commit('INCREMENT')
        }
    },
    incrementAsync({commit}){
        setTimeout(()=>{
            commit('INCREMENT')
        },1000)
    }
}
/**
 * 包含n个基于state数据的getter计算属性的方法对象
 */
const getters={
    eventOrOdd(state){
        return state.count%2===1?'奇数':'偶数'
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})