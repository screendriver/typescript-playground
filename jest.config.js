module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: '__tests__/tsconfig.json',
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/__tests__/**/*.spec.(js)'],
  testURL: 'http://localhost/',
};
