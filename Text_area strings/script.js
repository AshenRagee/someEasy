'use strict';
//Write a program that takes a list of variable names written in underscore_case and converts them to camelCase.
//Input will come from a textarea html element inserted into the DOM (see code below to insert elements) and the transformation will happen when the button is clicked.

//Test data (for inserting into the textarea including spaces):

//underscore_case
//  first_name
//next_Variable
//   Calculate_AGE
//arrived_flight

//This output should appear (5 separate console.log outputs):
//underscoreCase
//firstName
//nextVariable
//calculateAge
//arrivedFlight

//Hints:
//1.	Remember which character defines a newline in a textbox
//2.	The solution should only work for a two-word variable like first_second

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
	const textAreaString = document.querySelector('textarea').value;

	const lines = textAreaString.split('\n');

	for (const line of lines) {
		const [firstWord, secondWord] = line.toLowerCase().trim().split('_');

		const output = `${firstWord}${secondWord.replace(
			secondWord[0],
			secondWord[0].toUpperCase()
		)}`;
		console.log(output);
	}
});
