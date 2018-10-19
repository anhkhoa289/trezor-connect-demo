import React, { Component } from 'react';
import TrezorConnect from 'trezor-connect';

class App extends Component {
  test = async () => {
    const result = await TrezorConnect.getAccountInfo("m/44'/0'/2'");
    console.log(result)
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.test}>Get info</button>
      </div>
    );
  }
}

export default App;
