//  1 
function countVowels(str) {
    let vowels = "AEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str.charAt(i).toUpperCase())) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello vignesh"));

//  2
function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str.charAt(i);
    }
    return rev;
}
console.log(reverseString("vignesh"));

//  3
function isPalindrome(str) {
    let cleaned = str.toLowerCase().trim();
    return cleaned === reverseString(cleaned);
}
console.log(isPalindrome("madam"));

//  4
function capitalizeWords(str) {
    let words = str.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
        }
    }
    return result.trim();
}
console.log(capitalizeWords("hello world program"));

//  5
function replaceSpaces(str) {
    return str.split(" ").join("-");
}
console.log(replaceSpaces("hello world program"));

//  6
function countWord(sentence, word) {
    let words = sentence.toLowerCase().split(" ");
    let target = word.toLowerCase();
    let count = 0;
    for (let w of words) {
        if (w === target) count++;
    }
    return count;
}
console.log(countWord("the sky is blue and the sea is blue", "blue"));

//  7
function extractDigits(str) {
    let digits = "";
    for (let i = 0; i < str.length; i++) {
        if ("0123456789".includes(str.charAt(i))) {
            digits += str.charAt(i);
        }
    }
    return digits;
}
console.log(extractDigits("ab12cd34")); // "1234"

//  8
function containsSubstring(str, sub) {
    return str.toLowerCase().includes(sub.toLowerCase());
}
console.log(containsSubstring("Hello World", "world"));

//  9 
function trimSpaces(str) {
    return str.trim();
}
console.log(trimSpaces("   Hello World   "));

//  10
function charCount(str) {
    let result = {};
    str = str.replace(/ /g, ""); 
    for (let char of str) {
        result[char] = (result[char] || 0) + 1;
    }
    return result;
}
console.log(charCount("hello world"));

//  11
function longestWord(sentence) {
    let words = sentence.trim().split(" ");
    let longest = "";
    for (let w of words) {
        if (w.length > longest.length) longest = w;
    }
    return longest;
}
console.log(longestWord("JavaScript is a powerful language"));

//  12
function anagram(str1, str2) {
    let clean1 = str1.toLowerCase().split("").sort().join("");
    let clean2 = str2.toLowerCase().split("").sort().join("");

    return clean1 === clean2;
}
console.log(anagram("listen", "silent"));

//  13
function snakeToTitle(str) {
    let words = str.split("_");
    return capitalizeWords(words.join(" "));
}
console.log(snakeToTitle("hello_world_program"));

//  14
    function secondIndex(str, char) {
    let first = str.indexOf(char);
    if (first === -1) return -1;
    return str.indexOf(char, first + 1);
}
console.log(secondIndex("banana", "a")); 

//  15
function removeDuplicates(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str.charAt(i))) {
            result += str.charAt(i);
        }
    }
    return result;
}
console.log(removeDuplicates("aabbccddeeff"));

