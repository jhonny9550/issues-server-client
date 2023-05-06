const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load env variables
dotenv.config();

// Define constants
const PORT = process.env.PORT || 3000;

// Create express app
const app = express();

// Config app
app.use(bodyParser.json({ extended: false }));

// Start server
app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
})
