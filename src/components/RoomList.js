import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/roomlist.css';

class RoomList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        rooms: []
      };
    //this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  render() {
    return (
      <div id="rooms">
        <div id="room-list">
          <h3>Chat Rooms</h3>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default RoomList
