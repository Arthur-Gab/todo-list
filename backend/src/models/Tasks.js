const mongoose = require('mongoose');

// Alta, Media, Baixa, Muito Baixa
const TasksScheme = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	priority: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
		default: null,
	},
	checked: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model('Task', TasksScheme);
