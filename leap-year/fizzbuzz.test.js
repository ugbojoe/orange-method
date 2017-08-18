const expect = require('chai').expect;
const fizzBuzz = require("./fizzbuzz").fizzBuzz;

describe("fizzBuzz", function() {
  it("should return 1 for an input of 1", function () {
    const result = fizzBuzz(1);
    expect(result).to.equal(1);
  });
  it("should return Fizz for an input of 3", function () {
    const result = fizzBuzz(3);
    expect(result).to.equal('Fizz');
  });
  it("should return Fizz for an input of 5", function () {
    const result = fizzBuzz(5);
    expect(result).to.equal('Buzz');
  });
});

//   it("should return true for the year 1904", function () {
//     const result = isLeapYear(1904);
//     expect(result).to.equal(true);
//   });
//
//   it("should return false for the year 1900", function () {
//     const result = isLeapYear(1900);
//     expect(result).to.equal(false);
//   });
//
//   it("should return true for the year 2000", function () {
//     const result = isLeapYear(2000);
//     expect(result).to.equal(true);
//   });
// });
