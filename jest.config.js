/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  coveragePathIgnorePatterns: ['index.ts'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/test.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  reporters: ['default', 'jest-junit'],
  transform: {
    '^.+\\.md?$': 'markdown-loader-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'md']
};
