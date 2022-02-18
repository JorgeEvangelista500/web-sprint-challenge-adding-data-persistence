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

router.post('/', (req, res, next) => {
    Project.addProjects(req.body)
        .then(project => {
            console.log(project)
            res.status(200).json(project)
        })
        .catch(next)
})


module.exports = router