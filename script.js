console.log("Hello world!");
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
//formula for BMI= mass/(height*height)
//mark BMI
const markBmi = markMass / (markHeight * markHeight);
console.log(markBmi);
//calculating johnBMI
const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);
console.log(markBmi > johnBMI);

//string and template literals
const firstName = "Nabeelah";
const lastName = "Ejibode";
const birthYear = 2018;
const year = 2022;
info = "I'm '+'firstName '+'lastName '+' 'I am' '+' (year-birthYear)";
console.log(info);
info = `I am ${firstName} ${lastName}, I am ${year - birthYear} years old`;
console.log(info);
//if else conditional statement
let age = 11;
let isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Ayo is old enough to drive a car ");
} else {
  console.log(`you are too young to drive, wait till next ${18 - age}years`);
}
//another if statement
let biirthYear = 1993;
let century;
if (biirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//second coding challenge
let markBMI = 28.3;
let johnnBMI = 23.9;
if (markBMI > johnnBMI) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}
// truthy values and falsy values
//falsy values are 0, '',undefined, NAN, null
let size = 0;
if (size) {
  console.log("you are too young!");
} else {
  console.log("you are now okay");
}
let width;
if (width) {
  console.log("hurray!");
} else {
  console.log("haaaa");
}

//equity in js == vs ===
const aage = "18";
if (aage === 18) console.log("you are now an adult strict");
if (aage == 18) console.log("you are now an adult loose");
const favourite = Number(prompt("what is your favourite number"));
console.log(favourite);
//but since favourite is a string,we need to convert itn to number
//const favourite = Numberr(prompt('what is your favourite number'));
if (favourite === 89) {
  console.log("cool! 89 is an amazing number");
} else if (favourite === 7) {
  console.log("okay,7 is also a cool number");
} else {
  console.log("number is not 89 0r 7");
}
//not equality operator
if (favourite !== 89) console.log("why not 89");
//basic boolean logic; the and, or & not operators
const hasDriversLicense = true;
const hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
if (hasDriversLicense && hasGoodVision) {
  console.log("yes,sarah can now drive");
} else if (hasDriversLicense || hasGoodVision) {
  console.log("sarah should wait a little bit more");
} else {
  console.log("someone else should drive");
}
//switch statement
const day = "monday";
switch (day) {
  case "monday":
    console.log("plan course structure");
    console.log("start coding immediately");
    break;
  case "tuesday":
  case "wednesday":
    console.log("continue your hifdh");
    break;
  default:
    console.log("not a valid day");
}
//using if else statement to solve the same problem above

if (day === "monday") {
  console.log("plan course structure");
} else if (day === "tuesday" || day === "wednesday") {
  console.log("continue your hifdh");
} else {
  console.log("not a valid day");
}
//difference between statements and expression.
//expresion produces value  whystatements dont
//the conditional(ternary) operator
const length = 40;
length >= 40
  ? console.log("I like to dink wine")
  : console.log("i like to drink water");
//another way
const drink = length >= 40 ? "wine" : "water";
console.log(drink);
//solving this using if else statement
let drink2;
if (length >= 40) {
  console.log("wine");
} else {
  console.log("water");
}
//another examples
const breadth = 90;
breadth <= 80
  ? console.log("you are really trying")
  : console.log("you need to work on it");
//the above can be shortened and stored in the variable as
const result = breadth <= 80 ? "trying" : "work on it";
console.log(result);
console.log(`l like to drink ${length >= 40 ? "wine" : "water"}`);
//coding challenge 4
/*steven wants to build a very simple tip calculator or whenever he goes eating in a resturant.
In his country,it is usual to tip 15% if the bill value is between 50 and 300.If the value is dif
the tip is 20%
1.your task is to calculate the tip, depending on the bill value.create a variable called 'tip' for
this.it is not allowed to use an if/else statement(If it is easier for you,you can start with if/else 
statement,and then try to convert it toa ternary operator).
2.print a sting to the console containing the bill value, the tip, and the final value(bill + tip).
example: 'the bill was275,the tip was 4,25, and the total value 316.25'
TEST DATA: Test for bill values 275, 40, and 430
*/
const bill = 40;
if (bill >= 50 && bill <= 300) {
  console.log("bill=0.15");
} else {
  console.log("bill=0.20");
}
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);
console.log(
  `the bill was ${bill},the tip was${tip} and the total value is${bill + tip}`
);
//functions
function logger() {
  console.log("I am a pharmacist");
}
logger();
logger();
logger();
logger();
//second example
function fruitProcessor(oranges, apples) {
  console.log(oranges, apples);
  const juice = `juice with ${oranges}oranges and ${apples}apples`;
  return juice;
}
fruitProcessor(2, 0); //this needs to be stored in a variable
const orangeJuice = fruitProcessor(2, 0);
console.log(orangeJuice);
const orangeAppleJuice = fruitProcessor(9, 8);
console.log(orangeAppleJuice);
//function decorations
function calAge(birthYear) {
  return 2022 - birthYear;
}
const age1 = calAge(1985);
console.log(age1);

//function expressions,u will not write function name here
const calcage2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcage2(1985);
console.log(age2);

