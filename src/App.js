import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import * as firebase from 'firebase';
import AppHeader from './components/AppHeader';
import Landing from './components/Landing';
import SideBar from './components/SideBar';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBbaQg_RBFBD078qRilJHs_GmwTuNceaDQ",
  authDomain: "react-chat-edd54.firebaseapp.com",
  databaseURL: "https://react-chat-edd54.firebaseio.com",
  projectId: "react-chat-edd54",
  storageBucket: "react-chat-edd54.appspot.com",
  messagingSenderId: "419133942033"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App container">
        <AppHeader />
        <main>
          <Route exact path="/" component={Landing} />
        </main>
        <Landing />
        <SideBar firebase={firebase} />
      </div>
    );
  }
}

export default App;
