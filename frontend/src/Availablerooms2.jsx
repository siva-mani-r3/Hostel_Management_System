import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
const Availablerooms2= () => {
  const [availableRooms, setAvailableRooms] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAvailableRooms = async () => {
      try {
        const responses = await Promise.all([
          axios.get('http://localhost:3002/users1'),
          axios.get('http://localhost:3002/users2'),
          axios.get('http://localhost:3002/users3'),
          axios.get('http://localhost:3002/users4'),
          axios.get('http://localhost:3002/users5'),
          axios.get('http://localhost:3002/users6'),
          axios.get('http://localhost:3002/users7'),
          axios.get('http://localhost:3002/users8')
        ]);

        const allData = responses.flatMap((response, index) =>
          response.data.map(user => ({ ...user, room: `Room ${index + 1}` }))
        );

        const roomCounts = {};
        allData.forEach(user => {
          roomCounts[user.room] = (roomCounts[user.room] || 0) + 1;
        });

        const available = Object.entries(roomCounts)
          .filter(([room, count]) => count < 4)
          .map(([room, count]) => ({
            room,
            availableSpots: 4 - count
          }));

        setAvailableRooms(available);
      } catch (err) {
        console.error("Error fetching available rooms:", err);
      }
    };

    fetchAvailableRooms();
  }, []);

  const handleRoomCheck = (room) => {
    const roomNumber = room.split(" ")[1];
    navigate(`/users1${roomNumber}`);
  };

  return (
    <div style={{marginTop:"90px"}}>
      <Navbar2 />
      <div className="container mt-4">
      <center>
        <h2>Available Rooms</h2>
        
        {availableRooms.length > 0 ? (
          <ul className="list-group">
            {availableRooms.map(({ room, availableSpots }) => (
              <li key={room} className="list-group-item">
                <span>{room} - {availableSpots} spot{availableSpots > 1 ? 's' : ''} available </span>
             
                <button style={{marginTop:"3px"}}
                  className="btn btn-info ms-2" 
                  onClick={() => handleRoomCheck(room)}
                >
                  Check
                </button>
               
              </li>
              
            ))}
          </ul>
        ) : (
          <h2>No available rooms at the moment.</h2>
        )}
        </center>
      </div>
    </div>
  );
};

export default Availablerooms2;
