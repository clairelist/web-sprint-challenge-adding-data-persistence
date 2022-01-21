// build your `/api/resources` router here
//DATA section
const Project = require('./model');
const router = require('express').Router();

//GET
router.get('/', (req, res) => {
    Project.getAll()
      .then(projects => {
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve projects!', error: err.message });
      });
  });

//POST
router.post('/', (req, res) => {
    Project.create(req.body)
      .then(newProject => {
        res.status(201).json(newProject);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create that PROJECT!',error:err.message});
      });
  });
  

module.exports = router;