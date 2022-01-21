//checkFor name, desky, project_completed as a bool

const validateProject = (req, res, next) => {
   
    if(
      req.body.project_name === undefined
    ){
      const error = {status: 400, message: "invalid project"}
      next(error);
    } else if (
        req.body.project_completed===false
        ){
            req.body.project_completed === 0;
            next();
        }
            else {
        next();
    }
  
  }

  module.exports = {
      validateProject
  }