// Two points
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '' || haystack === needle) {
        return 0;
    }
    
    if (needle.length > haystack.length) {
        return -1;
    }
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            } else if (j === needle.length - 1) {
                return i
            }
        }
    }
    
    return -1;
}
