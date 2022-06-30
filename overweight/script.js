<<<<<<< HEAD:script.js
const userWeight = prompt('What is your weight?(kg)');
const userHight = prompt('What is your hight?(m)');
let userOverWeightIndex = userWeight / Math.pow(userHight, 2);
console.log(userOverWeightIndex);
if (userOverWeightIndex >= 25) {
	alert('You are overweight');
} else {
	alert("You aren't overweight, nice!");
}
=======
const userWeight = prompt('What is your weight?(kg)');
const userHight = prompt('What is your hight?(m)');
let userOverWeightIndex = userWeight / Math.pow(userHight, 2);
console.log(userOverWeightIndex);
if (userOverWeightIndex >= 25) {
	alert('You are overweight');
} else {
	alert("You aren't overweight");
}
>>>>>>> 4839626d3cc4fe5681d676d3bd42424fa3131320:overweight/script.js
