const express=require('express')
const axios=require('axios')
const app=express()
app.get('/repositories/:q',(req,res)=>{
    const q=req.params.q
    axios({
        method:'GET',
        url:'https://api.github.com/search/repositories',
        params:{
            q,
            sort:'stars'
        }
    }).then(response=>{
        const {name,html_url}=response.data.items[0]
        res.send({
            status:0,
            data:{name,html_url}
        })
    })
})
app.listen('4000',()=>{
    console.log('server started: http://localhost:4000')
})