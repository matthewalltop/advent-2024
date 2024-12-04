import * as inputs from './advent-1.json';

const [inputOne, inputTwo]: [number[], number[]] = [inputs.inputOne, inputs.inputTwo];

export function adventOfCodeDayOnePartOne(): number {
    // Sort both inputs in ascending order.
    inputOne.sort((a, b) => a - b);
    inputTwo.sort((a, b) => a - b);
    
    // Create the diff array
    const diffs: number[] = new Array(inputOne.length).fill(0);
    for (let i = 0; i < inputOne.length; i++) {
        diffs[i] = Math.abs(inputOne[i] - inputTwo[i]);
    }
    
    // Could use prefix sum algo for this & take the last element, but seems unnecessary when we can just reduce with the same O(n) time complexity.
    const sum = diffs.reduce((a, b) => a + b);
    return sum;
}


export function adventOfCodeDayOnePartTwo(): number {
    const frequencies: Map<number, number> = new Map<number,  number>();
    for (const n of inputOne) {
        if (frequencies.has(n)) continue;
        frequencies.set(n,  0);
    }
    
    for (const n of inputTwo) {
        if (frequencies.has(n)) {
            frequencies.set(n, frequencies.get(n)! + 1);
        }
    }
    
    let totalSum = 0;
    for (const [key, value] of frequencies.entries()) {
        totalSum += key * value;
    }
    
    return totalSum;
}