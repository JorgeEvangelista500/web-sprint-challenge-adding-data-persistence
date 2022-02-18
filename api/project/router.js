// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

module.exports = router