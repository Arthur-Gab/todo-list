const Task = require('../models/Tasks');

/* 
	index (mostrar uma lista), show (mostrar somente 1), 
	store (criar), update (alterar), destroy (deletar)
 */
function validarDiasSemana(diasSemana) {
	const nomesDiasValidos = [
		'domingo',
		'segundo',
		'terca',
		'quarta',
		'quinta',
		'sexta',
		'sabado',
	];

	for (const dia of diasSemana) {
		if (!nomesDiasValidos.includes(dia.toLowerCase())) {
			return false; // Encontrou um nome de dia inválido
		}
	}

	return true; // Todos os nomes de dia são válidos
}

function validarFormatoHora(time) {
	// Expressão regular para validar o formato "HH:mm:ss"
	const regexHora = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;

	// Testa se a string corresponde à expressão regular
	return regexHora.test(time);
}

function validarPrioridade(priority) {
	if (priority === 'alto') {
		return true;
	} else if (priority === 'medio') {
		return true;
	} else if (priority === 'baixo') {
		return true;
	} else if (priority === 'muito_baixo') {
		return true;
	} else {
		return false;
	}
}

module.exports = {
	async store(req, res) {
		const { title, week_days, time, priority, deadline, description } = req.body;

		// Validar se estamos recebendo os campos e os formatos
		if (!title) {
			return res.status(400).send({ error: 'A tarefa precisa incluir um titulo' });
		}
		if (!validarDiasSemana(week_days)) {
			return res.status(400).send({
				error: 'É necessário no minimo um nome do dia de semana e escrito em pt-br',
			});
		}

		if (!validarFormatoHora(time)) {
			return res.status(400).send({
				error: 'O time precisa estar no formato hh:mm:ss',
			});
		}

		if (!validarPrioridade(priority)) {
			return res.status(400).send({
				error: 'A prioridade precisa estar entre alto, medio, baixo e muito_baixo',
			});
		}

		if (deadline) {
			if (!validarFormatoHora(deadline))
				return res.status(400).send({
					error: 'O cronometro precisa estar no formato hh:mm:ss',
				});
		}

		try {
			const task = await Task.create({
				title,
				week_days,
				time,
				priority,
				deadline,
				description,
			});

			return res.status(201).send(task);
		} catch (err) {
			return res.status(400).send({ error: err });
		}
	},
};
