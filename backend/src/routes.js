const { Router } = require('express');
const TasksController = require('./controllers/TasksController');

const routes = Router();

routes.post('/tasks', TasksController.store);

module.exports = routes;
