<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
          <Item v-for="(comment,index) in commentList" :key="comment.id" :index="index" :comment="comment" :deleteComment="deleteComment"/>
        </ul>
    </div>
</template>

<script  type="text/ecmascript-6">
    import Item from './Item'
    export default {
        props:{
            commentList:Array,
            deleteComment:Function
        },
        components:{
            Item
        }
    };
</script>

<style scoped>
    .reply {
        margin-top: 0px;
    }
    
</style>
