<template>
    <div>
        <h2 v-if="isFirst">请输入关键字进行搜索</h2>
        <h2 v-else-if="loading">loading...</h2>
        <h2 v-else-if="errMsg">{{errMsg}}</h2>
        <div class="row" v-else>
            <div class="card" v-for="(user,index) in users" :key="index">
                <a href="user.url" target="_blank">
                <img src="user.avatar_url" style='width: 100px'/>
                </a>
                <p class="card-text">{{user.username}}</p>
            </div>
        </div>
    </div>
</template>

<script  type="text/ecmascript-6">
    import axios from 'axios'
    export default {
        data(){
            return {
                isFirst:true,
                loading:false,
                users:[],
                errMsg:''
            }
        },
        mounted(){
            this.$eventBus.$on('search',(searchName)=>{
                this.isFirst=false
                this.loading=true
                axios.get('https://api.github.com/search/users',{params:{q:searchName}})
                .then((response)=>{
                    const result=response.data
                    const users=result.items.map(item=>({
                        username:item.login,
                        url:item.html_url,
                        avatar_url:item.avatar_url
                    }))
                    this.loading=false
                    this.users=users
                })
                .catch((err)=>{
                    this.loading=false
                    this.errMsg='请求出错：'+err.message
                })
            })
        }
    };
</script>

<style scoped>
    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }

 
</style>
