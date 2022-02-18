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

// async function postProject(project) {
//     return db('projects')
//         .insert(project)
//         .then((['project_id']) => { // eslint-disable-line
//             return db('projects').where('project_id', project_id)
//         })

// }

function addProjects(project) {
    return db('projects')
      .insert(project)
      .then(([project_id]) => { // eslint-disable-line
        return db('projects').where('project_id', project_id )
      })
  }
  
module.exports = {
    getProjects,
}