const {
    isAllCaps,
    countVowels,
    mergeAndSortArrays,
    findDuplicates,
} = require("./tdd_own_test_cases.js");

describe("isAllCaps", () => {
    test('should return true for "HELLO"', () => {
        expect(isAllCaps("HELLO")).toBe(true);
    });

    test('should return false for "Hello"', () => {
        expect(isAllCaps("Hello")).toBe(false);
    });
});

describe("countVowels", () => {
    test('should return 3 for "banana"', () => {
        expect(countVowels("banana")).toBe(3);
    });

    test('should return 0 for "sky"', () => {
        expect(countVowels("sky")).toBe(0);
    });
});

describe("mergeAndSortArrays", () => {
    test("should return [1, 2, 3, 4] for [3, 1] and [4, 2]", () => {
        expect(mergeAndSortArrays([3, 1], [4, 2])).toEqual([1, 2, 3, 4]);
    });
});

describe("findDuplicates", () => {
    test("should return [2, 4] for [1, 2, 2, 3, 4, 4]", () => {
        expect(findDuplicates([1, 2, 2, 3, 4, 4])).toEqual([2, 4]);
    });
});
