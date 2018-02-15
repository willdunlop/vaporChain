import React, { Component } from 'react';

export default class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
    }
  }

  renderLogin() {
    return (
      <div class="feed__login">
        VAPORCHAT
      </div>
    )
  }

  renderChat() {
    const { userName } = this.state;
    return (
      <div class="feed__chat">
        <p><span>~AcquiredTaste: </span> This is what the feed will look like</p>
        <p><span>George: </span> Looks pretty cool</p>
      C:\{userName}>
    </div>
    )
  }

  render() {
    return (
      <div class="feed">
      {
        this.state.userName
          ? this.renderChat()
          : this.renderLogin()
      }
    </div>
    );

  }
}
