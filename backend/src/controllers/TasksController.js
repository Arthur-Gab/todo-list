const Task = require('../models/Tasks');
const { validateDate, validatePriority } = require('./util/tasksUtils');
/* 
	index (mostrar uma lista), show (mostrar somente 1), 
	store (criar), update (alterar), destroy (deletar)
 */

module.exports = {
	async store(req, res) {
		const { ...ITask } = req.body;

		// Validar se estamos recebendo os campos e os formatos
		if (!ITask.title) {
			return res.status(400).send({ error: 'A task must have a title' });
		}
		if (!validateDate(ITask.date)) {
			return res.status(400).send({
				error: 'The date must be formatted in the ISO 8601 standard',
			});
		}

		if (!validatePriority(ITask.priority)) {
			return res.status(400).send({
				error: 'Priority needs to be between high, medium, low and auto',
			});
		}

		try {
			const task = await Task.create({
				...ITask,
			});

			return res.status(201).send(task);
		} catch (err) {
			return res.status(400).send({ error: err });
		}
	},

	async index(req, res) {
		try {
			const tasks = await Task.find();

			return res.status(200).send(tasks);
		} catch (err) {
			return res.status(400).send({ error: err });
		}
	},

	async update(req, res) {
		const { _id, ...ITask } = req.body;

		try {
			const updatedTask = await Task.findOneAndUpdate(
				{ _id },
				{ ...ITask },
				{
					returnOriginal: false,
				}
			);

			return res.status(201).send(updatedTask);
		} catch (err) {
			return res.status(400).send({ error: err });
		}
	},

	async destroy(req, res) {
		const { _id } = req.body;

		try {
			await Task.findOneAndDelete({ _id });

			return res.status(204).send();
		} catch (err) {
			return res.status(400).send({ error: err });
		}
	},
};
