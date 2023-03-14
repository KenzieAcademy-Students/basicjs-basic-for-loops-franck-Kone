// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

/***********************/
/* For Loops           */
/***********************/

// ----------------------------------------------------------------------------------------------
console.log("Exercise One"); // Do not modify the lines like this before each exercise, these are to make the console output more readable :)
// - Change the following loop.
//   The loop below will run twice, logging 0 and 1 to the console.
//   Modify the loop so that it runs 10 times, logging 0 to 9 to the console.
//
// Write your code here 👇

function kata1() {
for(let j = 0; j < 10; j++) {
    console.log(j)
}
}
kata1();

// ----------------------------------------------------------------------------------------------
console.log("Exercise Two");
// - Create another for loop
// - Make your loop count from 1 to 20, logging only every number to the console.
//   1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
//   (This should include the number 20, but not include the number 0)
//
// Write your code here 👇

function kata2() {
for( let item = 1 ; item <= 20; item++ ){
    console.log(item)
}
}
kata2();

// ----------------------------------------------------------------------------------------------
console.log("Exercise Three");
// - Create another for loop
// - Make your loop count from 2 to 20, logging only EVEN numbers to the console.
//   2 4 6 8 10 12 14 16 18 20
//   (This should include the number 20, and the number 2, but not include the number 0)
//
// Write your code here 👇

function kata3() {
for(let evenNumber = 2; evenNumber <= 20 ; evenNumber += 2 ){
    console.log(evenNumber)
}
}
kata3();

// ----------------------------------------------------------------------------------------------
console.log("Exercise Four");
// - Create another for loop
// - Make your loop count from -1 to -20, logging every number to the console.
//   -1 -2 -3 -4 -5 -6 -7 -8 -9 -10 -11 -12 -13 -14 -15 -16 -17 -18 -19 -20
//   (This should include the number -1 and the number -20, but not include the number 0)
//
// Write your code here 👇

function kata4() {
for(let negativeNumber = -1; negativeNumber > -21; negativeNumber--){
    console.log(negativeNumber)
}
}
kata4();

// ----------------------------------------------------------------------------------------------
console.log("Exercise Five");
// - Create another for loop
// - Make your loop count from -20 to -1, logging every number to the console.
//   -20 -19 -18 -17 -16 -15 -14 -13 -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
//   (This should include the number -20 and the number -1, but not include the number 0)
//
// Write your code here 👇

function kata5() {
for(increasingNegativeNumber = -20 ; increasingNegativeNumber <= -1; increasingNegativeNumber++){
    console.log(increasingNegativeNumber)
}
}
kata5();

// ----------------------------------------------------------------------------------------------
console.log("Exercise Six");
// - Create another for loop
// - Make your loop count from 20 to -20, logging only EVEN numbers to the console.
//   20 18 16 14 12 10 8 6 4 2 0 -2 -4 -6 -8 -10 -12 -14 -16 -18 -20
//   (This should include the number 20, the number -20, and the number 0)
//
// Write your code here 👇

function kata6() {
for( realEvenNumber = 20; realEvenNumber >= -20; realEvenNumber -= 2){
    console.log(realEvenNumber)
}
}
kata6();

// When you are done with all of the exercises, check your console output to make sure it
// matches the expected output of each exercise and remove any extraneous console.log()
// statements from your code.
