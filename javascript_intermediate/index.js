// 🟡 Intermediate (Array & Object Manipulation – 11 to 25)

let results = result => console.log(result());

// 1-Flatten a nested array (e.g. [1, [2, [3, 4]]] → [1,2,3,4]).
let arr= [1, [2, [3, 4]]];
const flattenArr = (arr) => {
    let results = [];
    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            // results.push(...flattenArr(arr[i]));
            results = results.concat(flattenArr(arr[i]))
        } else {
            results.push(arr[i])
        }
    }
    return results
}
console.log(flattenArr(arr));

// 2-Find the intersection of two arrays.
let arr1 = [3,4,5,9,10,11,12];
let arr2 = [4,5,6,7];
const intersection = (arr1, arr2) => {
    let n1 = arr1.length;
    let n2 = arr2.length;
    let n, arr, resArr;
    let results=[];
    if(n1 > n2) {
        n= n2;
        arr = arr2;
        resArr = arr1;
    } else {
        n = n1;
        arr = arr1;
        resArr= arr2
    }

    for(let i=0; i<arr.length; i++) {
        let r = arr[i];
        if(resArr.includes(r)) {
            results.push(r);
        }
    }
    return results;
}
console.log(intersection(arr1, arr2));

// 3- Sort an array of objects by a specific property.
arr = [{id: 5, name:"shubham"}, {id: 2, name:"rahul"}, {id: 3, name:"akash"}, {id: 4, name:"lokesh"}]

const sortArr = (arr, el) => {
    let result = arr.sort((a,b) => {
        if(typeof a[el] === "string") {
            return a[el].localeCompare(b[el])
        }
        return a[el] - b[el]});
    return result;
}

console.log(sortArr(arr, "name"));

// 4- Group array items by property (e.g. group by “department”). 
arr=[
  { name: "Shubham", department: "Engineering" },
  { name: "Aarya", department: "HR" },
  { name: "Ravi", department: "Engineering" },
  { name: "Lokesh", department: "Finance" }
]

const groupByDept = (arr) => {
    let results = {};
    for(let i=0; i<arr.length; i++) {
        let dept = arr[i]?.department;
        if(results[dept]) {
            results[dept] = [...results[dept], arr[i]]
        } else {
            results[dept] = [arr[i]]
        }
    }
    return results;

}
console.log(groupByDept(arr))

// 5- Merge two objects deeply (nested merge)
let obj1 = {
  name: "Shubham",
  details: {
    age: 27,
    address: { city: "Bangalore", pin: 560070 }
  }
}

let obj2 = {
  details: {
    age: 28,
    address: { street: "8th Cross" }
  },
  role: "Frontend Developer"
}
const deepMerge = (obj1, obj2) => {
    let results = {...obj1};
    for(let key in obj2) {
        if(obj2[key] && typeof obj2[key] === "object" && !Array.isArray(obj2[key])) {
          results[key] = deepMerge(obj2[key])
        } else {
            results[key] = obj2[key];
        }
    }
    return results;
}
console.log(deepMerge(obj1, obj2))

// 6 Remove falsy values from an array.
arr = [0, 1, false, 2, "", 3, null, undefined, "Shubham"]
const removeFalsy = (arr) => {
    let results = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i]) {
            results.push(arr[i])
        }
    }
    return results;
}
const removeFalsy1 = arr => arr.filter((item) => item);
console.log(removeFalsy1(arr))