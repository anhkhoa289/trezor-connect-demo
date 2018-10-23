import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Address from './screen/Address'
import UsingWeb3 from './screen/UsingWeb3';
import HomePage from './screen/HomePage';
import SendMoney from './screen/SendMoney'

class App extends Component {
  

  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/address' component={Address} />
        <Route path='/sendMoney' component={SendMoney} />
        <Route path='/web3' component={UsingWeb3} />


      </div>
    );
  }
}

export default App;
