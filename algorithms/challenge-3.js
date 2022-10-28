function sumMix(arr) {
  let sum = 0;
  let convertedNums = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      convertedNums = parseInt(arr[i]);
      sum += convertedNums;
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

module.exports = sumMix;
