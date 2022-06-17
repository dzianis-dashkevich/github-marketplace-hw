import { sum } from "../src/utils.js";

describe('sum', () => {
    it('should add 2 digits', () => {
        expect(sum(2, 2)).toBe(4);
    });
});