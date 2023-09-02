const { Task } = require('../models/Tasks');

/* 
	index (mostrar uma lista), show (mostrar somente 1), 
	store (criar), update (alterar), destroy (deletar)
 */
module.exports = {
	async store(req, res) {
		console.log(req.body);

		res.status(201).send({
			message: 'Ok',
		});
	},
};
