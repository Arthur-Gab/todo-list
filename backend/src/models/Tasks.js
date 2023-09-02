const mongoose = require('mongoose');

// H, M, L, VL
// deadline quantitifyed in days
const TasksScheme = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		priority: {
			tyep: String,
		},
		checked: {
			type: Boolean,
			default: false,
		},
		deadline: Date,
	},
	{
		timestamps: true,
	}
);

const Task = mongoose.model('Task', TasksScheme);

module.exports = {
	Task,
	TasksScheme,
};
