const { Router } = require('express');
const TasksController = require('./controllers/TasksController');

const routes = Router();

routes.post('/tasks', TasksController.store);
routes.get('/tasks', TasksController.index);
routes.patch('/tasks', TasksController.update);
routes.delete('/tasks', TasksController.destroy);

module.exports = routes;
