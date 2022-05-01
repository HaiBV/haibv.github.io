/**
 * 844. Backspace String Compare
 * String, Stack, Two Points, Simulation
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    const strip = str => {
        const stack = [];
        for (const char of str) {
            if (char === '#') {
                stack.length > 0 && stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    }

    return strip(s) === strip(t);
};