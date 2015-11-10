var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  if (number % 3 === 0) {
    return "fizz";
  }
  else {
    return number;
  }
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  if (number % 5 === 0) {
    return "buzz";
  }
  else {
    return number;
  }
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  if (number % 15 === 0) {
    return "fizzbuzz";
  }
  else {
    return number;
  }
};
