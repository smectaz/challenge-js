"use strict";

//challenge 4 donkeys
let scoreDauphin1 = [96, 108, 89];
let scoreKoalas1 = [88, 91, 110];

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
