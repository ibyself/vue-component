import axios from 'axios'
import {REQUESTING,REQ_SUCCESS,REQ_ERROR} from './mutations-type'
export default {
    async search({commit},searchName){
        commit(REQUESTING)
        
        try{
            const response=await axios.get('https://api.github.com/search/users',{params:{q:searchName}})
            const result=response.data
            const users=result.items.map(item=>({
                username:item.login,
                url:item.html_url,
                avatar_url:item.avatar_url
            }))
            commit(REQ_SUCCESS,{users})
        }catch(error){
            commit(REQ_ERROR,{msg:'请求出错:'+error.massage})
        }
    }
}