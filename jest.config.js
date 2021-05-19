module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "\\.(js|jsx)?$": "babel-jest",
    },
    testMatch: ["**/index.test.js"],
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["/node_modules/", "/public/"],
    setupFilesAfterEnv: ["<rootDir>/src/testSetup.js"],
    clearMocks: true,
    collectCoverageFrom: [
        "**/components/**/index.js",
        "**/features/**/index.js",
        "**/utils/**/index.js",
    ],
};
