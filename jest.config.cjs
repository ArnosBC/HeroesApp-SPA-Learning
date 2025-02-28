module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
