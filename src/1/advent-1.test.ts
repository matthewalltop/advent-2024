import {describe, expect} from '@jest/globals';
import {adventOfCodeDayOnePartOne, adventOfCodeDayOnePartTwo} from './advent-1';

describe('Advent of Code Day One', () => {
    it('Should calculate distance in part 1', () => {
        let result = adventOfCodeDayOnePartOne();
        expect(result).toBeTruthy();
        console.log(result); // 3574690 - This is the correct answer.
    });

    it('should calculate sum of products of occurrence in part 2', () => {
        let result: number = adventOfCodeDayOnePartTwo();
        expect(result).toBeTruthy();
        console.log(result); // 22565391 - This is the correct answer.
    });
});