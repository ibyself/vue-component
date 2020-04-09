<template>
    <div>
      <mt-button type="danger" style="width:100%" @click="hint">测试mint-ui</mt-button>
    </div>
</template>

<script  type="text/ecmascript-6">
    import { MessageBox,Toast} from 'mint-ui'
    export default {
      methods:{
        hint(){
          MessageBox.alert('点击了button').then(action => {
            Toast({
              message: '我是提示信息',
              position: 'bottom',
              duration: 2000
            })
          })
        }
      }

    };
</script>

<style scoped>

 
</style>
