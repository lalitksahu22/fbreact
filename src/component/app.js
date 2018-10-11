import React,{Component} from 'react';
import ChatBot from './chatbot';
import UserList from './userList'
import io from 'socket.io-client';

import {connect} from 'react-redux'
import {openChat,setChatMessages} from '../action/chat'


class App extends Component{
    socket=null;
    ownsocketid=null;
    othersocketid=null;
    componentDidMount(){
        this.socket = io('http://localhost:3000');
       
        this.socket.on('connect',()=>{
            console.log("client socket connection")
            this.ownsocketid=this.socket.id;
        })

        this.socket.on('welcome',(msg,userlist)=>{
            
            let ulist=userlist
            .filter((i)=>i!=this.ownsocketid)
            console.log("welcome called"+msg+JSON.stringify(ulist))
            this.setState({userlist:ulist})
        })

        this.socket.on('exit',(msg,userlist)=>{
            var ulist=userlist.filter((i)=>i!=this.ownsocketid)
            this.setState({userlist:ulist})
        })


        this.socket.on('sMessage',(rcv,msg)=>{
            this.props.setChatMessages(rcv,{msg:msg,self:false})
        })
    }
    state={userlist:[]};
    
    sentMsg=(msg)=>{
        this.props.setChatMessages(this.props.chatActiveUser,{msg:msg,self:true})
        this.socket.emit("cMessage",this.props.chatActiveUser,msg);
    }
    
    render(){
        return(<div>
            <div>Welcome User:{this.ownsocketid}</div>
            <UserList users={this.state.userlist}/>
            <ChatBot title={this.props.chatActiveUser} messageList={this.props.chatMessage[this.props.chatActiveUser]||[]} sentMsg={this.sentMsg}/>
        </div>)
    }

    componentWillUnmount(){
        this.socket.close();
    }
}

var mapStateToProps=({chatActiveUser,chatMessage})=>{
    return{chatActiveUser,chatMessage}
}
export default connect(mapStateToProps,{openChat,setChatMessages})(App)