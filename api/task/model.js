// build your `Resource` model here

const lego = require('../../data/dbConfig.js');

function getAll() {
  return lego('tasks');
}


module.exports = {
  getAll
};
