<template>
    <div>
        <h2>{{msg}}</h2>
    </div>
</template>

<script  type="text/ecmascript-6">
  export default {
      data(){
          return {
              msg:'Hello World!'
          }
      }
  };
</script>

<style scoped>
    h2{
        color:red;
    }
 
</style>
