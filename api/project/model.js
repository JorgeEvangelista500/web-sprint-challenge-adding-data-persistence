// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    const results = await db('projects')
    
    
    // if (results.project_completed === 0) {
    // results.project_completed = false
    // } else {
    // results.project_completed = true
    // }

    const updatedResults = results.map(res => {
         return {
        ...res, project_completed: res.project_completed === 0 ? false: true}
    })

    return updatedResults
      
 }

function postProject(project) {
    return db('projects')
        .insert(project)

}

module.exports = {
    getProjects,
}