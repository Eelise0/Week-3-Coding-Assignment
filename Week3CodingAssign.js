
/*****************_______WEEK 3 CODING ASSIGNMENT - ELISE SCHMIDT______************************/

// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.//

ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// a.	Programmatically subtract the value of the first element in the //
//array from the value in the last element of the array (do not use numbers //
//to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). //
//Print the result to the console.//

console.log(ages[ages.length-1] - ages[0]);
console.log(ages);

// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).//

ages.push(29);
console.log(ages);
console.log(ages[ages.length-1] - ages[0]);

// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.//

console.log(ages);
let total = 0;

for (let i = 0; i < ages.length; i++) {
    total = total + ages[i];
}
console.log('Average age in ages array =  ' + (total / ages.length));

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.//

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

// a.	Use a loop to iterate through the array and calculate the average number of letters per name. //
//Print the result to the console.//

let x = 0;

for (let i = 0; i < names.length; i++) {
    x = x + names[i].length 
}
console.log('Average # of letters in each name for names array =  ' + (x / names.length));

// b.	Use a loop to iterate through the array again and concatenate all the names//

let c = '';
for (let i = 0; i < names.length; i++) {
    c = c + names[i] + ' ' ;
} console.log(c);

// 3.	How do you access the last element of any array?//

//Comment From Elise S - create a variable and save the last array item to it using length-1 and then print that to console.//
let last = names[names.length - 1];
console.log(last);

// 4.	How do you access the first element of any array?//

//Comment From Elise S -The zero index will always be the first element in the array so calling 0 and printing to console will work.//
console.log(names[0]);

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously //
// created names array and add the length of each name to the nameLengths array.//
// For example:

namesArray = ["Kelly", "Sam", "Kate"]
nameLengths = [5, 3, 4]


for (let i = 0; i < namesArray.length; i++) {
    nameLengths.push(namesArray[i].length);
}
console.log(nameLengths);
    

/* 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all 
the elements in the array. Print the result to the console.*/

let b = 0;
for (i = 0; i < nameLengths.length; i++) {
    b += nameLengths[i];
}
console.log(b);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns //
//the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, //
//I would expect the function to return ‘HelloHelloHello’).//

function hello(word, n) {
    let c = '';
     for (let i = 0; i < n; i++) {
        c += word
    }
        return c;
}
console.log(hello('Hello', 3));

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a //
//full name (the full name should be the first and the last name separated by a space).//

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('Elise', 'Schmidt'));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the //
//numbers in the array is greater than 100.//

function greaterThan(theArray) {
    let sum = theArray.reduce((accumulator, value) => {
        return accumulator + value;}, 0);
        if (sum > 100) {
            return true;
        } else {
            return false;
        }
        }
    console.log('Here ' + greaterThan(ages));

function greaterThan100 (arr1) {

}

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.//

function averageElement (a)  {
    let sum3 = 0;
    for (let i = 0; i < a.length; i++) {
        sum3 = sum3 + a[i];
      } 
      return sum3 / (a.length);
}
 console.log(averageElement(ages));


// 11.	Write a function that takes two arrays of numbers and returns true if the average//
// of the elements in the first array is  greater than the average of the elements in the second array.//

function isOneBiggerThanTwo2 (array1, array2) {
    return averageElement(array1) > averageElement(array2);
 }
 console.log(isOneBiggerThanTwo2([1, 2, 4, 99], [1, 5, 4, 12, 11]));

// function isOneBiggerThanTwo (array1, array2) {
//     let sum1 = 0;
//     for (let i = 0; i < array1.length; i++) {
//       sum1 = sum1 + array1[i];
//     }
//     let sum2 = 0;
//     for (let i = 0; i < array2.length; i++) {
//       sum2 = sum2 + array2[i];
//     }
//     let avg1 = sum1 / (array1.length);
//     let avg2 = sum2 / (array2.length);
//     if (avg1 > avg2) {
//       return true;
//     }
//   }
// console.log(isOneBiggerThanTwo([1, 2, 4, 99], [1, 5, 4, 12, 11]));

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, //
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.//

function willBuyDrink (isHotOutside, moneyInPocket) {
  if (isHotOutside = true && moneyInPocket > 10.50) {
    return true;
  }
}
console.log(willBuyDrink([true], [11]));

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.//

// My function below is a calculator to help me determine if I should take the time to study or not on any given day
// based on the number of hours slept the night prior and how many hours I worked that day. This is useful because
//if you try to study when you are very tired, there is a chance you will not retain the information. In these cases
//I should wait till a day where I get more sleep and work less hours. 

function tooTiredToStudy (hoursOfSleep, hoursOfWork) {
    if (hoursOfSleep <= 5.5 && hoursOfWork >= 10) {
        return "There's a good chance you will not retain new information because you are tired. Don't study today.";
    } else {
        return "You should have enough energy to study. Don't be lazy!";
    }
} 
console.log(tooTiredToStudy([12], [0]));
