import { readFileSync } from 'fs';
import { join } from 'path';

function readFileSyncLineByLine(filename: string): string[] {
    const contents = readFileSync(join(__dirname, filename), 'utf-8');
    const lines = contents.split(/\r?\n|\r|\n/);
    lines.forEach(line => console.log(line));
    return lines;
}

const lines = readFileSyncLineByLine('./advent-3.input.txt');

export function adventOfCodeDayTwoPartOne(): number {
    const isValid = (line: string) => {
        let entries: number[] = line.split(' ').map(x => +x);
        let right = 0;

        let descending = entries[0] > entries[1];
        for (let left = 0; left < entries.length; left++) {
            right++;

            // Difference > 3
            if (Math.abs(entries[right] - entries[left]) > 3) return false;

            // Numbers are neither increasing nor decreasing
            if (entries[left] === entries[right]) return false;

            // If sorted in descending order, the numbers should be decreasing.
            if (descending && entries[left] < entries[right]) return false;

            // If sorted in ascending order, the numbers should be increasing.
            if (!descending && entries[left] > entries[right]) return false
        }

        return true;
    };
    
    let result = 0;
    for (const line of lines) {
        if (isValid(line)) {
            result += 1;
        }
    }
    return result;
}

export function adventOfCodeDayTwoPartTwo(): number {
    // TODO: The validation logic is really the part one/part two distinction. This could be refactored, easily.
    const isValid = (line: string) => {
        let entries: number[] = line.split(' ').map(x => +x);
        let right = 0;

        let descending = entries[0] > entries[1];
        let invalidRemoved = false;

        for (let left = 0; left < entries.length; left++) {
            right++;

            if (Math.abs(entries[right] - entries[left]) > 3 ||
                entries[left] === entries[right] ||
                descending && entries[left] < entries[right] ||
                !descending && entries[left] > entries[right]
            ) {
                if (invalidRemoved) {
                    return false;
                } else {
                    invalidRemoved = true;

                    // Skip over the invalid entry & continue.
                    left = right + 1;
                    right += 1;
                }
            }
        }

        return true;
    };
        let result = 0;
        for (const line of lines) {
            if (isValid(line)) {
                result += 1;
            }
        }
        return result;
}
