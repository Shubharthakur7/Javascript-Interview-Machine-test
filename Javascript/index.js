// javscript basic
// 1- Reverse a string without using built-in reverse()
let str = "hello shubham";
const reverseString = (str1) => {
    let results = "";
    for(let i=str1.length-1; i>=0; i--) {
        results+=str1[i]
    }
    return results;
}
console.log(reverseString(str));

// 2- Check if a string is a palindrome.
 str = "abcba"
const isPalindromeString= reverseString(str) === str;
console.log(isPalindromeString);


// 3- Count vowels and consonants in a string.
str = "asdhdbvgsns";
const countVowelAndContraints = (str1) => {
    let vowel = ["a","e","i","o","u"];
    let v=0, c=0;
    for(let i=0; i<str1.length; i++) {
        if(vowel.indexOf(str1[i]) > -1) {
            v++
        } else {
            c++;
        }
    }
    return [v,c, str1.length]
}
console.log(countVowelAndContraints(str));

// 4- Find the factorial of a number.
let n = 7;
const fact = (n1) => {
    if(n1 < 0) return -1;
    if(n1 <=2) return n1;
    return n1 * fact(n1-1);
}
console.log(fact(n))

// 5- Print Fibonacci series up to N terms.
n = 8;
const fib = (n) => {
    if(n<=1) return n;
    return fib(n-1) + fib(n-2);
}
const fibSeries = (n) => {
    let results = [];
    for(let i=0; i<n; i++) {
        results.push(fib(i))
    }
    return results;
}
console.log(fibSeries(n))

// 6- Find the largest and smallest number in an array.
let arr = [1,4,3,5,7,0,5,32, -9];
const largestSmallestDigit = (arr) => {
    let largest = arr[0];
    let smallest = arr[0];
    for(let i=0; i<arr.length; i++) {
        let res = arr[i];
        largest= Math.max(largest, res);
        smallest=Math.min(smallest, res)
    }
    return [largest, smallest];
}
console.log(largestSmallestDigit(arr))

// 7- Remove duplicates from an array.
arr = [1,4,3,1,4,1,3,5,7,0,5,32, -9];
const removeDuplicates = (arr) => {
    let r = new Set(arr);
    return [...r];
}
console.log(removeDuplicates(arr))

// 8- Check if two strings are anagrams.
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};
console.log(isAnagram("listen", "silent"));

// 9- Find the sum of all numbers in an array.
const sum=(arr) => {
    let res = arr.reduce((a,c) => a+c);
    return res;
}
console.log(sum([1,3,2]))

// 10- Count occurrences of each element in an array.
const countOccurance = (arr) => {
    let obj = {}
    for(let i=0; i<arr.length; i++) {
        let r = arr[i];
        if(obj[r]) {
           obj[r]=obj[r] +1
        } else {
            obj[r]=1
        }
    }
    return obj;
}
console.log(countOccurance([1,2,3,1,1,2,2,2]));