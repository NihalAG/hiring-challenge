module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'ts'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['*.test.(ts|js)'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  };
  