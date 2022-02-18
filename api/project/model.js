// build your `Project` model here
const db = require('../../data/dbConfig')



async function getProjects() {
    const results = await db('projects')
    const updatedResults = results.map(res => {
         return {
        ...res, project_completed: res.project_completed === 0 ? false: true}
    })

    return updatedResults
      
 }

function addProjects(project) {
    return db('projects')
      .insert(project)
      .then(async ([project_id]) => { 
        const results = await db('projects').where('project_id', project_id ).first()
        return {...results, project_completed: results.project_completed === 0 ? false: true}
      })
  }

  
module.exports = {
    getProjects,
    addProjects,
}