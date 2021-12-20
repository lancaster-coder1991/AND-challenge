/**
 * The following is the function where the solution shall be written
 */

function solution(input) {
  if (typeof input !== "string" || !input.match(/\d/g))
    throw "Wrong argument type provided: please only provide a string that includes integers";

  const inputStrIntoNumsArr = input.split("").filter((char) => char.match(/\d/));

  const findSiblings = (numArray) => {
    if (numArray.length < 2) return [numArray];
    let firstChar = numArray[0];
    let numArrangements = [];
    let lowerArrangements = findSiblings(numArray.slice(1));
    for (let i = 0; i < lowerArrangements.length; i++) {
      let lowerArrangement = lowerArrangements[i];
      for (let j = 0; j <= lowerArrangement.length; j++) {
        let beforeChar = lowerArrangement.slice(0, j);
        let afterChar = lowerArrangement.slice(j);
        numArrangements.push(beforeChar + firstChar + afterChar);
      }
    }
    return numArrangements;
  };

  const siblings = findSiblings(inputStrIntoNumsArr);
  const sortedAndJoinedSiblings = siblings.sort((a, b) => b - a).join(",");

  return sortedAndJoinedSiblings;
}

// some example inputs
// console.log(solution("326")); // expected ouput 632,623,362,326,263,236
// console.log(solution("A 3B2 C6D")); // expected ouput 632,623,362,326,263,236

module.exports = { solution };
