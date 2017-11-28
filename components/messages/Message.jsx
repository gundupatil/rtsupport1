import React, {Component} from 'react';

class Message extends Component{
  onClick(e){
    e.preventDefault();
    const {setMessage, message} = this.props;
    setMessage(message);
  }
  render(){
    const {message, activeMessage} = this.props;
    const active = message === activeMessage ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick.bind(this)}>
          {message.name}
        </a>
      </li>
    )
  }
}

Message.propTypes = {
  message: React.PropTypes.object.isRequired,
  setMessage: React.PropTypes.func.isRequired,
  activeMessage: React.PropTypes.object.isRequired
}

export default Message
