// build your `Resource` model here

const lego = require('../../data/dbConfig.js');

function getAll() {
  return lego('projects');
}

function getById(id) {
  return lego('projects').where('project_id', id).first();
}
//needed for the below to return the thing
async function create(project) {
  const [id] = await lego('projects').insert(project);
  return getById(id);
}

module.exports = {
  getAll,
  getById,
  create,
};
