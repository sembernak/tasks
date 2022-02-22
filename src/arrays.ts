import { Console } from "console";
import { arrayBuffer } from "stream/consumers";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length < 1) {
        const bookEnd = numbers.filter((numb: number): boolean => false);
        return bookEnd;
    }
    const bookEnd = [numbers[0], numbers[numbers.length - 1]];
    return bookEnd;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numb: number): number => numb * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // eslint-disable-next-line prettier/prettier
    return numbers.map((numb: string): number =>
        isNaN(Number(numb)) ? 0 : Number(numb)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // eslint-disable-next-line prettier/prettier
    amounts = amounts.map((amount: string): string =>
        amount.replaceAll("$", "")
    );
    const toInts = stringsToIntegers(amounts);
    return toInts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // eslint-disable-next-line prettier/prettier
    messages = messages.filter(
        (message: string): boolean => message.charAt(message.length - 1) !== "?"
    );
    // eslint-disable-next-line prettier/prettier
    messages = messages.map((message: string): string =>
        message.charAt(message.length - 1) === "!"
            ? message.toUpperCase()
            : message
    );
    return messages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const count = words.reduce(
        (total: number, word: string) => (word.length < 4 ? total + 1 : total),
        0
    );
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const total = addends.reduce(
        (total: number, addend: number) => total + addend,
        0
    );
    const breakdown = addends.reduce(
        (formula: string, addend: number) => formula + "+" + addend,
        ""
    );
    return total + "=" + breakdown.substring(1);
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
    if (values.every((value: number): boolean => value >= 0)) {
        const sum = values.reduce(
            (total: number, value: number) => total + value,
            0
        );
        return [...values, sum];
    }
    const location = values.findIndex((value: number): boolean => value < 0);
    const toSum = [...values];
    toSum.splice(location, values.length, 0);
    const sum = toSum.reduce(
        (total: number, value: number) => total + value,
        0
    );
    const submit = [...values];
    submit.splice(location + 1, 0, sum);
    return submit;
}
