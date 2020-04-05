<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <Header :addTodo="addTodo"/>
            <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
            <Footer :todos="todos" :checkAllTodos="checkAllTodos" :clearCompleteTodos="clearCompleteTodos"/>
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
            setTimeout(() => {
                this.todos=getTodos()
            }, 1000);
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
