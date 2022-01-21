// build your `Resource` model here

const lego = require('../../data/dbConfig.js');

function getAll() {
  return lego('projects');
}

async function getById(id){
    const rows = await lego('projects AS pr')
                            .select('pr.project_name','pr.project_description','pr.project_completed')
                            .where(`pr.project_id`,id);
                      
          const resultr = {
            project_id: rows[0].project_id,
            project_name: rows[0].project_name,
            project_description: rows[0].project_description,
            project_completed: rows[0].project_completed
         
        }
          
          return resultr;
    }
        
// currently, above func is deprecated until I can figure it ou

 function create(project) { 
    return lego('projects').insert(project)
      .then(([id]) => {
        return lego('projects').where('project_id',id).first(); //NOT an array ! first method fixes this
      })
    }

module.exports = {
  getAll,
  getById,
  create,
};
