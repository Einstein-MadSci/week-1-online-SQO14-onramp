function calculateGrade(marks) {
  let numberOfGrades = marks.length;
  let totalOfGrades = 0;
  let gradesAverage = 0;
  for (let i = 0; i < marks.length; i++) {
    totalOfGrades += marks[i];
  }
  gradesAverage = Math.floor(totalOfGrades / numberOfGrades);

  if (gradesAverage >= 1 && gradesAverage <= 49) {
    // console.log("F");
    return "F";
  } else if (gradesAverage >= 50 && gradesAverage <= 59) {
    // console.log("E");
    return "E";
  } else if (gradesAverage >= 60 && gradesAverage <= 69) {
    // console.log("D");
    return "D";
  } else if (gradesAverage >= 70 && gradesAverage <= 79) {
    // console.log("C");
    return "C";
  } else if (gradesAverage >= 80 && gradesAverage <= 89) {
    // console.log("B");
    return "B";
  } else {
    // console.log(gradesAverage, "A");
    return "A";
  }
}

module.exports = calculateGrade;
