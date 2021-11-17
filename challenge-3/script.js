"use strict";

//challenge 3 donkey

//exercice 1

const user1 = {
	name: "Bernard",
	height: 1.69,
	weight: 78,
	imc: imcCalculate(78, 1.69, "Bernard"),
};

const user2 = {
	name: "Marcel",
	height: 1.95,
	weight: 92,
	imc: imcCalculate(92, 1.95, "Marcel"),
};

const user3 = {
	name: "Jean",
	height: 1.88,
	weight: 93,
	imc: imcCalculate(93, 1.88, "Jean"),
};

const user4 = {
	name: "Mark",
	height: 1.76,
	weight: 89,
	imc: imcCalculate(89, 1.76, "Mark"),
};

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

function imcCalculate(userWeight, userHeight, userName) {
	let imcUser = Math.round(userWeight / (userHeight * userHeight));
	return imcUser;
}
let imcUser1 = imcCalculate(user1.weight, user1.height, user1.name);
console.log("l'imc de " + user1.name + " est de " + imcUser1 + ".");

let imcUser2 = imcCalculate(user2.weight, user2.height, user2.name);
console.log("l'imc de " + user2.name + " est de " + imcUser2 + ".");

let imcUser3 = imcCalculate(user3.weight, user3.height, user3.name);
console.log("l'imc de " + user3.name + " est de " + imcUser3 + ".");

let imcUser4 = imcCalculate(user4.weight, user4.height, user4.name);
console.log("l'imc de " + user4.name + " est de " + imcUser4 + ".");

function compareImcBool(imc1, imc2) {
	if (imc1 > imc2) {
		let result1 = true;
		return result1;
	} else {
		let result1 = false;
		return result1;
	}
}

console.log(compareImcBool(user1.imc, user2.imc));

console.log(compareImcBool(user3.imc, user4.imc));

//exercice 2

function compareImcString(imcUser1, nameUser1, imcUser2, nameUser2) {
	if (imcUser1 > imcUser2) {
		console.log(
			nameUser1 +
				" a un imc de " +
				imcUser1 +
				" qui est plus élevé que celui de " +
				nameUser2 +
				" qui est de " +
				imcUser2 +
				".",
		);
	} else {
		console.log(
			nameUser2 +
				" a un imc de " +
				imcUser2 +
				" qui est plus élevé que celui de " +
				nameUser1 +
				" qui est de " +
				imcUser1 +
				".",
		);
	}
}

console.log(compareImcString(user1.imc, user1.name, user4.imc, user4.name));

//exercice 3
