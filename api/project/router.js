// build your `/api/resources` router here
//DATA section
const Project = require('./model');
const { validateProject } = require('./middleware');
//// note to future claire:: I really hope you don't have to encounter that bug again
//// but if you are looking here it means you DID !
//// since you exported the function in an object, you have to import it {here} like so, too.
//// that was nasty...
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
router.post('/', validateProject,(req, res, next) => { //eslint does NOT like this function, despite testing working LOL
    const project = req.body;

  Project.create(project)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(next)
  }); 
  
  router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      claireAdvice: 'Finding the real error is 90% of the bug fix',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;