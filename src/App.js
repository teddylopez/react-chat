import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import * as firebase from 'firebase';
import AppHeader from './components/AppHeader';
import Landing from './components/Landing';
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <AppHeader />
        <main>
          <Route exact path="/" component={Landing} />
        </main>
        <Landing />
        <SideBar />
      </div>
    );
  }
}

export default App;
