import {CHAT_OPEN_STATUS,CHAT_ACTIVE_USER,CHAT_MESSAGES} from '../types';

export var openChat=(open,uid)=>{
    return((dispatch)=>{
        dispatch(setChatOpenStatusSuccess(open));
        dispatch(setChatUser(uid))
    })
}
export var setChatOpenStatusSuccess=(open)=>{
    return{type:CHAT_OPEN_STATUS,data:open}
}
export var setChatUser=(id)=>{
    return{type:CHAT_ACTIVE_USER,data:id}
}
export var setChatMessages=(id,message)=>{
    return{type:CHAT_MESSAGES,data:message,id:id}
}