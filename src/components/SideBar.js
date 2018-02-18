import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/sidebar.css';
import RoomList from './RoomList';

class SideBar extends Component {
  render() {
    return (
      <div className="sidenav">
        <RoomList />
      </div>
    );
  }
}

export default SideBar
