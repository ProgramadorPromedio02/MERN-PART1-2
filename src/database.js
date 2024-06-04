const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : 'mongodb://localhost:27017/databasetest';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('DB is connected');
});
