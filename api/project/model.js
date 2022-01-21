// build your `Resource` model here

const lego = require('../../data/dbConfig.js');

function getAll() {
  return lego('projects');
}

function getById(id) {
  return lego('projects').where('project_id', id).first();
}
//needed for the below to return the thing
function create(project) { 
      return lego('projects').insert(project)
        .then(([id]) => {
          return lego('schemes').where('project_id',id).first(); //NOT an array ! first method fixes this
        })
}

module.exports = {
  getAll,
  getById,
  create,
};
