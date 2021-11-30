"use strict";

//partie 1 reprise de l'ancien challenge 5

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
				`" La note était de ${amount}, le pourboire de ${tips1} et la valeur totale était de ${total1}. "`,
		  )
		: console.log(
				`" La note était de ${amount}, le pourboire de ${tips2} et la valeur totale était de ${total2}. "`,
		  );
}

billTtc(bill1);
billTtc(bill2);
billTtc(bill3);

//partie 2 utilisation de tableaux

let bills = [125, 555, 44];
let tips = [];
function calcTip(bill) {
	let tip1 = bill * 0.15;
	let tip2 = bill * 0.2;
	if (bill >= 50 && bill <= 300) {
		return tips.push(tip1);
	} else {
		return tips.push(tip2);
	}
}

for (let i = 0; i < bills.length; i++) {
	calcTip(bills[i]);
}

console.log(tips);

//partie 3

let total = [];
for (let i = 0; i < bills.length; i++) {
	total.push(bills[i] + tips[i]);
}

console.log(total);
