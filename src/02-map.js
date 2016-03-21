'use strict';

const family = [
  { first: `Homer`, last: `Simpson` },
  { first: `Marge`, last: `Simpson` },
  { first: `Bart`, last: `Simpson` },
  { first: `Maggie`, last: `Simpson` },
  { first: `Lisa`, last: `Simpson` },
];

// We can't predict what is in this array before looping and adding items to it
const dirtyFirstNames = [];

// for (let i = 0; i < family.length; i++) {
//   dirtyFirstNames.push(family[i].first);
// }

family.forEach((person) => {
  dirtyFirstNames.push(person.first);
});

function getFirstNameFromPerson(person) {
  return person.first;
}

// Runs the getFirstNameFromPerson function on each item in the family array
// Builds a new array containing each returned value
// Does not change the original family array variable
const betterWay = family.map(getFirstNameFromPerson);
