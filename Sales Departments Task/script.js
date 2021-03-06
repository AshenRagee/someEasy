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
};

printBonus(Dept1FirstQuarter, Dept2FirstQuarter);
printBonus(Dept1SecondQuarter, Dept2SecondQuarter);
