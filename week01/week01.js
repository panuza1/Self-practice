let test = ['didi','wada','testtest','deja']
console.log(test)
console.log(test[0])
console.log(test[test.length - 1])
test.push([0, 1, 1, 2, 3])
test.push({order: 1, name: 'dada'})
console.log(test)
// 6
console.log()
for (let i=0; i<test.length; i++){
    console.log(test[i])
}
console.log()
console.log()
 
for (const element of test){
    console.log(element)
}
 
console.log(test)
test.pop()
console.log(test)
 
// ... = spread operator  (กระจาย)
let str="sawadeja"
const strCh=[...str]
console.log(strCh)
 
// construtor ต้องมี new Array()
let a = new Array() // no argument
let b = new Array(10)
let arr = new Array(1, 'tes')
console.log(b)
console.log(arr)  
 
let k = Array.from(arr)
console.log(k)
 
const str1 = new String("2 + 2")
console.log(str1)
 
// ----------------------------------------
// array destructuring
const [aaa, bbb] = [5, 10]
console.log(aaa)
const [m] = [10, 20 ,30, 40]
console.log(m)
 
const [, , n] = [8, 16, 20, 20]
console.log(n)
 
console.log("---------------")
const [,,a1,,...b1] = [5, 10, 15, 20, 25]
console.log(a1)
console.log(typeof a1 ) // number
console.log(b1)
console.log(typeof b1)
 
let letters = [...'hello world']
let value = ''
for(let[index, letter] of letters.entries()) {
    if(index % 2 === 0)
        value += letter
}
console.log(`value: ${value}`)   


