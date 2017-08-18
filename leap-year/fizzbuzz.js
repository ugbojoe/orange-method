exports.fizzBuzz = function(n) {
  if (n % 21 === 0) {
    return 'FizzBuzz';
  }
  else if (n % 3 === 0) {
    return "Fizz";
  }
  else if (n % 7 === 0) {
    return 'Buzz';
  }
  else {
    return n;
  }
}

// function playFizzBuzz(min, max) {
//   for (var i=min; i<=max; i++) {
//     console.log(fizzBuzz(i));
//   }
// }
//
// playFizzBuzz(1, 100);
