// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    const results = await db('tasks')
    .leftJoin('projects', 'tasks.project_id','projects.project_id')

    const updatedResults = results.map(res => {
        return {
       ...res, task_completed: res.task_completed === 0 ? false: true}
   })

   return updatedResults;
}
function addTask(task) {
    return db('tasks')
      .insert(task)
      .then(async ([task_id]) => { 
        const results = await db('tasks').where('task_id', task_id ).first()
        return {...results, task_completed: results.task_completed === 0 ? false: true}
      })
  }


module.exports = {
    getTasks,
    addTask,
}