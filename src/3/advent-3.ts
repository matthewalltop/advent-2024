import { readFileSync } from 'fs';
import { join } from 'path';

function readInputFile(filename: string): string {
    const contents = readFileSync(join(__dirname, filename), 'utf-8');
    return contents;
}

const input = readInputFile('./advent-3.input.txt');

export function adventOfCodeDayThreePartOne(): number {
    const checkForValidMult = (startIndex: number) => {
        let left = startIndex,
            right = startIndex;
        
        
        return -1;
    };
    
    let left = 0,
        right = 0;
    
    
    
    
    
    let result = 0;
    
    
    return result;
};