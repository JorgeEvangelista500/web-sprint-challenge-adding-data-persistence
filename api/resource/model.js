const db = require('../../data/dbConfig')

// build your `Resource` model here

function getResources() {
    return db('resources')
}

module.exports = {
    getResources,
}