const mongoose = require('mongoose');
const { TasksScheme } = require('./Tasks');

const WeekDaysScheme = new mongoose.Scheme({
	name: String,
	TasksList: [TasksScheme],
});

module.exports = mongoose.model('WeekDay', WeekDaysScheme);
