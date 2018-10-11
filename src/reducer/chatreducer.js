import {CHAT_OPEN_STATUS,CHAT_ACTIVE_USER,CHAT_MESSAGES} from '../types'
export var chatOpenStatus=(state=null,action)=>{
    switch(action.type){
        case CHAT_OPEN_STATUS:
            return (action.data);
            break;
        default:
            return state;
    }

}
export var chatActiveUser=(state='bot',action)=>{
    switch(action.type){
        case CHAT_ACTIVE_USER:
            return (action.data);
            break;
        default:
            return state;
    }

}

export var chatMessage=(state={},action)=>{
    switch(action.type){
        case CHAT_MESSAGES:
            if(state[action.id]==undefined){
                state[action.id]=[]
            }
            console.log(JSON.stringify(action))
            state[action.id].push(action.data)
            state[action.id]=[... state[action.id]]
            return ({...state});
            break;
        default:
            return state;
    }

}
