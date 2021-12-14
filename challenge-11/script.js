"use strict";

/* Tâches :
Pour chacun, créer un objet avec des propriétés pour leurs prénom, poids et taille. ✓
Créer une méthode ‘calcBMI’ dans chacun des objets permettant de calculer l’IMC. Stockez la valeur calculée dans une propriété de l’objet et aussi la retourner dans la méthode.
Afficher dans la console qui a l’IMC le plus élevé de cette manière : “L’IMC de Bernard (20,2) est plus élevé que celui de Marcel (19,3)”
Données de test :
Données 1 : Bernard pèse 78kg et mesure 1,69m. Marcel pèse 92kg et mesure 1,95m.
Données 2 : Bernard pèse 95kg et mesure 1,88m. Marcel pèse 85kg et mesure 1,76m. */

const bernard = {
	weight: 78,
	height: 1.69,
	name: "Bernard",
	imc: undefined,

	imcCalc: function () {
		this.imc = Math.round(this.weight / (this.height * this.height));
		return this.imc;
	},
};

const marcel = {
	weight: 92,
	height: 1.95,
	name: "Marcel",
	imc: undefined,

	imcCalc: function () {
		this.imc = Math.round(this.weight / (this.height * this.height));
		return this.imc;
	},
};

function compareImc(person1, person2) {
	person1.imcCalc();
	person2.imcCalc();

	// this could be made dryer by figuring out who's got the higher IMC and then logging the text
	if (person1.imc > person2.imc) {
		return `L'IMC de ${person1.name} (${person1.imc}) est plus élevé que celui de ${person2.name} (${person2.imc})`;
	} else if (person1.imc < person2.imc) {
		return `L'IMC de ${person2.name} (${person2.imc}) est plus élevé que celui de ${person1.name} (${person1.imc})`;
	} else {
		return `${person1.name} et ${person2.name} ont le même IMC (${person1.imc})`;
	}
}

console.log(compareImc(bernard, marcel));

bernard.weight = 95;
bernard.height = 1.88;
marcel.weight = 85;
marcel.height = 1.76;

console.log(compareImc(bernard, marcel));
