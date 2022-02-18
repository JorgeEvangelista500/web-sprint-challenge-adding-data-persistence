// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    const results = await db('tasks')

    const updatedResults = results.map(res => {
        return {
       ...res, task_completed: res.task_completed === 0 ? false: true}
   })

   return updatedResults;
}

module.exports = {
    getTasks,
}