import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import HomePage from './screen/HomePage';
import Address from './screen/Address'
import ManyAddress from './screen/ManyAddress';
import TrezorJs from './screen/TrezorJs';
import UsingWeb3 from './screen/UsingWeb3';

class App extends Component {
  

  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/address' component={Address} />
        <Route path='/many-address' component={ManyAddress} />
        <Route path='/web3' component={UsingWeb3} />
        <Route path='/trezor-js' component={TrezorJs} />

      </div>
    );
  }
}

export default App;
