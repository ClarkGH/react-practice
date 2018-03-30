import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [{
        username: "Batman",
        content: "WHERE IS HE!",
      }, {
        username: "Robin",
        content: "Where is who?",
      }, {
        username: "Batman",
        content: "You're gonna love me!"
      }, {
        username: "Robin",
        content: "Holy geometry, batman."
      }, {
        username: "Batman",
        content: "I liek chocolate milk!"
      }, {
        username: "Robin",
        content: "Have you gone mad?"
      }, {
        username: "Batman",
        content: "*Eats a pear*"
      }, {
        username: "Robin",
        content: "..."
      }]
    };

    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    this.scrollToBot();
  }

  componentDidUpdate() {
    this.scrollToBot();
  }

  scrollToBot() {
    ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
  }

  submitMessage(e) {
    e.preventDefault();
    if (ReactDOM.findDOMNode(this.refs.msg).value){
      this.setState({
        chats: this.state.chats.concat([{
          username: "Batman",
          content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>
        }])
      }, () => {
        ReactDOM.findDOMNode(this.refs.msg).value = "";
      });
    }
  }

  render() {
    const username = "Batman";
    const { chats } = this.state;

    return (
      <div className="chatroom">
        <h3>Chilltime</h3>
        <ul className="chats" ref="chats">
          {
            chats.map((chat) =>
              <Message chat={chat} user={username} />
            )
          }
        </ul>
        <form className="input" onSubmit={(e) => this.submitMessage(e)}>
          <input type="text" ref="msg" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Chat;