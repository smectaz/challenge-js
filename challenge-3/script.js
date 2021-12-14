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
		console.log(
			'" ' +
				nameUser1 +
				" a un IMC (" +
				imcUser1 +
				") plus élevé que " +
				nameUser2 +
				" (" +
				imcUser2 +
				")." +
				' "',
		);
	} else {
		console.log(
			'" ' +
				nameUser2 +
				" a un IMC (" +
				imcUser2 +
				") plus élevé que " +
				nameUser1 +
				" (" +
				imcUser1 +
				")." +
				' "',
		);
	}
}

console.log(compareImcString(user1.imc, user1.name, user2.imc, user2.name));

//exercice 3

if (user1.imc < 22) {
	console.log('"' + user1.name + ": insuffisance pondérale" + '"');
}
if (22 <= user1.imc && user1.imc <= 27) {
	console.log('"' + user1.name + ": poids correct" + '"');
}
if (28 <= user1.imc && user1.imc <= 32) {
	console.log('"' + user1.name + ": surpoids" + '"');
}
if (33 <= user1.imc && user1.imc <= 42) {
	console.log('"' + user1.name + ": obésité" + '"');
}
if (user1.imc > 43) {
	console.log('"' + user1.name + ": obésité sévére" + '"');
}
