function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    // console.log("fizzbuzz");
    return "fizzbuzz";
  } else if (input % 3 === 0) {
    // console.log("fizz");
    return "fizz";
  } else if (input % 5 === 0) {
    // console.log("buzz");
    return "buzz";
  } else {
    // console.log(input);
    return input;
  }
}

module.exports = fizzBuzz;
