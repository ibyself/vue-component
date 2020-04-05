<template>
    <div>
        <div v-if="!repoName">loading...</div>
        <div v-else>moast star repo is <a href="repoUrl">{{repoName}}</a></div>
    </div>
</template>

<script  type="text/ecmascript-6">
    import axios from 'axios'
    export default {
       data(){
           return{
               repoName:'',
               repoUrl:''
           }
       },
       mounted(){
            //使用vue-resource
            // this.$http.get('https://api.github.com/search/repositories?q=j&sort=stars')
            // .then(response=>{
            //     const result=response.data
            //     const {name,html_url}=result.items[0]

            //     this.repoName=name
            //     this.repoUrl=html_url
            // })
            // .catch(error=>{
            //     alert('请求出错')
            // })
            //使用axios
            axios.get('api/repositories/vue')
                .then(response=>{
                    const result =response.data
                    const {name,html_url}=result.items[0]
                    this.repoName=name
                    this.repoUrl=html_url
                })
                .catch(error=>{
                    alert('请求出错')
                })
        } 
    };
</script>

<style scoped>

 
</style>
