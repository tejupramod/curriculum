/**
 *  * Say Hello - takes in a number x
 *   *     return string with “hello” repeated x times.
 *    * @param {number} a
 *     * @returns {string}
 *      */

const solution = (num, i = 0, str = '') => {
    if (i === num) {
          return str;
        }
    const str2 = 'hello';
    const str3 = str + str2;
    return solution(num, i + 1, str3)
};
module.exports = {
    solution,
};

