'use strict';

const nums = [-1, -2, -5, -10, -20, -6];

let oldWaySum = 0;

nums.forEach((current) => {
  oldWaySum += current;
});

function add(a, b) {
  return a + b;
}

// Runs the function add for each item in the nums array
// starting with a value of 0
// the first argument will be the last returned value
// the second argument to add will be the current item from the array
const reduceSum = nums.reduce(add, 0);

function max(a, b) {
  if (a > b) {
    return a;
  }

  return b;
}

// If no starting value is passed in, start with the first item from the array
// as the snowball and reduce as usual
const maxFromArray = nums.reduce(max);

const town = [
  { first: `Homer`, last: `Simpson` },
  { first: `Marge`, last: `Simpson` },
  { first: `Bart`, last: `Simpson` },
  { first: `Maggie`, last: `Simpson` },
  { first: `Lisa`, last: `Simpson` },
  { first: `Ned`, last: `Flanders` },
];

// Creates an object with property names for each last name
// and values of how many people had that last name
//
// {
//   Simpsons: 5,
//   Flanders: 1
// }
const census = town.reduce((snowball, person) => {
  if (snowball[person.last]) {
    snowball[person.last]++;
  } else {
    snowball[person.last] = 1;
  }

  return snowball;
}, {});
