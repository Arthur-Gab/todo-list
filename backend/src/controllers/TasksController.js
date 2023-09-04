const Task = require('../models/Tasks');
const {
	validarDiasSemana,
	validarFormatoHora,
	validarPrioridade,
} = require('./util/tasksUtils');
/* 
	index (mostrar uma lista), show (mostrar somente 1), 
	store (criar), update (alterar), destroy (deletar)
 */

module.exports = {
	async store(req, res) {
		const { ...ITask } = req.body;

		// Validar se estamos recebendo os campos e os formatos
		if (!ITask.title) {
			return res.status(400).send({ error: 'A tarefa precisa incluir um titulo' });
		}
		if (!validarDiasSemana(ITask.week_days)) {
			return res.status(400).send({
				error: 'É necessário no minimo um nome do dia de semana e escrito em pt-br',
			});
		}

		if (!validarFormatoHora(ITask.time)) {
			return res.status(400).send({
				error: 'O time precisa estar no formato hh:mm:ss',
			});
		}

		if (!validarPrioridade(ITask.priority)) {
			return res.status(400).send({
				error: 'A prioridade precisa estar entre alto, medio, baixo e muito_baixo',
			});
		}

		if (ITask.deadline) {
			if (!validarFormatoHora(ITask.deadline))
				return res.status(400).send({
					error: 'O cronometro precisa estar no formato hh:mm:ss',
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
