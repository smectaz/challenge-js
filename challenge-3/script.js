"use strict";

//challenge 3 donkey

//exercice 1

const user1 = {
	name: "Bernard",
	height: 1.69,
	weight: 78,
	imc: imcCalculate(78, 1.69),
};

const user2 = {
	name: "Marcel",
	height: 1.95,
	weight: 92,
	imc: imcCalculate(92, 1.95),
};

function imcCalculate(userWeight, userHeight) {
	let imcUser = Math.round(userWeight / (userHeight * userHeight));
	return imcUser;
}

const bernardHasHigherImc = user1.imc > user2.imc;

console.log(bernardHasHigherImc);

//exercice 2

function compareImcString(imcUser1, nameUser1, imcUser2, nameUser2) {
	if (imcUser1 > imcUser2) {
		return `" ${nameUser1} a un IMC (${imcUser1}) plus élevé que ${nameUser2} (${imcUser2})"`;
	} else {
		return `" ${nameUser2} a un IMC (${imcUser2}) plus élevé que ${nameUser1} (${imcUser1})"`;
	}
}

console.log(compareImcString(user1.imc, user1.name, user2.imc, user2.name));

//exercice 3
function imcResult(imcUser, name) {
	if (imcUser < 22) {
		return `" ${name}: insuffisance pondérale "`;
	} else if (imcUser < 27) {
		return `" ${name}: poids correct "`;
	} else if (imcUser <= 32) {
		return `" ${name}: surpoids "`;
	} else if (imcUser <= 42) {
		return `" ${name}: obésité "`;
	} else if (imcUser > 43) {
		return `" ${name}: obésité sévère "`;
	}
}

console.log(imcResult(user1.imc, user1.name));
console.log(imcResult(user2.imc, user2.name));
