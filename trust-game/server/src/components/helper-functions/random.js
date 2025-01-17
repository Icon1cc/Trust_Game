/**
 * Helper functions for randomness in Empirica V2.
 * These utility functions can be used for random operations such as 
 * selecting or shuffling elements in arrays.
 */

/**
 * Randomly selects and removes an element from an array.
 * @param {Array} array - The array to select from.
 * @returns {*} - The randomly selected element.
 */
export function popChoice(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Invalid array provided to popChoice()");
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array.splice(randomIndex, 1)[0];
}

/**
 * Randomly selects an element from an array without removing it.
 * @param {Array} array - The array to select from.
 * @returns {*} - The randomly selected element.
 */
export function choice(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Invalid array provided to choice()");
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} - The shuffled array.
 */
export function shuffle(array) {
    if (!Array.isArray(array)) {
        throw new Error("Invalid array provided to shuffle()");
    }
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
