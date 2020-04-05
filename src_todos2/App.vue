<template>
    <div>
        <header class="site-header jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1>请发表对Vue的评论</h1>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <Add :addComment="addComment"/>
            <List :commentList="commentList" :deleteComment="deleteComment"/>
        </div>
    </div>
</template>

<script  type="text/ecmascript-6">
    import Add from './components/Add'
    import List from './components/List'
    export default {
        data(){
            return {
                commentList:[
                    {id:1,username:'aa',content:'bb'},
                    {id:3,username:'cc',content:'dd'},
                    {id:5,username:'ee',content:'ff'},
                ]
            }
        },
        methods:{
            deleteComment(index){
                this.commentList.splice(index,1)
            },
            addComment(comment){
                this.commentList.unshift(comment)
            }
        },
        components:{
            Add,
            List
        }
    };
</script>

<style scoped>

 
</style>
