import {REQUESTING,REQ_SUCCESS,REQ_ERROR} from './mutations-type'
export default{
    [REQUESTING] (state){
        state.isFirst=false
        state.loading=true
    },
    [REQ_SUCCESS](state,{users}){
        state.loading=false
        state.users=users
    },
    [REQ_ERROR](state,{msg}){
        state.loading=false
        state.errMsg=msg
    }
}