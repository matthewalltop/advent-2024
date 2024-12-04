import {adventOfCodeDayTwoPartOne, adventOfCodeDayTwoPartTwo} from "./advent-2";


describe('Advent of Code Day Two', () => {

    it('should calculate the number of valid lines', () => {
        const result = adventOfCodeDayTwoPartOne();
        expect(result).toBeTruthy();
        console.log(result); // 442 is the correct answer.
    });

    it('should calculate the number of valid lines with the problem dampener', () => {
        const result = adventOfCodeDayTwoPartTwo();
        expect(result).toBeTruthy();
        console.log(result);  // 493 is the correct answer.
    });

});