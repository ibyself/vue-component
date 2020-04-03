<template>
    <div>
        <h2>{{msg}}</h2>
        <HelloWorld/>
        <hello-world/>
    </div>
</template>

<script>
    import HelloWorld from '@comps/HelloWorld'
    export default{
        //name:'App',
        data (){
            return{
                msg:'First Vue Component'
            }
        },
        components:{//局部注册组件
            HelloWorld
        }
    }
</script>

<style>
    div{
        color:skyblue;
    }
</style>
