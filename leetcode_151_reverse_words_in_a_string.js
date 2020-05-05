/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(str) {
    return str
            .split(' ')               //create an array of words separated based by spaces
            .filter(string => string) //remove empty strings to take care of extra whitespace
            .reverse()                //reverse the array of words
            .join(' ');               //join the words back together with spaces inbetween
};


console.log(reverseWords("the sky is blue"));
// output: "blue is sky the"
