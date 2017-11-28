import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component{
  render(){
    return (
      <ul>{
        this.props.messages.map( msg =>{
          return <Message
            message={msg}
            key={msg.id}
            {...this.props}
          />
        })
      }</ul>
    )
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  setMessage: React.PropTypes.func.isRequired,
  activeMessage: React.PropTypes.object.isRequired
}

export default MessageList
