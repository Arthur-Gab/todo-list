function validarDiasSemana(diasSemana) {
	const nomesDiasValidos = [
		'domingo',
		'segunda',
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
	validarDiasSemana,
	validarFormatoHora,
	validarPrioridade,
};
