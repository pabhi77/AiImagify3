const path = require('path');
const express = require('express');//start express server
const dotenv = require('dotenv').config();// config evironment file and we can use variables of it
const port = process.env.PORT || 5000;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));// path in which frontend is stored

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
