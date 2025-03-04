/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};