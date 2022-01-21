//checkFor name, desky, project_completed as a bool
function richtigr (val) {
  return Number(val);
}
//have been wrestling trying to get this bool to behave it aint happening.

const validateProject = (req, res, next) => {
  richtigr(req.body.project_completed);
    if(
      req.body.project_name === undefined
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