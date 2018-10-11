import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux'
import {openChat} from '../action/chat'


 class ChatBot extends Component{
   

    getmessages=()=>{
        console.log(JSON.stringify(this.props.messageList))
        return this.props.messageList.map((msg)=>{
            let cname=msg.self?'msgleft':'msgright'
            cname=cname+" msg"
            return(
            <div className={cname}>
                <div>{msg.msg}</div>
            </div>
        )
    }) }
    toggleChat=()=>{
       this.props.openChat(!this.props.chatOpenStatus,"bot")
    }
    onMsgSent=()=>{
        if(this.inputtext.value.trim()!=""){
            this.props.sentMsg(this.inputtext.value.trim());
            this.inputtext.value=""
        }
        
    }
    onEnterPressed=(e)=>{
        if(e.keyCode == 13){
            this.onMsgSent()
        }
    }
  componentDidUpdate(){
      if(this.chatbody)
        this.chatbody.scrollTop=this.chatbody.scrollHeight;
  }

    render(){
            return(<div className="chat" style={{position:'fixed',right:'2rem',bottom:'2rem',zIndex:100}}>

                    {this.props.chatOpenStatus && 
                    <div style={{width:"40vh",height:"70vh",border:"1px solid",marginBottom:"1rem"}}>
                        <div className="row d-flex justify-content-between align-items-center" style={{height:"10%",background:'black',color:'white'}}>
                            <div style={{paddingLeft:'2px',wordBreak:'break-all'}}>{this.props.title}</div>
                            <div className="hoverelem" style={{paddingRight:'2px'}} onClick={this.toggleChat}><FontAwesomeIcon  icon="times-circle"  size={"2x"}  /></div>
                        </div>
                        <div ref={(elem)=>{this.chatbody=elem}} className="row chatbody" style={{height:"80%",background:"#cccccc",overflowY:'auto'}}>
                            <div style={{width:"100%"}}>{this.getmessages()}</div>
                        </div>
                        <div className="row" style={{height:"10%"}}>
                             <input ref={(elem)=>{this.inputtext=elem}} type="text" style={{width:"80%"}} onKeyDown={this.onEnterPressed}/>
                            <div  style={{float:'right',height:"100%",width:"20%"}} className="hoverelem" onClick={this.onMsgSent}> <FontAwesomeIcon  style={{width:'100%'}} icon="arrow-circle-right"  size={"3x"}  /></div>
                        </div>
                    </div>}
                    <div className="hoverelem" onClick={this.toggleChat}><FontAwesomeIcon  style={{float:'right'}} icon="comment-dots" size={"3x"}  /></div>
            </div>)
    }
}
var mapStateToProps=({chatOpenStatus})=>{
    return{chatOpenStatus}
}
export default connect(mapStateToProps,{openChat})(ChatBot)