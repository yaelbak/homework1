//Write a JavaScript program that prompts the user to enter a number 
//and checks whether the number is positive, negative, or zero.

var input = Number(prompt("type a number"))

if (input === 0) {
    console.log('the number is: ' + input)
} else if (input % 2 === 0) {
    console.log('the number is positive')
} else {
    console.log('the number is negative')
}

//Write a JavaScript program that prompts the user to enter two numbers and checks whether they are equal or not
let input1 = prompt("type 2 numbers separated by a space")
const num = input1.split(" ")
if (num[0] === num[1]) {
    console.log('the numbers are equal')
}else {
    console.log('the numbers are not equal')
}

//Write a JavaScript program to check whether a given string is empty or not.
var word = ''
if (word === '') {
    console.log('the string is empty')
}else {
    console.log('the string is not empty')
}

//Write a JavaScript program that prompts the user to enter a temperature in Celsius 
//and converts it to Fahrenheit. The formula to convert Celsius to Fahrenheit is F = (C * 1.8) + 32.
var Celsius = Number(prompt('enter temperature in Celsius'))
console.log((Celsius*1.8) +32)

//Write a JavaScript program that prompts the user to enter three numbers and finds the largest of them.
var input2 = prompt("type 3 numbers")
console.log('the largest number is: '+ Math.max(...input2))

//Write a JavaScript program that prompts the user to enter a character and checks whether it is a vowel or not.
var character = prompt("type a character")
if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
    console.log(character + ' is a charater')
}else {
    console.log(character + ' is not a charater')
}

//Write a JavaScript program that prompts the user to enter a year and checks whether it is a leap year or not.
var year= prompt("type a year")
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 == 0) {
            console.log(year + ' is a leap year')
        }
        else{
            console.log(year + ' is not a leap year')
        }
    }
    else{
        console.log(year + ' is a leap year')
    }
}else {
    console.log(year + ' is not a leap year')
}

//Write a JavaScript program that prompts the user to enter a number between 1 and 7 and displays the 
//corresponding day of the week.
var day =  prompt("type a number between 1 -7")
var daysArr = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
 console.log(daysArr[day - 1])

//Write a JavaScript program that prompts the user to enter two numbers and checks whether the 
//first number is divisible by the second number.
var seperate =  prompt("type two numbers")
var first = (seperate.split("")[0])
var second = (seperate.split("")[1])
if (first % second == 0){
    console.log(first + ' is divisible by '+ second)
}else{
    console.log(first + ' is not divisible by '+ second)
}

//Write a JavaScript program that takes a number as input and checks whether it is a perfect square or not.
var square = Number(prompt("enter a number"))
var check = Math.sqrt(square)
if (check  == Math.round(check) ) {
    console.log(square+ ' is a perfect square')
}else{
    console.log(square+ ' is not a perfect square')
}

