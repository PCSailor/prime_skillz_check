// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
for (var i = 0; i < 5; i++) {
  checkz++
}
console.log(checkz);

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
var num = 1;
while (num <= 3) {
checkz = checkz - 2;
num++
}
console.log(checkz);

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
// defines a variable called numbers as an array with the index values equaling 0=1, 1=2, 3=4, 5=6, 6=7, 7=8.
var numbers = [1, 2, 3, 4, 5, 6, 7];
// defines a variable called total with a value of zero
var total = 0;
// for loop where i starts as zero, and if i is less than the length of the variable numbers length, 
// than the variable total will equal total plus the numbers array changing index of i.  Variable i increments plus one with every 
// cycle of the loop.
// The results of variable total will be displayed on the console.
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);
