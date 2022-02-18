
// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResources() {
    return db('resources')
}
function addResource(resource) {
    return db('resources')
      .insert(resource)
      .then(([resource_id]) => { 
        const results = db('resources').where('resource_id', resource_id ).first()
        return results
      })
  }


module.exports = {
    getResources,
    addResource,
}