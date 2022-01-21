// build your `/api/tasks` router here
const Task = require('./model');
const router = require('express').Router();

//GET
router.get('/', (req, res) => {
    Task.getAll()
      .then(tasks => {
        res.json(tasks);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve fruits', error: err.message });
      });
  });

module.exports=router;