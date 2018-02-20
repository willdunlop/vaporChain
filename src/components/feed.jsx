import React, { Component } from 'react';

export default class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      inputValue: '',
    }
  }

  updateInput(inputValue) {
    this.setState({ inputValue })
  }

  formSubmit() {
    console.log('yo');
  }

  renderChat() {
    const { userName } = this.state;
    return (
      <div class="feed__chat">

      <form onSubmit={this.formSubmit()}>
        <input 
          type="text" 
          value={this.state.inputValue}
          onChange={e => this.updateInput(e.target.value)}
          placeholder="Enter Text"
        />
      </form>
    </div>
    )
  }

  render() {
    return (
      <div class="feed">
      { this.renderChat() }
    </div>
    );

  }
}
