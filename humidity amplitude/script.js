'use strict';
// Problem 1
// We work on wheather forecast app, specifically on
// humidity feature for now. The most recent task
// is: "Calculate the humidity amplitude for given array
// of humidities for one day. Note, that sometimes
// there can be an error in data, caused by sensor
// error."

const humidities1 = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];
const humidities2 = [155, 30, 123];

// 1. understand the problem:
// - What is the humidity amplitude? this is the difference between min and max values in array?
// - How to calcilate min and max values in array?
// - What to do with error?

// 2. Divide into sub-problems
// - How to ignore data errors?
// - How to calculate min value in array?
// - How to calculate max value in array?
// - Subtract min from max and return the result

//const calculateHumiditiesAmplitude = function (humidities) {
//	let max = humidities[0];
//	let min = humidities[0];

//	for (let i = 1; i < humidities.length; i++) {
//		const currentHumidities = humidities[i];
//		if (typeof currentHumidities !== 'number') continue;
//		if (currentHumidities > max) {
//			max = currentHumidities;
//		}
//		if (currentHumidities < min) {
//			min = currentHumidities;
//		}
//	}

//	console.log(min, max);
//	return max - min;
//};

//const amplitude = calculateHumiditiesAmplitude(humidities);
//console.log(amplitude);

// Problem 2
// The function shoul get two arrays of humidities as paramenters
// 1. understand the problem:
// - Shoud we implement the same functionality for second array? - No, we should merge two arrays
// -
// -

// 2. Divide into sub-problems
// - How to merge 2 arrays?

const calculateHumiditiesAmplitudeTwoArrays = function (h1, h2) {
	const h3 = h1.concat(h2);
	//console.log(h3);
	let max = h3[0];
	let min = h3[0];

	for (let i = 1; i < h3.length; i++) {
		const currenth3 = h3[i];
		if (typeof currenth3 !== 'number') continue;
		if (currenth3 > max) {
			max = currenth3;
		}
		if (currenth3 < min) {
			min = currenth3;
		}
	}

	console.log(min, max);
	return max - min;
};

const amplitude = calculateHumiditiesAmplitudeTwoArrays(
	humidities1,
	humidities2
);
console.log(amplitude);
