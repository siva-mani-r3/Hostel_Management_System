import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
function Users9() {
    const [allUsers, setAllUsers] = useState([]);
    const [attendance, setAttendance] = useState({});
    const [availableRooms, setAvailableRooms] = useState([]);
    useEffect(() => {
        const fetchAllUsers = async () => {
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
                setAllUsers(allData);

                // Calculate the number of students in each room
                const roomCounts = {};
                allData.forEach(user => {
                    roomCounts[user.room] = (roomCounts[user.room] || 0) + 1;
                });
                const available = Object.entries(roomCounts)
                    .filter(([room, count]) => count < 4)
                    .map(([room]) => room);
                
                setAvailableRooms(available)
                const initialAttendance = {};
                allData.forEach(user => {
                    initialAttendance[user._id] = 'Absent';
                });
                setAttendance(initialAttendance);
            } catch (err) {
                console.error(err);
            }
        };

        fetchAllUsers();
    }, []);

    const handleAttendance = (userId, status) => {
        setAttendance(prev => ({
            ...prev,
            [userId]: status,
        }));
    };

    const generateAttendancePDF = () => {
        const doc = new jsPDF();
        const columns = ["Room", "Name", "Roll No", "Status"];
        const rows = allUsers.map(user => [
            user.room,
            user.name,
            user.rollno,
            attendance[user._id] || 'Absent'
        ]);
        const presentCount = Object.values(attendance).filter(status => status === 'Present').length;
        const absentCount = Object.values(attendance).filter(status => status === 'Absent').length;
        const today = new Date();
        const dateString = today.toLocaleDateString();
        const timeString = today.toLocaleTimeString();

        doc.text("Attendance List for All Rooms - HMS", 14, 16);
        doc.text(`Date: ${dateString}`, 14, 24);
        doc.text(`Time: ${timeString}`, 14, 30);

        doc.autoTable({
            head: [columns],
            body: rows,
            startY: 40,
            theme: 'grid',
            styles: { fontSize: 10, cellPadding: 2 },
            headStyles: { fillColor: [22, 160, 133], textColor: [255, 255, 255] }
        });
        doc.text(`Total Present: ${presentCount}`, 14, doc.lastAutoTable.finalY + 10);
        doc.text(`Total Absent: ${absentCount}`, 14, doc.lastAutoTable.finalY + 16);

        doc.save(`HMS_Attendance_${dateString}`);
    };

    return (
        <div>
            <div className="container-fluid">
                <div style={{ marginTop: "90px" }}>
                    <h2 style={{
                        fontFamily: "sans-serif", marginTop: "10px", marginLeft: "5px",
                        color: "black", textShadow: "2px 2px 4px turquoise"
                    }}>Students Data List</h2>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Room</th>
                                <th>Name</th>
                                <th>Roll No</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.room}</td>
                                    <td>{user.name}</td>
                                    <td>{user.rollno}</td>
                                    <td>
                                        <button
                                            className={`btn ${attendance[user._id] === 'Present' ? 'btn-success' : 'btn-outline-success'}`}
                                            onClick={() => handleAttendance(user._id, 'Present')}
                                            disabled={attendance[user._id] === 'Present'}
                                            style={{ margin: "5px" }}
                                        >
                                            Present
                                        </button>
                                        <button
                                            className={`btn ${attendance[user._id] === 'Absent' ? 'btn-danger' : 'btn-outline-danger'}`}
                                            onClick={() => handleAttendance(user._id, 'Absent')}
                                            disabled={attendance[user._id] === 'Absent'}
                                            style={{ margin: "5px" }}
                                        >
                                            Absent
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <center>
                        <button className='btn btn-info' onClick={generateAttendancePDF} style={{ margin: "10px" }}>
                            Download Attendance
                        </button>
                    </center>
                </div>
            </div>
        </div>
    );
}
export default Users9;
