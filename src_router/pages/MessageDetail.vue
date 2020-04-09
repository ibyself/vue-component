<template>
    <ul>
        <!-- <li>ID:{{$route.params.mid}}</li> -->
        <li>ID:{{mid}}</li>
        <!-- <li>Title:{{detail.title}}</li> -->
        <!-- <li>Title:{{$route.query.title}}</li> -->
        <li>Title:{{title}}</li>
        
        <li>Content:{{detail.content}}</li>
    </ul>
</template>

<script  type="text/ecmascript-6">
    const allDetails=[
        {id:1,title:'message001',content:'message content001'},
        {id:2,title:'message002',content:'message content002'},
        {id:3,title:'message003',content:'message content003'},
        {id:4,title:'message004',content:'message content004'}
    ]
    export default {
        props:['mid','title'],
        data(){
            return {
                detail:[]
            }
        },
        mounted(){
            this.show(this.$route)
        },
        watch:{
            '$route' (to,from){
                this.show(to)
            }
        },
        methods:{
            show(route){
                setTimeout(()=>{
                    const detail=allDetails.find(detail=>route.params.mid*1===detail.id)
                    this.detail=detail
                },500)
            }
        }
    };
</script>

<style scoped>

 
</style>
