import React, { Component } from 'react';
import './../styles/roomlist.css';

class RoomList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        rooms: []
      };
    this.roomsRef = this.props.firebase.database().ref('rooms');
    console.log(this.roomsRef);
  }

  componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
     });
   }

  render() {
    const roomList = this.state.rooms.map((room) =>
      <li key={room.key}>{room.name}</li>
    );
    return(
      <div className="chat-list">
        <h3>Rooms</h3>
        <ul className="room-names">{roomList}</ul>
      </div>
    );
  }
}

export default RoomList
