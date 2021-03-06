"use strict";

//challenge 6

//partie 1
let scoreDauphin1 = [44, 23, 71];
let scoreKoalas1 = [65, 54, 49];
let scoreDauphin2 = [85, 54, 41];
let scoreKoalas2 = [23, 34, 27];

const calcAverage = (arrayScore) => {
	let somme = 0;
	let j = arrayScore.length;
	for (let i = 0; i < j; i++) {
		somme += arrayScore[i];
	}

	return somme / arrayScore.length;
};

let averageDauphin1 = calcAverage(scoreDauphin1);
let averageDauphin2 = calcAverage(scoreDauphin2);
let averageKoalas1 = calcAverage(scoreKoalas1);
let averageKoalas2 = calcAverage(scoreKoalas2);

console.log(averageDauphin1, averageDauphin2, averageKoalas1, averageKoalas2);

function checkWinner(averageDauphin, averageKoala) {
	if (averageDauphin > averageKoala) {
		return `L'équipe Dauphin gagne (${averageDauphin} vs ${averageKoala})`;
	} else {
		return `L'équipe Koalas gagne (${averageKoala} vs ${averageDauphin})`;
	}
}

console.log(checkWinner(averageDauphin1, averageKoalas1));
console.log(checkWinner(averageDauphin2, averageKoalas2));
