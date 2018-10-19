import React, { Component } from 'react';
import TrezorConnect from 'trezor-connect';

class App extends Component {
  constructor(props) {
    super(props)
    this.accountIndex = React.createRef()
    this.addressIndex = React.createRef()
  }

  getInfo = async () => {
    const result = await TrezorConnect.getAccountInfo({
      path: `m/49'/0'/${this.accountIndex.current.value}'`,
      coin: "btc",
    });
    console.log(result)
  }

  getAddr = async () => {
    const result = await TrezorConnect.getAddress({
      path: `m/49'/0'/0'/0/${this.addressIndex.current.value}`,
      coin: "btc"
    })
    console.log(result)
  }

  getEtherAddr = async () => {
    const result = await TrezorConnect.ethereumGetAddress({
      path: `m/49'/60'/0'/${this.addressIndex.current.value}`
    })
    console.log(result)
  }

  render() {
    return (
      <div className="App">

        <input type="number" ref={this.accountIndex} />
        <button onClick={this.getInfo}>Get info</button>

        <input type="number" ref={this.addressIndex} />
        <button onClick={this.getAddr}>Get addr</button>

        <button onClick={this.getEtherAddr}>Get ETher addr</button>

      </div>
    );
  }
}

export default App;
