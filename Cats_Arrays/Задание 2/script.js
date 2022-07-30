'use strict';
//Вернемся к исследованию кошек Женей и Юлей. На этот раз они хотят преобразовать возраст кошек в человеческий возраст и вычислить средний возраст кошек в своем исследовании.
//Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

//1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.
//2. Исключает всех кошек младше 18 человеческих лет.
//3. Возвращает средний человеческий возраст для всех взрослых кошек.

//Вызовите функцию для обоих наборов тестовых данных.
//Тестовые данные:
//1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
//2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

const getAverageHumanAge = function (catAges) {
	const humanAgeCats = catAges.map((catAge) =>
		catAge <= 2 ? catAge * 10 : catAge * 7
	);

	const adultHumanAgeCats = humanAgeCats.filter((age) => age >= 18);

	const averageHumanAge =
		adultHumanAgeCats.reduce(function (acc, catAge) {
			return acc + catAge;
		}, 0) / adultHumanAgeCats.length;
	return console.log(averageHumanAge);
};
getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);
getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);
