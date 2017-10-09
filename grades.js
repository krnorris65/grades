const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 74, 77]
const grades = {
    "A" : 0,
    "B" : 0,
    "C" : 0,
    "D" : 0,
    "F" : 0
} 

//Number of scores for each grade
for (let i = 0; i < scores.length; i++) {

    if(scores[i] > 90) {
        grades.A++;
    } else if(scores[i] > 80) {
        grades.B++;
    } else if(scores[i] > 70) {
        grades.C++;
    } else if(scores[i] > 60) {
        grades.D++;
    } else {
        grades.F++;
    }
}
console.log(grades);

//Lowest and Highest Scores
let numOfScores = 0;
for (let i = 0; i < scores.length; i++) {
    scores.sort();
    numOfScores = scores.length-1;
}
console.log("lowest score:", scores[0]);
console.log("highest score:", scores[numOfScores]);

//highest number of students received this grade
let mostNumOfGrades = 0;
let highestGradeCount;

for (key in grades) {
    let currentGradeCount = grades[key];

    if(currentGradeCount > mostNumOfGrades) {
        mostNumOfGrades = currentGradeCount;
        highestGradeCount = key;
    }
}

console.log("highest grade count:", highestGradeCount, "number of scores:", mostNumOfGrades);

//lowest number of students received this grade
let leastNumOfGrades = mostNumOfGrades;
let lowestGradeCount;

for (key in grades) {
    let currentGradeCount = grades[key];
    
    if(currentGradeCount < leastNumOfGrades) {
        leastNumOfGrades = currentGradeCount;
        lowestGradeCount = key;
    }
}

console.log("lowest grade count:", lowestGradeCount, "number of scores:", leastNumOfGrades);