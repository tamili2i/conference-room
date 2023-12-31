const { DataTypes } = require('sequelize');
//const logger = require('../config/logger');
const sequelize = require('../config/sequelize');
const RoomBooking = require("./room-booking");

const Room = sequelize.define('rooms', {
  room_id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  room_name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  capacity: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  floor: {
    allowNull: false,
    type: DataTypes.STRING
  },
  tv_availability: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  whiteboard_availability: {
    allowNull: false,
    type: DataTypes.BOOLEAN
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
  tableName: 'conference_room',
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false
});

Room.hasMany(RoomBooking, {
  foreignKey: "room_id"
});

RoomBooking.belongsTo(Room)

try {
  Room.sync({ alter: false }).then(() => {
    console.log('Room table created/updated successfully!');
  }).catch((error) => {
    console.error('Unable to create/update room table : ', error);
  });
} catch (error) {
  console.error('Unable to create/update room table: ', error);
}

module.exports = Room;
