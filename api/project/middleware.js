//checkFor name, desky, project_completed as a bool
const richtigr = (val) =>{
    if(val===false)
    
    val=0;
}
//in THEORY, this function takes the val and turns it into an bool, because the database does not have a bool datatype!
//in this logic, 'false' should equal 0 or the test should simply pass an int as default. You know. Like a sane programmer would.
const validateProject = (req, res, next) => {
    if(
      req.body.project_name === undefined
    ){
      const error = {status: 400, message: "invalid project"}
      next(error);
    } else if (
        req.body.project_completed === false
        ){
      richtigr(req.body.project_completed)
    } else {
        next();
    }
  
  }

  module.exports = {
      validateProject
  }