import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Address from './screen/Address'

class App extends Component {
  

  render() {
    return (
      <div>

        <Route exact path='/' component={Address} />


      </div>
    );
  }
}

export default App;
