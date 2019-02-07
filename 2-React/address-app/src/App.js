import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddressForm from './components/AddressForm';

class App extends Component {

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <div className="row">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-title">Address Finder</div>
          </div>

          <AddressForm />

        </header>
      </div>
    );
  }
}

export default App;
