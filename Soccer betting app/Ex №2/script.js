'use strict';

//Let's get on with our soccer betting app ⚽💰!
//Continue using the previously used game variable.
//1. Loop through the game.scored array and print the name of each player to the console along with the goal number (example: “Goal 1 - Kroos”)
//2. Use a loop to calculate the average odd and print it to the console
//3. Print 3 odds to the console, but formatted, exactly like this:
//Rate for REAL MADRID victory: 1.48
//Rate for draw: 2.53
//Rate for BARCELONA victory: 4.25
//Get team names directly from the game object, don't hardcode them
//4. Bonus: create an object called goalScorers that contains the names of the players who scored as properties and the number of goals as a value. In this game it will look like this:
//      {
//        Kroos: 1,
//        Benzema: 1,
//        Mingueza: 1
//}

const game = {
	team1: 'REAL MADRID',
	team2: 'BARCELONA',
	players: [
		[
			'Courtois',
			'Vazquez',
			'Militao',
			'Nacho',
			'Mendy',
			'Casemiro',
			'Valverde',
			'Modrich',
			'Kroos',
			'Vinicius',
			'Benzema',
		],
		[
			'Stegen',
			'Mingueza',
			'Araujo',
			'Lenglet',
			'Dest',
			'Busquets',
			'Jong',
			'Alba',
			'Messi',
			'Pedri',
			'Dembele',
		],
	],
	score: '2:1',
	scored: ['Kroos', 'Benzema', 'Mingueza'],
	date: 'Apr 10th, 2021',
	odds: {
		team1: 1.48,
		draw: 2.53,
		team2: 4.25,
	},
};

//1

for (const [index, name] of game.scored.entries()) {
	console.log(`Goal ${index + 1} - ${name}`);
}

//2

let summOddsValues = 0;
//let amountOddsValues = 0;
let odds = Object.values(game.odds);
for (const value of Object.values(game.odds)) {
	summOddsValues += value;
	//amountOddsValues++;
}
//console.log(summOddsValues / amountOddsValues);
const averageOdd = summOddsValues / odds.length;
console.log(averageOdd);

//3
//let realMadridString = '';
//for (let value of Object.values(game.team1)) {
//	realMadridString += value;
//}

//let drawString = Object.keys(game.odds);

//let barcelonaString = '';
//for (let value of Object.values(game.team2)) {
//	barcelonaString += value;
//}

//let valuesOdds = Object.values(game.odds);

//console.log(`Rate for ${realMadridString} victory: ${valuesOdds[0]}`);
//console.log(`Rate for ${drawString[1]}: ${valuesOdds[1]}`);
//console.log(`Rate for ${barcelonaString} victory: ${valuesOdds[2]}`);

for (const [teamName, odd] of Object.entries(game.odds)) {
	const mutableText =
		teamName === 'draw' ? 'draw' : `${game[teamName]} victory`;
	console.log(`Rate for ${mutableText}: ${odd}`);
}

//4

//let goalScorers = {};

//for (let valuesScored of Object.values(game.scored)) {
//	goalScorers[valuesScored] = 1;
//}

//console.log(goalScorers);

let goalScorers = {};

for (let player of Object.values(game.scored)) {
	goalScorers[player] ? goalScorers[player]++ : (goalScorers[player] = 1);
}

console.log(goalScorers);
