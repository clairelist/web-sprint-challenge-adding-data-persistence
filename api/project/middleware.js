//checkFor name, desky, project_completed as a bool

//have been wrestling trying to get this bool to behave it aint happening.

const validateProject = (req, res, next) => {
  console.log(typeof req.body.project_completed)
    if(
      req.body.project_name === undefined
    ){
      const error = {status: 400, message: "invalid project"}
      next(error);
    } else {
        next();
    }
  
  }

  // function richtigr (val) {
  //   return Number(val);
  // }
  // const checkCompleted = (req,res,next) => {
  //   console.log('check completed',req.body)
  //   let thing = req.body.project_completed;
  //   if(typeof (thing) !== 'number')
  //   {
  //     richtigr(thing)
  //     next();
  //   }
  // }
  //none of that worked, so it is commented out til I can study more...

  module.exports = {
      validateProject,
      
  }