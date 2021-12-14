"use strict";

const cards = document.querySelector(".cards");

const animalsToAdopt = [
	{
		name: "Lucky",
		picture: "https://placekitten.com/200/287",
	},
	{
		name: "Symba",
		picture: "https://placekitten.com/200/139",
	},
	{
		name: "Léo",
		picture: "https://placekitten.com/200/90",
	},
	{
		name: "Milo",
		picture: "https://placekitten.com/200/194",
	},
	{
		name: "Charly",
		picture: "https://placekitten.com/200/179",
	},
];

function createCard(title, imageUrl) {
	const card = document.createElement("div");
	card.classList.add("card");
	cards.appendChild(card);

	const cardHeader = document.createElement("div");
	cardHeader.classList.add("card-header");
	card.appendChild(cardHeader);

	const cardImg = document.createElement("div");
	cardImg.style.backgroundImage = `url(${imageUrl})`;
	cardImg.classList.add("card-img");
	cardHeader.appendChild(cardImg);

	//partie 1
	const cardBody = document.createElement("div");
	cardBody.classList.add("card-body");
	card.appendChild(cardBody);

	// partie 2
	const cardTitle = document.createElement("h2");
	cardTitle.classList.add("card-title");
	cardTitle.textContent = `${title}`;
	cardBody.appendChild(cardTitle);

	// partie 3
	const cardButton = document.createElement("button");
	cardButton.classList.add("card-button");
	cardButton.textContent = "Adopt Now";
	cardBody.appendChild(cardButton);
}

//partie 4
for (let i = 0; i < animalsToAdopt.length; i++) {
	createCard(animalsToAdopt[i].name, animalsToAdopt[i].picture);
}
