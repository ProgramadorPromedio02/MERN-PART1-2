const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors()); // Va poder enviar y recibir datos
app.use(express.json());

// routes
app.use('/api/users', require('./routes/users.js'));
app.use('/api/notes', require('./routes/notes.js'));

module.exports = app;
