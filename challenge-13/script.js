"use strict";

/* 🏁 Exercice 1
Tâches :

Écrire une fonction ‘printGoals’ qui prends un nombre arbitraire de joueurs et qui écrit chacun d’eux dans la console , ainsi que le nombre total de buts. ???
L’équipe avec la probabilité la plus basse est celle la plus susceptible de gagner. Écrire dans la console quelle équipe a le plus de chance de gagner. ✓
 */

const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

//partie 1
let players1 = game.players[0];
let players2 = game.players[1];

//partie 2
let gkTeam1 = players1.shift();
let fieldPlayersTeam1 = [...players1];
let team = [gkTeam1, ...fieldPlayersTeam1];

//partie 3
let allPlayers = [...team, ...players2];

//partie 4
let players1Final = [...team, "Thiago", "Coutinho", "Perisic"];

//partie 5
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;

//partie 6
let play = game.players;

function printGoals() {
	for (let k = 0; k < 3; k++) {
		let i = Math.floor(Math.random() * 2);
		let j = Math.floor(Math.random() * 10);
		console.log(`Le joueur tirée au sort est ${j} : ${play[i][j]}.`);
	}
}
printGoals();

//partie 7
function probableWinner(partie) {
	let nameTeam1 = partie.team1;
	let nameTeam2 = partie.team2;
	if (team1 < draw && team1 < team2) {
		return nameTeam1;
	} else if (team2 < draw && team2 < team1) {
		return nameTeam2;
	} else {
		return "Draw";
	}
}
console.log(probableWinner(game));

// 🏁 exercice 2

//partie 1
for (let i = 0; i < game.scored.length; i++) {
	console.log(`But ${i + 1} :  ${game.scored[i]}`);
}

//partie 2
let probability = Object.values(game.odds);
let probLength = probability.length;
let averageTotal = 0;
for (let i = 0; i < probLength; i++) {
	averageTotal += probability[i];
}
console.log(averageTotal / probLength);

//partie 3
for (let i = 0; i < probLength; i++) {
	if (i == 1) {
		console.log("Probabilité d'égalité : " + probability[i]);
	} else {
		console.log(
			"Probabilité de victoire pour " +
				game[Object.keys(game.odds)[i]] +
				" : " +
				probability[i],
		);
	}
}

//partie 4
let nameScorers = game.scored;
const scorers = {};
for (let i = 0; i < nameScorers.length; i++) {
	if (scorers[nameScorers[i]]) {
		scorers[nameScorers[i]] += 1;
	} else {
		scorers[nameScorers[i]] = 1;
	}
}
console.log(scorers);

// 🏁 Exercice 3

const gameEvents = [
	[17, "⚽ GOAL"],
	[36, "🔁 Substitution"],
	[47, "⚽ GOAL"],
	[61, "🔁 Substitution"],
	[64, "🟨 Yellow card"],
	[69, "🟥 Red card"],
	[70, "🔁 Substitution"],
	[72, "🔁 Substitution"],
	[76, "⚽ GOAL"],
	[80, "⚽ GOAL"],
	[92, "🟨 Yellow card"],
];

let events = [];
for (let i = 0; i < gameEvents.length; i++) {
	if (!events.includes(gameEvents[i][1])) {
		events.push(gameEvents[i][1]);
	}
}

gameEvents.splice(4, 1);

console.log(
	`Un évènement est apparu en moyenne toutes les ${
		90 / gameEvents.length
	} minutes`,
);

for (let i = 0; i < gameEvents.length; i++) {
	if (gameEvents[i][0] <= 45) {
		console.log("[PREMIÈRE MI TEMP] " + gameEvents[i]);
	} else {
		console.log("[SECONDE MI TEMP] " + gameEvents[i]);
	}
}
