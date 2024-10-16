const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// Path to the database.json file
const filePath = path.join(__dirname, '../../data/database.json');

// Helper function to read the JSON database
const readDatabase = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

// GET all tasks
router.get('/', (req, res) => {
    const db = readDatabase();
    res.json(db.userData.tasks);
});

// POST a new task
router.post('/', (req, res) => {
    const { name, deadline, course } = req.body;
    if (!name || !deadline || !course ) {
        return res.status(400).json({ message: 'Please provide all required fields: name, deadline, and course'});
    }

    const newTask = {
        id: uuidv4(),
        name,
        deadline,
        course,
    };

    const db = readDatabase();
    db.userData.tasks.push(newTask);
    writeDatabase(db);
    res.status(201).json(newTask);
});

// PUT (Update) a task by it's unique ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, deadline, course } = req.body;
    const db = readDatabase();
    const index = db.userData.tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Task not found.' });
    }

    db.userData.tasks[taskIndex] = { id, name, deadline, course };
    writeDatabase(db);
    res.json(db.userData.tasks[taskIndex]);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const db = readDatabase();
    const index = db.userData.tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Task not found.' });
    }

    // Remove the task from the array
    const deletedTask = db.userData.tasks.splice(index, 1);
    writeDatabase(db);
    res.json({ message: 'Task deleted', task: deletedTask });
});

module.exports = router;


