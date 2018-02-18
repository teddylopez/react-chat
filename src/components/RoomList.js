import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/roomlist.css';

class RoomList extends Component {

  this.state = {
    rooms: []
  };
  
  render() {
    return (
      <div id="rooms">
        <div id="room-list">
          <h3>Rooms</h3>
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
