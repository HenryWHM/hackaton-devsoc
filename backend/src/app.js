const express = require('express');
const tasksRouter = require('./routes/tasks');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Tasks routes
app.use('/api/tasks', tasksRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
