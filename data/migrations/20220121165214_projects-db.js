
exports.up = async function(knex) {
  await knex.schema.createTable('projects',table=>{
      table.increments('project_id');
        table.string('project_name',128).notNullable();
        table.string('project_description',128);
        table.integer('project_completed').defaultTo(0);
  })
  .createTable('resources',table=>{
      table.increments('resource_id')
  })
  .createTable('tasks',table=>{
      table.increments('task_id')
  })
  .createTable('project_resources',table=>{
      table.increments('pr_id')
  })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
