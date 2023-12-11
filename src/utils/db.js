const mysql = require('mysql2');

// Create a connection to the MySQL database
const conferenceRoomDB = mysql.createConnection({
  host: 'your_host',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Connect to the database
conferenceRoomDB.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = {conferenceRoomDB}