import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [{
        username: "Batman",
        content: <p>WHERE IS HE!</p>,
      }, {
        username: "Robin",
        content: <p>Where is who?</p>,
      }, {
        username: "Batman",
        content: <p>You're gonna love me!</p>
      }, {
        username: "Robin",
        content: <p>Holy geometry, batman.</p>
      }, {
        username: "Batman",
        content: <p>I liek chocolate milk!</p>
      }, {
        username: "Robin",
        content: <p>Have you gone mad?</p>
      }, {
        username: "Batman",
        content: <p>*Eats a pear*</p>
      }, {
        username: "Robin",
        content: <p>...</p>
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

    this.setState({
      chats: this.state.chats.concat([{
        username: "Batman",
        content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>
      }])
    }, () => {
      ReactDOM.findDOMNode(this.refs.msg).value = "";
    });
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