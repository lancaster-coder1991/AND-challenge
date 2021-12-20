const { expect } = require("@jest/globals");
const { solution } = require("./SolutionAND");
const { factorial } = require("mathjs");

describe("solution", () => {
  it("should return an error is it is passed anything other than a string or a string with no integers", () => {
    expect(() => {
      solution(true);
    }).toThrow(
      "Wrong argument type provided: please only provide a string that includes integers"
    );
    expect(() => {
      solution("ABC");
    }).toThrow(
      "Wrong argument type provided: please only provide a string that includes integers"
    );
  });
  it("should not change the input argument", () => {
    const input = "ABC123";
    solution(input);
    expect(input).toBe("ABC123");
  });
  it("should return a comma-separated string of digits", () => {
    expect(typeof solution("ABC123")).toBe("string");
    expect(solution("ABC123")).toMatch(/^\d+(,\d+)*$/);
  });
  it("should return the string of separated digits in descending order", () => {
    const output = solution("123");
    const outputArray = output.split(",");
    const outputArrayNums = outputArray.map((numStr) => Number(numStr));
    expect(outputArrayNums).toBeSorted({ descending: true });
  });
  it("should return correct output for strings only containing integers", () => {
    expect(solution("12")).toBe("21,12");
    expect(solution("326")).toBe("632,623,362,326,263,236");
  });
  it("should return correct output for strings containing a mix of character types", () => {
    expect(solution("1A2C  D-")).toBe("21,12");
    expect(solution("A 3B2 C6D")).toBe("632,623,362,326,263,236");
  });
  it("it should always return a number of siblings equal to the factorial of input.length", () => {
    const output = solution("123456");
    const numberOfOutputSiblings = output.split(",").length;
    expect(numberOfOutputSiblings).toBe(factorial(6));
  });
});
