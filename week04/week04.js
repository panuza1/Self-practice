const words = ["apple", "Manngo","orange","Banana"]
// words.reverse();
// console.log(words)

// callback function
// 1.annonymous arrow function
let aword = words.filter((word)=>word.startsWith('a'))
console.log("1",aword)

//2. annoymouse function declaration
const Awords = words.filter(function (word) {
    return word.startsWith('a');
})
console.log("2",Awords)

// 3.named arrow function
const checkFirstA = (word) => word.startsWith('a')
const startAword2 = words.filter(checkFirstA)
console.log("3",startAword2)

// 4. named function declaration
function checkFirstA2(word){
    return word.startsWith('a')
}
const startAword3 = words.filter(checkFirstA2)
console.log("4",startAword3)

console.log("---------------------------------")

const num = [1,2,3,4]
// const sumnum = num.reduce((acc, cur) => acc * cur);
// console.log(sumnum)

let wordofA = []
let test = words.forEach((word) => {
    if(word.startsWith('a')) {
        wordofA.push(word)
    }
})
console.log(wordofA)   // ['apple']

const map1 = num.map(x => x * 2);
console.log(map1)  // [ 2, 4, 6, 8 ]

const employees = [
    {
        id: "e1001",
        firstname: "Somchai",
        lastname: "Jaidee",
    },
    {
        id: "e1002",
        firstname: "Pornchai",
        lastname: "Deejai",
    },
    {
        id: "e1005",
        firstname: "Suda",
        lastname: "Rakdee",
    },
]

// output
const toUP = employees.map((e) => e.firstname.toUpperCase() + " " + e.lastname.toUpperCase())
console.log(toUP)


// 16272936
// 029
const findjai = toUP.filter((e) => e.includes('JAI'))
console.log(findjai)

const carts = [
    { productId: 1002, price: 10, amount: 5 },
    { productId: 2005, price: 100, amount: 2 },
    { productId: 5001, price: 5, amount: 4 },
]

//net price = total price * VAT 7%
const total = carts.reduce((acc, cur) =>
    acc + (cur.price * cur.amount) * 7 /100 , 0
)
console.log(total)

/*
const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
]
//net price = total price * VAT 7%
// const totalPrice= carts.reduce(  callbackfunc  , initailvalue    )
const totalPrice = carts.reduce(
  (total, product) => total + product.price * product.amount,
  0
)
const netPrice = totalPrice * 1.07
console.log(netPrice.toFixed(2))
 */

const nums = [1,2,3,4]
nums[nums.length] = 0
nums.push(8)
nums.unshift(10)
console.log(nums)

// add
words.splice(2, 0, "cherry", "berry")
// delete 'cherry'
// 2 is index for delete  , 1 is amout to delete
words.splice(2, 1)
//replace 'berry' with 'mango'
words.splice(2,1, "mango")
console.log(words)

// slice
const w = ["apple", "orange", "banana","mango","cherry"]
console.log(w.slice(1))
console.log(w.slice(0 ,3))
console.log(w.slice(2,5))
console.log(w.slice(2))
console.log(w.slice(-3))

// https://classroom.github.com/a/mkjP_IKP
