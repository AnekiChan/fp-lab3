function getDivisibleValues(values: number[], divisor: number): number[] {
    return values.filter((val) => val % divisor === 0);
}

function concatenateText(items: string[], separator: string): string {
    return items.join(separator);
}

function orderByField<T, K extends keyof T>(list: T[], field: K): T[] {
    const copy = [...list];
    copy.sort((itemA, itemB) => {
        const aVal = itemA[field];
        const bVal = itemB[field];
        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
        return 0;
    });
    return copy;
}

function logBeforeExecution<T extends (...args: any[]) => any>(callback: T): T {
    return function (...args: Parameters<T>): ReturnType<T> {
        const name = (callback as any).name || "unnamed";
        console.log(`Invoking function "${name}" with:`, args);
        const output = callback(...args);
        console.log(`Output of "${name}":`, output);
        return output;
    } as T;
}

const dataSet = [1, 10, 15, 20, 22, 25, 34, 40];
const phrases = ["I'm", "sorry", "I", "didn't", "send", "the", "lab", "on", "time", "(T-T )"];
const people = [
    { username: "Tom", score: 88 },
    { username: "Anna", score: 92 },
    { username: "Mike", score: 75 },
];

const divisibleBy5 = getDivisibleValues(dataSet, 5);
console.log("Divisible by 5:", divisibleBy5);

const combinedText = concatenateText(phrases, "_");
console.log("Combined text:", combinedText);

const rankedPeople = orderByField(people, "score");
console.log("Ranked by score:", rankedPeople);

const loggedDivisibleCheck = logBeforeExecution(getDivisibleValues);
const logOutput = loggedDivisibleCheck(dataSet, 10);
console.log("Log output:", logOutput);
