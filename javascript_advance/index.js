// Longest substring without repeating characters
let str = "bcadef";
const longestSubstring = (str) => {
    let count =0;
    let maxCount = 0;
    let subStr = "";
    for(let i=0; i<str.length; i++) {
        let re = str[i];
        if(subStr.includes(re)) {
            count = 1;
            subStr = re;
        } else {
            subStr += re;
            count++
            maxCount= Math.max(count, maxCount)
        }
    }
    return maxCount;
}
console.log(longestSubstring(str));

// Hoisting, closures, this, prototype chain

var x = 10;
function outer() {
  console.log(x);
  var x = 20;
}
outer(); // ? undefined