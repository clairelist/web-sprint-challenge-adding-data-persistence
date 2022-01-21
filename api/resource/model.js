// build your `Resource` model here

const lego = require('../../data/dbConfig.js');

function getAll() {
  return lego('resources');
}

function getById(id) {
  return lego('resources').where('resource_id', id).first();
}
//needed for the below to return the thing
async function create(resource) {
  const [id] = await lego('resources').insert(resource);
  return getById(id);
}

module.exports = {
  getAll,
  getById,
  create,
};