//Arrow function
const calcage3 = (birthYear) => 2022 - birthYear;
const age3 = calcage3(1985);
console.log(age1, age2, age3);
//to calculate years left until retirement using arrow function,this involves more than a parameters
const ageLeftUntilRetirement = (birthYear) => {
  const realAge = 2022 - birthYear;
  const retirement = 60 - realAge;
  return retirement;
};
console.log(ageLeftUntilRetirement(1993));
/*first coding challenge on function
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4.
 Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
const average = (calcAverage1, calcAverage2, calcAverage3) =>
  (calcAverage1 + calcAverage2 + calcAverage3) / 3;
const dolphinFirstAvrScore = average(44, 23, 71);
const dolphinSecondAvrScore = average(85, 54, 41);
const koalasFirstAvrScore = average(65, 54, 49);
const koalasSecondAvrScore = average(23, 34, 27);
console.log(dolphinFirstAvrScore);
console.log(dolphinSecondAvrScore);
console.log(koalasFirstAvrScore);
console.log(koalasSecondAvrScore);

const checkWinner = (avgDolhphin, avgKoalas) => {
  if (avgDolhphin === 2 * avgKoalas || avgKoalas === 2 * avgDolhphin) {
    console.log(`hurray a team wins`);
  } else if (avgDolhphin >= 2 * avgKoalas) {
    console.log(`hurray,Dolphin's team wins ${avgDolhphin} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolhphin) {
    console.log(`hurray,Koalas's team wins ${avgKoalas} vs ${avgDolhphin}`);
  } else {
    console.log(`nobody wins`);
  }
};
console.log(checkWinner(60, 28));
//arrays
const friends = ["Zayd", "Nabeelah", "Sofiyyah"];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = "Azeez";
console.log(friends);
console.log(friends[2]);
const years = new Array(1993, 1994, 998, 2005, 2009, 2018);
console.log(years);
//check the shift,unshift,push,pop,index of and replaces methods in the final
//remember the tip calculator,use array to solve it  tet data are 125,555, and 44
const calctip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};
const bills = [125, 555, 44];
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
console.log(bills, tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
//object-a type of data structure
//you can retrieve data from object in no particular order,an advantage over arrays
//hence array is used fr structured data while object is used fr unstructured
const ibraheem = {
  firstName: "Ibraheem",
  lastName: "Ejibode",
  age: 2022 - 1993,
  birthYear: 1991,
  job: "pharmacist",
  state: "Osun",
  hasADriversLicense: "true",
  calcage: function (birthYear) {
    return 2022 - this.birthYear;
  },
};
console.log(ibraheem);
//to  retrieve data from object,dot or bracket can b used  as  seen below
console.log(ibraheem.firstName);
console.log(ibraheem["firstName"]);
//for this  bracket
const nameKey = "Name";
console.log(ibraheem["first" + nameKey]);
console.log(ibraheem["last" + nameKey]);

//now,using a  prompt keyword  with  bracket  notation to make ome uns
const intrestedIn = prompt(
  "what  do you  want to know about  Ibraheem ?Choose  between  firstname, lastName,age  and state"
);
console.log(intrestedIn);
//then,to get the actual value  of the ppty,backet notation usinf if else statement is required
if (ibraheem[intrestedIn]) {
  console.log(ibraheem[intrestedIn]);
} else {
  console.log(
    "wrong request! choose between firstName,  lastName, age, job, and  state"
  );
}
//how to add  element to object  using dot and bracket notation
ibraheem.height = 1.7;
ibraheem["email"] = "ibra@gmail.com";
console.log(ibraheem);
//use of this
console.log(ibraheem.calcage(1991));
console.log(ibraheem["calcage(1991)"]);
console.log(ibraheem.calcage());
//challenge
//write a string 'ibraheem is a 31 years old pharmacist and has a driver's license
console.log(
  `${ibraheem.firstName} is a ${ibraheem.calcage()} years old ${
    ibraheem.job
  } and has ${ibraheem.hasADriversLicense ? "a" : "no"} valid driver's license`
);

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
const john = {
  firstName: "John",
  lastName: "Smith",
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
};
john.calcBMI();
console.log(john.bmi);

//loops---looping through arrays using loop method
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
console.log(jonasArray);
for (let i = 0; i < 5; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
}
//however,if new element is added tothe array,the length of the array has to be gotten from the javascripy
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
}
const Year = [1982, 1985, 1987, 1991, 1995];
const Age = [];
for (i = 0; i < Year.length; i++) {
  Age.push(2022 - Year[i]);
}
console.log(Age);

//calculate the ages o these children in the year 2050,the ages shoud be in arrays
const dateOfBirth = [2017, 2018, 2019, 2022, 2025, 2027, 2029];
const newAge = [];
for (i = 0; i < dateOfBirth.length; i++) {
  newAge.push(2070 - dateOfBirth[i]);
}
console.log(newAge);

//calculate the area of the following given the length and  constant breadth of 2.3the following
const Length = [1.2, 2.3, 2.6, 3.5, 4.2, 4.5];
const area = [];
for (i = 0; i < Length.length; i++) {
  area.push(2.3 * Length[i]);
}
console.log(area);

//looping backwards and loops inside loop
const jonasarray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
for (let i = jonasarray.length - 1; i >= 0; i--) {
  console.log(i, jonasarray[i]);
}

//loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`=======starting exercise ${exercise}`);
  for (let rep = 0; rep < 6; rep++) {
    console.log(`lifting weight ${rep}`);
  }
}

//while loop
//using a while loop to write a lifting weight repetition 10 times
let rep = 1;
while (rep <= 10) {
  console.log(`lifting weight rep ${rep}`);
  rep++;
}
//while loop can also be used when you dont know the number of times to run a loop
//for example,rolling a dice until 6 is gotten,hence u dont need a counter
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is about to end..");
}

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
const Bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const Tips = [];
const Total = [];

for (i = 0; i < 10; i++) {
  const calctip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
  };

  Tips.push(calctip(Bills[i]));
  Total.push(Bills[i] + Tips[i]);
}
console.log(Tips);
console.log(Total);
//way of styling output into the console
console.log("%cHello, world", "color: blue; font-size: 40px");
