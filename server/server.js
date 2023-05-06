const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const AppRouter = require('./router/router');

// Load env variables
dotenv.config();

// Define constants
const PORT = process.env.PORT || 3000;

// Create express app
const app = express();

// Config app
app.use(bodyParser.json({ extended: false }));

// Set server router
app.use(AppRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
})
