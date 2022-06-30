//Sales Departments Task
//There are two sales departments - Dept 1 and Dept 2.
//You need to estimate quarter sales.
//To do this, you need to calculate the average sales per month in quarter for each department.

//1.	Create an arrow function getAverage to calculate the average sales per month in quarter.
//2.	Use the getAverage function to calculate the average for each department.
//3.	Create a function printBonus that takes the average sales of each department as parameters: printBonus(dept1AverSales, dept2AverSales). If sales of one department  are at least 30% higher than sales of another one, the function should calculate a bonus for the winner in percentage of that difference and log this to the console. For instance, if Dept 1 has 35% more sales, the function should log the following to the console: ‘Dept 1 will get a bonus of 35%’.
//4.	Use the printBonus function with two data sets below.

//The first quarter
//	January	February	March
//Dept 1	35467	29842	38501
//Dept 2	70533	50121	33899

//The second quarter
//	April	May	June
//Dept 1	50301	21984	19207
//Dept 2	72381	41562	29465

const getAverage = (month1, month2, month3) => {
	return (month1 + month2 + month3) / 3;
};

const Dept1FirstQuarter = getAverage(35467, 29842, 38501);
const Dept2FirstQuarter = getAverage(70533, 50121, 33899);
const Dept1SecondQuarter = getAverage(50301, 21984, 19207);
const Dept2SecondQuarter = getAverage(72381, 41562, 29465);

const printBonus = function (Dept1AverSales, Dept2AverSales) {
	if (Dept1AverSales > Dept2AverSales) {
		let Difference1 = Dept1AverSales - Dept2AverSales;
		let percentDifference1 = (Difference1 / Dept2AverSales) * 100;
		if (percentDifference1 >= 30) {
			console.log(
				`Dept 1 will get a bonus of ${Math.round(percentDifference1)}%`
			);
		} else {
			console.log('Have no bonus at this quarter');
		}
	} else if (Dept1AverSales < Dept2AverSales) {
		let Difference2 = Dept2AverSales - Dept1AverSales;
		let percentDifference2 = (Difference2 / Dept1AverSales) * 100;
		if (percentDifference2 >= 30) {
			console.log(
				`Dept 2 will get a bonus of ${Math.round(percentDifference2)}%`
			);
		} else {
			console.log('Have no bonus at this quarter');
		}
	}
	//else {
	//	return 'Have no bonus at this quarter';
	//}
};

printBonus(Dept1FirstQuarter, Dept2FirstQuarter);
printBonus(Dept1SecondQuarter, Dept2SecondQuarter);
