import * as inputs from './advent-1.json';

const [inputOne, inputTwo]: [number[], number[]] = [inputs.inputOne, inputs.inputTwo];

function adventOfCodeDayOne(): number {
    // Sort both inputs in ascending order.
    inputOne.sort((a, b) => a - b);
    inputTwo.sort((a, b) => a - b);
    
    // Create the diff array
    const diffs: number[] = new Array(inputOne.length).fill(0);
    for(let i = 0; i < inputOne.length; i++) {
        diffs[i] = Math.abs(inputOne[i] - inputTwo[i]);
    }
    
    // Could use prefix sum algo for this, but seems unnecessary when we can just reduce it.
   let sum = diffs.reduce((a, b) => a + b);
    
    
    return sum;
}


console.log(adventOfCodeDayOne());