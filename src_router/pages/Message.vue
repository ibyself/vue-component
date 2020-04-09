<template>
    <div>
        <ul>
            <li v-for="m in messages" :key="m.id">
                <!-- <router-link :to="'/home/message/detail/'+m.id">{{m.title}}</router-link> -->
                <router-link :to="`/home/message/detail/${m.id}?title=${m.title}`">{{m.title}}</router-link>
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
            </li>
        </ul>
        <button @click="$router.back()">回退</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script  type="text/ecmascript-6">
  export default {
      data(){
          return {
              messages:[]
          }
      },
      mounted(){
          setTimeout(()=>{
            const messages=[
                {id:1,title:'message001'},
                {id:2,title:'message002'},
                {id:3,title:'message003'},
                {id:4,title:'message004'},
            ]
            this.messages=messages
          },1000)
      },
      methods:{
          pushShow(message){
              this.$router.push({name:'detail',params:{mid:message.id},query:{title:message.title}})
          },
          replaceShow(message){
              this.$router.replace({name:'detail',params:{mid:message.id},query:{title:message.title}})

          }
      }
  };
</script>

<style scoped>

 
</style>

