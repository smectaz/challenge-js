"use strict";

//challenge 6

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
