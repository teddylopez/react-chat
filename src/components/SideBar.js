import React, { Component } from 'react';
import './../styles/sidebar.css';
import RoomList from './RoomList';
import * as firebase from 'firebase';

class SideBar extends Component {
  render() {
    return (
      <div className="sidenav">
        <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default SideBar
