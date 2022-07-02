//Let's go back to the BMI index! This time, we'll use objects to do the calculations!
//BMI = weight / height ** 2 = weight / (height * height) (weight in kg and height in meters)
//Your task:
//We have two friends - Jack and Mike
//1. For each of them, create an object with properties of its first name, last name, weight and height (Jack White and Mike Black).
//2. Create a BMI calculation method for each object to calculate BMI (same method for both objects). Store the BMI value in a property and also return it from the method.
//3. Log into the console who has the higher BMI, also the full name and the corresponding BMI. Example: "Jack White BMI (25.7) is higher than Mike Black (22.4)!"
//Test Data: Jack weight 79 kg, height 1.70 m. Mike weighs 91 kg and his height is 1.93 m.

JackObject = {
	firstName: 'Jack',
	lastName: 'White',
	weight: 79,
	height: 1.7,
	calcBMI: function () {
		return (this.BIMValue = Math.round(
			this.weight / (this.height * this.height)
		));
	},
};
MikeObject = {
	firstName: 'Mike',
	lastName: 'Black',
	weight: 91,
	height: 1.93,
	calcBMI: function () {
		return (this.BIMValue = Math.round(
			this.weight / (this.height * this.height)
		));
	},
};

if (JackObject.calcBMI() > MikeObject.calcBMI()) {
	console.log(
		`${JackObject.firstName} ${
			JackObject.lastName
		} BIM (${JackObject.calcBMI()}) is higher than ${
			MikeObject.firstName
		} ${MikeObject.lastName} (${MikeObject.calcBMI()})!`
	);
} else if (JackObject.calcBMI() < MikeObject.calcBMI()) {
	onsole.log(
		`${MikeObject.firstName} 
		${MikeObject.lastName} BIM (${MikeObject.calcBMI()}) is higher than ${
			JackObject.firstName
		} ${JackObject.lastName} (${JackObject.calcBMI()})!`
	);
} else {
	console.log(`They are have the same BMI(${JackObject.calcBMI()})!`);
}
