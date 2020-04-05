<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- <Header :addTodo="addTodo"/> -->
            <!-- <Header @addTodo="addTodo"/> -->
            <Header ref="header"/>
            <List :todos="todos"  :updateTodo="updateTodo"/>
            <Footer>
                <label >
                    <input type="checkbox" v-model="isCheckAll"/>
                </label>
                <span slot="middle">
                    <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
                </span>
                <button slot="right" class="btn btn-danger" v-show="completeSize>0" @click="clearCompleteTodos">清除已完成任务</button>
            </Footer>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    import List from '@comps/List'
    import Footer from '@comps/Footer'
    import {saveTodos,getTodos} from './utils/storageUtils.js'
    export default{
        //name:'App',
        data(){
            return {
                todos:[]
            }
        },
        mounted(){

            this.$eventBus.$on('deleteTodo',this.deleteTodo)
            // 给<Header>组件对象绑定自定义事件监听
            /* 要求: 绑定自定义事件监听和分发事件的组件对象得是同一个 */
            this.$refs.header.$on('addTodo',this.addTodo)
            setTimeout(() => {
                this.todos=getTodos()
            }, 1000);
        },
        computed:{
            completeSize(){
                return this.todos.reduce((pre,todo)=>pre+(todo.complete?1:0),0)
            },
            isCheckAll:{
                get(){
                return this.todos.length===this.completeSize &&this.completeSize>0
                },
                set(value){
                    this.checkAllTodos(value)
                }
            }
        },
        beforeDestroy(){
            this.$refs.header.$off('addTodo')
            this.$eventBus.$off('deleteTodo')
        },
        methods:{
            addTodo(todo){
                this.todos.unshift(todo)
            },
            deleteTodo(index){
                this.todos.splice(index,1)
            },
            clearCompleteTodos(){
                this.todos=this.todos.filter(todo=>!todo.complete)
            },
            checkAllTodos(isCheck){
                this.todos.forEach(todo=>todo.complete=isCheck)
            },
            updateTodo(todo,isCheck){
                todo.complete=isCheck
            }
        },
        watch:{
           todos:{
                deep:true,
                // handler:function(value){
                //     saveTodos(value)
                // }
                handler:saveTodos
           }

        },
        components:{//局部注册组件
            Header,
            List,
            Footer
        }
    }
</script>

<style>
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>
