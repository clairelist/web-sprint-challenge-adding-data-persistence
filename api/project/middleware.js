//checkFor name, desky, project_completed as a bool
// function richtigr (val) {
//   return Number(val);
// }
//have been wrestling trying to get this bool to behave it aint happening.

const validateProject = (req, res, next) => {

    if(
      req.body.project_name === undefined
    ){
      const error = {status: 400, message: "invalid project"}
      next(error);
    } else {
        next();
    }
  
  }

  // const checkCompleted = (req,res,next) => {
  //   if(typeof req.body.project_completed !== 'number')
  //   {
  //     richtigr(req.body.project_completed)
  //     next();
  //   }
  // }

  module.exports = {
      validateProject,
      
  }