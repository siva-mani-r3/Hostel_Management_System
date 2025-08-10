import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Roomelements = () => {
    const [search, setSearch] = useState("");
    const [rooms, setRooms] = useState([
        { id: 1, title: "Room1", description: "First floor room 1", image: "hostel.jpeg" },
        { id: 2, title: "Room2", description: "First floor room 2", image: "hostel.jpeg" },
        { id: 3, title: "Room3", description: "First floor room 3", image: "hostel.jpeg" },
        { id: 4, title: "Room4", description: "First floor room 4", image: "hostel.jpeg" },
        { id: 5, title: "Room5", description: "Second floor room 5", image: "hostel.jpeg" },
        { id: 6, title: "Room6", description: "Second floor room 6", image: "hostel.jpeg" },
        { id: 7, title: "Room7", description: "Second floor room 7", image: "hostel.jpeg" },
        { id: 8, title: "Room8", description: "Second floor room 8", image: "hostel.jpeg" },
    ]);
    const [newRoom, setNewRoom] = useState({ title: "", description: "", image: "hostel.jpeg" });
    // Filter rooms based on search input
    const filteredRooms = rooms.filter(room =>
        room.title.toLowerCase().includes(search.toLowerCase()) ||
        room.description.toLowerCase().includes(search.toLowerCase())
    );
    // Function to add a new room
    const addRoom = () => {
        if (newRoom.title && newRoom.description) {
            setRooms([...rooms, { ...newRoom, id: rooms.length + 1 }]); // Add new room with a new ID
            setNewRoom({ title: "", description: "", image: "hostel.jpeg" }); // Reset form
        }
    };
    // Function to delete a room
    const deleteRoom = (id) => {
        setRooms(rooms.filter(room => room.id !== id)); // Filter out the room to be deleted
    };
    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            {/* Search Bar */}
            <div className="row mb-3">
                <div className="col-md-12">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search rooms..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Add Room Form */}
            <div className="row mb-3">
                <div className="col-md-4">
                    <input style={{marginBottom:"10px"}}
                        type="text"
                        className="form-control"
                        placeholder="Room Title"
                        value={newRoom.title}
                        onChange={(e) => setNewRoom({ ...newRoom, title: e.target.value })}
                    />
                </div>
                <div className="col-md-4">
                    <input style={{marginBottom:"10px"}}
                        type="text"
                        className="form-control"
                        placeholder="Room Description"
                        value={newRoom.description}
                        onChange={(e) => setNewRoom({ ...newRoom, description: e.target.value })}
                    />
                </div>
                <div className="col-md-4">
                    <center>
                    <button className="btn btn-success" onClick={addRoom} style={{margin:"3px",width:"150px"}}>Add Room</button>
                <Link to="/users9">   <button className="btn btn-warning" style={{margin:"3px",width:"150px"}} onClick={addRoom}>Get Attendance</button></Link> 
                </center> </div>
            </div>

            {/* Room Cards */}            <div className='row mt-3'>
                {filteredRooms.map(room => (
                    <div className='col-md-3' key={room.id}>
                        <div className="card" style={{ boxShadow: "3px 3px 3px 3px silver", marginTop: "10px" }} id='container'>
                            <img className="card-img-top" src={room.image} alt={`${room.title} image`} />
                            <div className="card-body">
                                <h2 className="card-title">{room.title}</h2>
                                <p className="card-text">{room.description}</p>
                                <Link to={`/users${room.id}`} className="btn btn-info" style={{margin:"5px"}}>See Details</Link>
                                <button className="btn btn-warning" onClick={() => deleteRoom(room.id)} style={{ marginLeft: "10px",width:"100px",margin:"5px" }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roomelements;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './App.css';

// const Roomelements = () => {
//     const [search, setSearch] = useState("");
//     const [rooms, setRooms] = useState(() => {
//         // Load initial room data from localStorage or set default rooms
//         const savedRooms = localStorage.getItem("rooms");
//         return savedRooms ? JSON.parse(savedRooms) : [
//             { id: 1, title: "Room 1", description: "First floor room 1", image: "hostel.jpeg" },
//             { id: 2, title: "Room 2", description: "First floor room 2", image: "hostel.jpeg" },
//             { id: 3, title: "Room 3", description: "First floor room 3", image: "hostel.jpeg" },
//             { id: 4, title: "Room 4", description: "First floor room 4", image: "hostel.jpeg" },
//             { id: 5, title: "Room 5", description: "Second floor room 5", image: "hostel.jpeg" },
//             { id: 6, title: "Room 6", description: "Second floor room 6", image: "hostel.jpeg" },
//             { id: 7, title: "Room 7", description: "Second floor room 7", image: "hostel.jpeg" },
//             { id: 8, title: "Room 8", description: "Second floor room 8", image: "hostel.jpeg" },
            
            
//         ];
//     });

//     const [newRoom, setNewRoom] = useState({ title: "", description: "", image: "hostel.jpeg" });

//     // Save rooms to localStorage whenever they change
//     useEffect(() => {
//         localStorage.setItem("rooms", JSON.stringify(rooms));
//     }, [rooms]);

//     // Filter rooms based on search input
//     const filteredRooms = rooms.filter(room =>
//         room.title.toLowerCase().includes(search.toLowerCase()) ||
//         room.description.toLowerCase().includes(search.toLowerCase())
//     );

//     // Function to add a new room
//     const addRoom = () => {
//         if (newRoom.title && newRoom.description) {
//             setRooms([...rooms, { ...newRoom, id: rooms.length + 1 }]); // Add new room with a new ID
//             setNewRoom({ title: "", description: "", image: "hostel.jpeg" }); // Reset form
//         }
//     };

//     // Function to delete a room
//     const deleteRoom = (id) => {
//         setRooms(rooms.filter(room => room.id !== id)); // Filter out the room to be deleted
//     };

//     return (
//         <div className='container-fluid' style={{ marginTop: "90px" }}>
//             {/* Search Bar */}
//             <div className="row mb-3">
//                 <div className="col-md-12">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Search rooms..."
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                 </div>
//             </div>

//             {/* Add Room Form */}
//             <div className="row mb-3" >
//                 <div className="col-md-4">
//                     <input style={{marginBottom:"10px"}}
//                         type="text"
//                         className="form-control"
//                         placeholder="Room Title"
//                         value={newRoom.title}
//                         onChange={(e) => setNewRoom({ ...newRoom, title: e.target.value })}
//                     />
//                 </div>
//                 <div className="col-md-4">
//                     <input style={{marginBottom:"10px"}}
//                         type="text"
//                         className="form-control"
//                         placeholder="Room Description"
//                         value={newRoom.description}
//                         onChange={(e) => setNewRoom({ ...newRoom, description: e.target.value })}
//                     />
//                 </div>
//                 <div className="col-md-4">
//                     <button className="btn btn-success" onClick={addRoom}>Add Room</button>
//                   <Link to="/users9"> <button className="btn btn-warning" onClick={addRoom} style={{marginLeft:"5px"}}>Get Attendance</button></Link> 

//                 </div>
//             </div>

//             {/* Room Cards */}
//             <div className='row mt-3'>
//                 {filteredRooms.map(room => (
//                     <div className='col-md-3' key={room.id}>
//                         <div className="card" style={{ boxShadow: "3px 3px 3px 3px silver", marginTop: "10px" }} id='container'>
//                             <img className="card-img-top" src={room.image} alt={`${room.title} image`} />
//                             <div className="card-body">
//                                 <h2 className="card-title">{room.title}</h2>
//                                 <p className="card-text">{room.description}</p>
//                                 <Link to={`/users${room.id}`} className="btn btn-info" style={{"marginTop":"10px"}}>See Details</Link>
//                                 <button className="btn btn-warning" onClick={() => deleteRoom(room.id)} style={{ marginLeft: "10px",marginTop:"10px", width:"100px"}}>
//                                     Delete
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
// export default Roomelements;
