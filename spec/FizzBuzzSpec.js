describe('FizzBuzz', function () {
  var fizzbuzz = new FizzBuzz();

  it( "is divisible by three", function() {

    expect(fizzbuzz.isDivisibleByThree(3)).toEqual("fizz");

  });

  it( "is not divisible by three", function() {

    expect(fizzbuzz.isDivisibleByThree(4)).toEqual(4);

  });

  it( "is divisible by five", function() {

    expect(fizzbuzz.isDivisibleByFive(5)).toEqual("buzz");

  });

  it( "is not divisible by five", function() {

    expect(fizzbuzz.isDivisibleByFive(4)).toEqual(4);

  });

  it( "is divisible by fifteen", function() {

    expect(fizzbuzz.isDivisibleByFifteen(15)).toEqual("fizzbuzz");

  });

  it( "is not divisible by fifteen", function() {

    expect(fizzbuzz.isDivisibleByFifteen(4)).toEqual(4);

  });

});
