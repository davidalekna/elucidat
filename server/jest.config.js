module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  testEnvironment: 'node',
  testRegex: 'src/.*\\.spec\\.ts$',
  setupFilesAfterEnv: ['<rootDir>/test-db-setup.js'],
  testPathIgnorePatterns: ['dist/'],
  transform: {
    '^.+\\.js?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  globals: {
    NODE_ENV: 'test',
  },
  restoreMocks: true,
};
