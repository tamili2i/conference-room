//import { conferenceRoomDB } from './utils/db';

const hello = () => {
  console.log("Hello");
}


const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yD)E)FE7Jw&qT',
  database: 'conference_room'
});



// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// CREATE operation
const createRoom = (events, context) => {
  console.log(events.body)
  room = JSON.parse(events.body)
  const sql = 'INSERT INTO conference_room SET ?';
  connection.query(sql, room, (err, results) => {
    if (err) throw err;
    console.log('Room added:', results);
  });

  return {
      "statusCode": 200,
      "headers": {
        "Content-Type": "application/json"
      },
      "body":  {
        "message": "Room Created"
      }
    }
};

// READ operation
const getAllRooms = () => {
  const sql = 'SELECT * FROM conference_room';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log('All Rooms:', results);
  });
};

// UPDATE operation
const updateRoom = (roomId, newData) => {
  const sql = 'UPDATE conference_room SET ? WHERE room_id = ?';
  connection.query(sql, [newData, roomId], (err, results) => {
    if (err) throw err;
    console.log('Room updated:', results);
  });
};

// DELETE operation
const deleteRoom = (roomId) => {
  const sql = 'DELETE FROM conference_room WHERE room_id = ?';
  connection.query(sql, [roomId], (err, results) => {
    if (err) throw err;
    console.log('Room deleted:', results);
  });
};

// Example usage
const newRoom = {
  room_name: 'Meeting Room 1',
  capacity: 20,
  location: 'Floor 3',
  projector_available: true,
  phone_extension: '1234',
  last_maintenance_date: '2023-01-01'
};

// Uncomment the lines below to test the CRUD operations
// createRoom(newRoom);
// getAllRooms();
// updateRoom(1, { capacity: 25 });
// deleteRoom(1);

// Close the connection after performing CRUD operations
// connection.end((err) => {
//   if (err) {
//     console.error('Error disconnecting from MySQL:', err);
//     return;
//   }
//   console.log('Disconnected from MySQL database');
// });

module.exports = {hello, getAllRooms, createRoom}
