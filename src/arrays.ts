/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], ...numbers.slice(-1)];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num) => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str) => {
        const parsedInt = parseInt(str);
        return isNaN(parsedInt) ? 0 : parsedInt;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str) => {
        // remove $ symbol
        const cleanedStr = str.startsWith("$") ? str.slice(1) : str;
        //parse new string as an integer
        const parsedInt = parseInt(cleanedStr);
        //return 0 if failed
        return isNaN(parsedInt) ? 0 : parsedInt;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .map((message) => {
            // does message end with question mark
            if (message.endsWith("?")) {
                return null;
            }
            // does message end with exclamation point
            if (message.endsWith("!")) {
                return message.toUpperCase();
            }
            return message;
        })
        .filter((message) => message !== null)
        .map((message) => message as string);
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (!colors) {
        return true;
    } else {
        return colors.every((color) =>
            ["red", "blue", "green"].includes(color)
        );
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((acc, curr) => acc + curr, 0);
    const addendsString = addends.join("+");
    return `${sum}=${addendsString || 0}`;

    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegIndex = values.findIndex(
        (value: number): boolean => value < 0
    );
    let hasNegative = false;
    const firstPositive = values.filter((value: number): boolean => {
        if (value < 0) {
            hasNegative = true;
        }
        return !hasNegative;
    });
    const sum: number = firstPositive.reduce(
        (total: number, positive: number) => (total += positive),
        0
    );
    const answer: number[] = [...values];
    if (firstNegIndex === -1) {
        answer.splice(values.length, 0, sum);
    } else {
        answer.splice(firstNegIndex + 1, 0, sum);
    }
    return answer;
}
