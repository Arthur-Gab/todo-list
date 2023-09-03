const mongoose = require('mongoose');

// Alta, Media, Baixa, Muito Baixa
const TasksScheme = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		weekDay: [String],
		time: Date,
		deadline: Date,
		priority: {
			tyep: String,
		},
		checked: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Task', TasksScheme);
