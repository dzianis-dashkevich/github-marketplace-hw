import { addTwo, sum } from "../src/utils.js";

describe('utils', () => {
    describe('sum', () => {
        it('should add 2 digits', () => {
            expect(sum(2, 2)).toBe(4);
        });
    });

    describe('addTwo', () => {
        it('should add 2 to any digit', () => {
            expect(addTwo(4)).toBe(6);
        });
    });
});
