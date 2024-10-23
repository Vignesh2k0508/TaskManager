const express = require('express')
const router = express.Router()

const {getAllTasks,createTask,getTask,updateTask,deleteTask}= require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router

//NOTE: PATCH method which is used to update partially but PUT method used to replace the entire item