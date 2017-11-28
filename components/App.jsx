import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import MessageSection from './messages/MessageSection.jsx';
import UserSection from './users/UserSection.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      channels: [],
      messages: [],
      users: []
    };
  }
  addChannel(name){
    let {channels} = this.state;
    channels.push({id: channels.length, name});
    this.setState({channels});
    // TODO: Send to server
  }
  setChannel(activeChannel){
    this.setState({activeChannel});
    // TODO: Get Channels Messages
  }
  addMessage(name){
    let {messages} = this.state;
    messages.push({id: messages.length, name});
    this.setState({messages});
    // TODO: Send to server
  }
  setMessage(activeMessage){
    this.setState({activeMessage});
    // TODO: Get Messages Messages
  }
  addUser(name){
    let {users} = this.state;
    users.push({id: users.length, name});
    this.setState({users});
    // TODO: Send to server
  }
  setUser(activeUser){
    this.setState({activeUser});
    // TODO: Get Messages Messages
  }
  render(){
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            {...this.state}
            addChannel={this.addChannel.bind(this)}
            setChannel={this.setChannel.bind(this)}
          />
          <UserSection
            {...this.state}
            addUser={this.addUser.bind(this)}
            setUser={this.setUser.bind(this)}
          />
        </div>

        <MessageSection
          {...this.state}
          addMessage={this.addMessage.bind(this)}
          setMessage={this.setMessage.bind(this)}
        />
      
      </div>


    )
  }
}

export default App
