function validateDate(time) {
	// Formatod esperado: 2023-09-06T18:38:25.142Z
	const regexDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

	return regexDate.test(time);
}

function validatePriority(priority) {
	if (priority === 'high') {
		return true;
	} else if (priority === 'medium') {
		return true;
	} else if (priority === 'low') {
		return true;
	} else if (priority === 'auto') {
		return true;
	} else {
		return false;
	}
}

module.exports = {
	validateDate,
	validatePriority,
};
