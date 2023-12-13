const { DataTypes } = require('sequelize');
//const logger = require('../config/logger');
const sequelize = require('../config/sequelize');
const Room = require("./room")

const RoomBooking = sequelize.define('room_bookings', {
  id:{
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  room_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  start_time: {
    type: DataTypes.DATE
  },
  end_time: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.STRING
  },
  is_recurring: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  created_by: {
    type: DataTypes.STRING,
    allowNull: false
  },
  updated_by: {
    type: DataTypes.STRING
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'conference_room_booking',
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false
});

try {
  RoomBooking.sync({ alter: false }).then(() => {
    console.log('conference_room_booking table created/updated successfully!');
  }).catch((error) => {
    console.error('Unable to create/update conference_room_booking table : ', error);
  });
} catch (error) {
  console.error('Unable to create/update conference_room_booking table: ', error);
}

module.exports = RoomBooking;
