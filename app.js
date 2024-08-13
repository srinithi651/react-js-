import React, { Component } from 'react';

class ToggleMessage extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with isMessageVisible set to false
    this.state = {
      isMessageVisible: false,
    };
  }

  // Function to toggle the visibility of the message
  toggleMessage = () => {
    this.setState((prevState) => ({
      isMessageVisible: !prevState.isMessageVisible,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleMessage}>
          {this.state.isMessageVisible ? 'Hide Component' : 'Show Component'}
        </button>
        {this.state.isMessageVisible && <p>Hi! How are You!!!</p>}
      </div>
    );
  }
}

export default ToggleMessage;
