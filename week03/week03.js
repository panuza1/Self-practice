// function getFreqOfWords(sentence){
//     if(!sentence) return undefined
 
//     let obj = {};
//     let word = sentence.toLowerCase().split(" "
//     for(let i = 0; i < word.length; i++){)
//         if(obj[word[i]] !== undefined){
//             obj[word[i]] += 1
//         } else{
//             obj[word[i]] = 1
//         }
//     }
//     return obj
// }
function getFreqOfWords(sentence) {
    if(!sentence) return undefined
    let words = sentence.toLowerCase().split(" ")
    return words.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, [])
}
 
// console.log(getFreqOfWords('Today is present and present is your gift'))
// console.log(getFreqOfWords('Do you best just do it'))
// console.log(getFreqOfWords(null))
// console.log(getFreqOfWords(undefined))
 
/*--------------------------------------------*/
// ตัวแปรเก็บ referrence   = ตำแหน่ง address ใน memory
 
 
function test(number) {
    return number + 1;
}
 
// const plus = (...a) => a.reduce((x,y) => x+y )
 
const plus = (...a) => {
    return a.reduce((acc, cur) => acc + cur, 0)
}
console.log(plus(1))
console.log(plus(2))
console.log(plus(3))
console.log(typeof(plus ))
 
/*-----------------------------------*/
// 1.function declaration
function sum(a,b){
    return a+b
}
const x = sum
console.log(x(1,2))
// 2. function expression (arrow syntax )
const sum2 = () => a+b  // auto return   if use {a+b} it not return
 
//3.function expression (annoymous function declaration)
const sum3 = function() {
    return a + b
}
 
function test1(){
    console.log("deja")
}
function test2(func){
    func();
}
test2(test1)
 
 
function greet(name, call){
    return call(name)
}
function greetHello(n) {
    return "hello" + n
}
 
 
function t(x) {
    return x
}
function t2(x) {
    return x + 50
}
console.log(t(t2)(10))  // (t2(10))
 
 
 
const echo = () => "hi"   // auto return
console.log(echo())
 
const setLowerCase = str => {
    const tmp = str.toLowerCase()
    return tmp
}
 
// ถ้ามี ปีกกาจะไป auto return
const S = (a,b) => a+b
console.log("=========================================")
 


function doSomething(greet="hi",someone="Guest",firstent){
    return `${greet}, ${someone}, ${firstent}`
}

console.log(doSomething())
console.log(doSomething("abc"))
console.log(doSomething("xyz","aaa"))
console.log(doSomething("xyz","aaa","bbb"))
console.log(doSomething(undefined, undefined, undefined))
console.log(doSomething(null, null, null))


function sum(...a){
    let total = 0;
    for (let i=0; i<a.length; i++){
        total += a[i]
    }
    return total
}

console.log(sum())
console.log(sum(1))
console.log(sum(1, 2))
console.log(sum(1, 2, 3, 5))

console.log("------------------------------------------------------------")
let letters = [...'hello world']
let value = '' 
for (let [index, letter] of letters.entries()) {    
    if (index % 2 === 0)     
        value += letter   //value = value + letter; 
}
console.log(`value: ${value}`)

console.log(2 % 2 === 0)
console.log(3 % 2 === 0)

console.log("--------------------------------pratice--------------------------------------")

// 1.Write a function countChar(str) that counts the frequency of each character in a string. 

function countChar(str){
    if (!str) return undefined
    let obj = {}
    let words = str.toLowerCase().split("")
    for(let i = 0; i < words.length(); i++) {
        if(obj[words[i]] !== undefined){
            obj[words[i]] += 1
        } else {
            obj[words[i]] = 1
        }
    }
    return words
}

console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))


// 2.Write a function reverseWords(sentence) that reverses the order(ลำดับ) of words in a sentence.
// Example: "I love JS" → "JS love I".
function reversesWords(sentence) {  
    if(!sentence) return undefined
    return sentence.split(' ').reverse().join(' ');
}

console.log(test('Do you best just do it'))
console.log(reversesWords('Do you best just do it'))


// 3.Write a function isPalindrome(str) that checks if a string is a palindrome.

// Use reduce to find the sum of an array, e.g. [1,2,3,4] → 10.

// Use reduce to find the product of an array, e.g. [1,2,3,4] → 24.

// Write a function findMax(arr) that returns the maximum number in an array without using Math.max.

// Write a function findMin(arr) that returns the minimum number in an array without using Math.min.

// Use entries() + for...of to get only the even indexes from an array ['h','e','l','l','o'].

// Write a function sumAll(...nums) that returns the sum of all arguments.

// Write a function multiplyAll(...nums) that returns the product of all arguments.

// Write a function setUpperCase(str) (arrow function) that converts a string to uppercase.

// Write a function greet(name, callback) that passes name to a callback function.

// Write a function filterEven(arr) that returns only even numbers from an array.

// Write a function filterOdd(arr) that returns only odd numbers from an array.

// Write a function double(arr) that uses map to multiply each number in an array by 2.

// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a string.

// Write a function mergeArrays(arr1, arr2) that merges two arrays using the spread operator.

// Write a function defaultHello(name="Guest") that returns "Hello, name".

// Write a function compose(f, g) that takes two functions and returns a new function (x) => f(g(x)).

// Write a function wordLengths(sentence) that returns an array of word lengths.

// Example: "I love JS" → [1, 4, 2].