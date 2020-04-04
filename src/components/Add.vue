<template>
    <div class="col-md-4">
      <form class="form-horizontal">
        <div class="form-group">
          <label>用户名</label>
          <input type="text" class="form-control" placeholder="用户名" v-model="username">
        </div>
        <div class="form-group">
          <label>评论内容</label>
          <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" class="btn btn-default pull-right" @click.prevent="add">提交</button>
          </div>
        </div>
      </form>
    </div>
</template>

<script  type="text/ecmascript-6">
  export default {
    props:{
      addComment:Function
    },
    data(){
      return {
        username:'',
        content:''
      }
    },
    methods:{
      add(){
          const {username,content}=this
          if(username===''||content===''){
            alert('用户名或评论不能为空!')
            return 
          }
          const comment={
            id:Date.now(),
            username,
            content
          }
          this.addComment(comment)
          this.username=''
          this.content=''
      }
    }
  };
</script>

<style scoped>

 
</style>
