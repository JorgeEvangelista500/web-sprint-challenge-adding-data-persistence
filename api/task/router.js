// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})
router.post('/', (req, res, next) => {
    Task.addTask(req.body)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(next)
})
module.exports = router