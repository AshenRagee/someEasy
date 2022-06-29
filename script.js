const userWeight = prompt('What is your weight?(kg)');
const userHight = prompt('What is your hight?(m)');
let userOverWeightIndex = userWeight / Math.pow(userHight, 2);
console.log(userOverWeightIndex);
if (userOverWeightIndex >= 25) {
	alert('You are overweight');
} else {
	alert("You aren't overweight");
}
