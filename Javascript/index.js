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
    // 0,1,1,2,4

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