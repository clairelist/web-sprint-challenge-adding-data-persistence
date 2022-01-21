// build your `/api/resources` router here
//DATA section
const Resource = require('./model');
const router = require('express').Router();

//GET
router.get('/', (req, res) => {
    Resource.getAll()
      .then(resources => {
        res.json(resources);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve fruits', error: err.message });
      });
  });

//POST
router.post('/', (req, res) => {
    Resource.create(req.body)
      .then(newResource => {
        res.status(201).json(newResource);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create that resource!',error:err.message});
      });
  });
  

module.exports = router;