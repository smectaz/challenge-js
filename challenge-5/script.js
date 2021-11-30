"use strict";

//challenge 5

//partie 1

const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

function billTtc(amount) {
	let tips1 = amount * 0.15;
	let tips2 = amount * 0.2;
	let total1 = amount + tips1;
	let total2 = amount + tips2;
	amount >= 50 && amount <= 300
		? console.log(
				'"' +
					"La note était de " +
					amount +
					", le pourboire de " +
					tips1 +
					" et la valeur totale était de " +
					total1 +
					'."',
		  )
		: console.log(
				'"' +
					"La note était de " +
					amount +
					", le pourboire de " +
					tips2 +
					" et la valeur totale était de " +
					total2 +
					'."',
		  );
}

console.log(billTtc(bill1));
console.log(billTtc(bill2));
console.log(billTtc(bill3));
