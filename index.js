function scoreCalculator(arr) {
  // do work here
  if (arr.every((elem) => { return elem < 21 })) {
    if (arr.length === 0) {
      return -1;
    } else if (arr.every((elem) => { return elem < 5 })) {
      return (arr.length * 10) + 100;
    } else if (arr.every((elem) => { return elem > 10 })) {
      return 0;
    } else {
      let totalScore = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
          totalScore += 10;
        } else if (arr[i] >= 5 && arr[i] < 11) {
          totalScore += 5;
        }
      }
      return totalScore;
    }
  }
  return 0;
}
module.exports = scoreCalculator;
