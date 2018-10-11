import React,{Component} from 'react';

import {connect} from 'react-redux'
import {openChat} from '../action/chat'

class UserList extends Component{
   
   
   
    render(){
        return(
            <div>
            <div className="row" style={{marginLeft:0,marginBottom:"1rem"}}>Online Users</div>
            <div className="row" style={{margin:0}}>
                <ul className="list-group col-md-3 ulist">
                {this.props.users.map((l,i)=>
                    <li key={i}  className="list-group-item hoverelem" onClick={()=>{this.userClick(l)}}>{"user:"+l}</li>
                )}
                </ul>
            </div>
            </div>
)
    }
    userClick=(l)=>{
        if(this.props.chatActiveUser!=l){
            this.props.openChat(true,l)
        }else{
            this.props.openChat(!this.props.chatOpenStatus,l)
        }
       
    }
}
var mapStateToProps=({chatActiveUser,chatOpenStatus})=>{
    return{chatActiveUser,chatOpenStatus}
}
export default connect(mapStateToProps,{openChat})(UserList)