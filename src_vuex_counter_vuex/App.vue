<template>
    <div>
      <p>clicked{{count}} times, count is{{eventOrOdd}}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">increment if odd</button>
      <button @click="incrementAsync">increment async</button>
    </div>
</template>

<script  type="text/ecmascript-6">
  export default {
   
    computed:{
      count(){
        return this.$store.state.count
      },
      eventOrOdd(){
        return this.$store.getters.eventOrOdd
      }
    },
    methods:{
      increment(){
        this.$store.commit('INCREMENT')
      },
      decrement(){
        this.$store.commit('DECREMENT')
      },
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync(){
        setTimeout(()=>{
         this.$store.dispatch('incrementAsync')
        },1000)
      }
    }
  };
</script>

<style scoped>

 
</style>
