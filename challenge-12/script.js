"use strict";

let maxTemp = [17, 21, 23];

function meteo(temp) {
	for (let i = 0; i < temp.length; i++) {
		console.log(`${temp[i]} dans ${i + 1} jour.`);
	}
}

meteo(maxTemp);

let maxTemp2 = [12, 5, -5, 0, 4];

meteo(maxTemp2);
