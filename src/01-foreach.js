'use strict';

const students = [
  `Marcus`,
  `Josh`,
  `John Adam`,
  `Anders`,
  `Dan`,
  `Nick`,
  `Emily`,
  `Boone`,
  `Stef`,
  `Jonathan`,
];

function logItOut(a, index) {
  if (index >= 5) {
    return;
  }

  console.log(a);
}

// Runs the `logItOut` function for each item in the students array
// sets the current item as the first argument
// forEach has no concept of a "break" statement
students.forEach(logItOut);

// Same as the above
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

logItOut(`foo`);
