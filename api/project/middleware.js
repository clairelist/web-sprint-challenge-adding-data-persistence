//checkFor name, desky, project_completed as a bool

const validateProject = (req, res, next) => {
    if(
      req.body.project_name === undefined ||
      typeof req.body.project_description === undefined ||
      !req.body.project_name.trim() ||
      typeof req.body.project_completed !== Boolean ||
      req.body.project_completed === undefined
    ){
      const error = {status: 400, message: "invalid project"}
      next(error);
    } else {
      next();
    }
  
  }

  module.exports = {
      validateProject
  }