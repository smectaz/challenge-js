"use strict";

//challenge 4 donkeys

//partie 1

const scoreDauphin1 = [96, 108, 89];
const scoreKoalas1 = [88, 91, 110];

const scoreDauphin2 = [97, 112, 101];
const scoreKoalas2 = [109, 95, 123];

const scoreDauphin3 = [97, 112, 101];
const scoreKoalas3 = [109, 95, 106];

function calculMoyenne(arrayScore) {
	let somme = 0;
	let j = arrayScore.length;
	for (let i = 0; i < j; i++) {
		somme += arrayScore[i];
	}
	return somme / arrayScore.length;
}
let moyenneScoreDauphin1 = Math.round(calculMoyenne(scoreDauphin1));
let moyenneScoreKoalas1 = Math.round(calculMoyenne(scoreKoalas1));

let moyenneScoreDauphin2 = Math.round(calculMoyenne(scoreDauphin2));
let moyenneScoreKoalas2 = Math.round(calculMoyenne(scoreKoalas2));

let moyenneScoreDauphin3 = Math.round(calculMoyenne(scoreDauphin3));
let moyenneScoreKoalas3 = Math.round(calculMoyenne(scoreKoalas3));

console.log(
	"La première moyenne des scores des dauphins est de " +
		moyenneScoreDauphin1 +
		".",
);

console.log(
	"La première moyenne des scores des koalas est de " +
		moyenneScoreKoalas1 +
		".",
);

console.log(
	"La deuxième moyenne des scores des dauphins est de " +
		moyenneScoreDauphin2 +
		".",
);

console.log(
	"La deuxième moyenne des scores des koalas est de " +
		moyenneScoreKoalas2 +
		".",
);

console.log(
	"La troisième moyenne des scores des dauphins est de " +
		moyenneScoreDauphin3 +
		".",
);

console.log(
	"La troisième moyenne des scores des koalas est de " +
		moyenneScoreKoalas3 +
		".",
);

//partie 2

function comparatorAverage(average1, average2) {
	if (average1 > average2) {
		console.log("Les Dauphins l'emporte ");
	} else if (average1 < average2) {
		console.log("Les Koalas l'emporte ");
	} else {
		console.log("Egalité ");
	}
}

console.log(comparatorAverage(moyenneScoreDauphin1, moyenneScoreKoalas1));
console.log(comparatorAverage(moyenneScoreDauphin2, moyenneScoreKoalas2));
console.log(comparatorAverage(moyenneScoreDauphin3, moyenneScoreKoalas3));

//partie 3

function victory(finalScore1, finalScore2) {
	if (finalScore1 > finalScore2) {
		if (finalScore1 >= 100) {
			console.log("Les Dauphins l'emporte");
		} else {
			return "Pas de gagnant";
		}
	}

	if (finalScore1 < finalScore2) {
		if (finalScore2 >= 100) {
			console.log("Les Koalas l'emporte");
		} else {
			return "Pas de gagnant";
		}
	}
	if (finalScore1 == finalScore2) {
		return "Egalité";
	}
}

console.log(victory(moyenneScoreDauphin1, moyenneScoreKoalas1));
console.log(victory(moyenneScoreDauphin2, moyenneScoreKoalas2));
console.log(victory(moyenneScoreDauphin3, moyenneScoreKoalas3));
