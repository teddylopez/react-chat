import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <AppHeader />
        <main>
          <Route exact path="/" component={Landing} />
        </main>
      </div>
    );
  }
}

export default App;
