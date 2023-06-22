"use strict";
//! let username = "wayungi"
//! console.log(username)
let gnl_zamba = {
    name: 'zamba',
    genre: ['luga flow', 'street'],
    albums: [2011, 'katwa'],
    facts: ['zamba', 1987, true]
};
//Enums
// example of A level grading system
var Grades;
(function (Grades) {
    Grades[Grades["O"] = 0] = "O";
    Grades[Grades["F"] = 1] = "F";
    Grades[Grades["E"] = 2] = "E";
    Grades[Grades["D"] = 3] = "D";
    Grades[Grades["C"] = 4] = "C";
    Grades[Grades["B"] = 5] = "B";
    Grades[Grades["A"] = 6] = "A";
})(Grades || (Grades = {}));
console.log(Grades.O);
