import React, { Component } from 'react'

export default class AboutSetState extends Component {
  constructor() {
    super();
    this.state = {
      displayInfo: false
    }
    console.log("Component: ..." + this);
    this.toggleDisplayInfo = this.toggleDisplayInfo.bind(this);
  }
  toggleDisplayInfo() {
    this.setState({ displayInfo: !this.state.displayInfo });
  }
  render() {

    return (
      <div>
        <h1>This info can seen after button Click</h1>
        {
          this.state.displayInfo ? (
            <div>
              <p>This is information can only be seen clicking the button</p>
              <button onClick={this.toggleDisplayInfo}>Show Less</button>
            </div>
          ) : (<div>
            <button onClick={this.toggleDisplayInfo}>ReadMore </button>
          </div>)
        }
      </div>
    );

  }
}

