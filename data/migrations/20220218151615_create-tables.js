
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name').notNullable()
        tbl.string('project_description')
        tbl.integer('project_completed')
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id' )
        tbl.string('resource_name').unique().notNullable()
        tbl.string('resource_description')
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description').notNullable()
        tbl.string('task_notes')
        tbl.integer('task_completed')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .intTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable('project_resources' , tbl => {
        tbl.increments('project_resources_id')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .intTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .intTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        })
  
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
    
};
