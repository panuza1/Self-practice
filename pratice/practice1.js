// สอบวันพฤหัสที่ 11 กย. 68 เวลา 9.30-12.30 น.  ห้อง LX11-1-2-3-4-5
// สอบทฤษฏี 1 ชม. 15 นาที Mulitple Choose/Mutiple Choice ผ่านระบบ LEB2
// และสอบปฏิบัติ 1 ชม. 45 นาที ผ่านระบบ GitHub Classroom
// หัวข้อการสอบ
// -Array + Methods
// -Object
// -Function
// -JS Module


function last(word) {
    console.log(`----------------${word}-----------------`);
}
module.exports = {last}


function addProperty(obj, key, value) {
    const newobj = {...obj};

    newobj[key] = value;
    return newobj;
}

console.log(addProperty({name: 'john'}, 'age',25));
console.log(addProperty({}, 'city', 'New York'))
console.log(last("1"))


function mergeObject(obj1, obj2) {
    const newobj = {...obj1, ...obj2} 

    return newobj
}

console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))
console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' })) 
console.log(last("2")) 


function getFreqOfWords(sentence) {
    if(!sentence) return undefined
    let obj = {}
    let word = sentence.toLowerCase().split(" ")
    for (let i=0; i<word.length; i++) {
        if (obj[word[i]] !== undefined) {
            obj[word[i]] += 1
        } else {
            obj[word[i]] = 1
        }
    }
    return obj
}

console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null)) //undefined
console.log(getFreqOfWords(undefined)) //undefined 
console.log(last("3")) 


function extractAndRename(obj) {
    const {name, age} = obj
    return {
        fullName: name,
        yearsOld: age
    }
}


 console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }))
 console.log(extractAndRename({ name: 'Jane', age: 30 }))
console.log(last("4")) 



function mergeAndDestructure(obj1, obj2) {
    const {name, age} = {...obj1, ...obj2}
    return {name,age}
}
console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }))
console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' })) 
console.log(last("5"))


function removeDuplicateWords(sentence) {
    if (!sentence) return ""
    let words = sentence.toLowerCase().split(" ");
    let seen = new Set();
    let result = [];

    for (let i=0; i<words.length; i++) {
        if (!seen.has(words[i])) {
            seen.add(words[i]);
            result.push(words[i])
        }
    }
    return result.join(" ")
}
console.log(removeDuplicateWords("This is a test This test is easy.")) // "This is a test easy."
console.log(removeDuplicateWords("Hello hello HELLO world!")) // "Hello world!"
console.log(removeDuplicateWords("One two two three three three")) // "One two three"
console.log(removeDuplicateWords("")) // ""
console.log(removeDuplicateWords(null)) // ""
console.log(last("6"))  


function findValue(arr) {
    let sortnum = arr.sort((a, b) => b - a)

    let min = Math.min(...sortnum)
    let max = Math.max(...sortnum)
    let sum = sortnum.reduce((acc, cur) => acc + cur)
    let avg = sum / sortnum.length
    return {
        min: min,
        max: max,
        sum: sum,
        avg: avg
    }
}

console.log(findValue([1,2,3,4,5])) 
console.log(last("7"))  

function convertToUppercase(arr) { 
    let sort = arr.toString().toUpperCase().split(",");
    
    return sort
}

console.log(convertToUppercase(['hello', 'world'])) 
console.log(convertToUppercase(['javascript', 'is', 'fun'])) 
console.log(last("8"))  


function findMax(arr){ 
    return arr.reduce((acc, cur) => (acc>cur) ? acc : cur)   // need to discuss 
} 

console.log(findMax([1, 2, 3, 4])) 
console.log(findMax([10, 5, 8, 7])) 
console.log(last("9"))  

function removeFalsyValues(arr) {
    let result = [] 
    let arrSort = arr.toString().split(",")
    const falsyValues = [0, "", null, undefined, NaN, false];


    for (let i=0; i<arr.length; i++ ) {
        if (
            arr[i] !== 0 &&
            arr[i] !== "" &&
            arr[i] !== null &&
            arr[i] !== undefined &&
            arr[i] !== false &&
            !(typeof arr[i] === "number" && isNaN(arr[i]))
        ) { 
            result.push(arr[i])
        }
    }
    return result
}

console.log(removeFalsyValues([0, 1, false, 2, '', 3]))
console.log(removeFalsyValues(['a', '', 'b', null, 'c']) )
console.log(removeFalsyValues([null, undefined, 'A']) ) 
console.log(last("10"))  


const doubleAndFilterEvenNumbers = ((arr) => {
    let result = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i] % 2 === 0) {
            result.push(arr[i] * 2)
        }
    }
    return result
})

console.log(doubleAndFilterEvenNumbers([1, 2, 3, 4])) 
console.log(doubleAndFilterEvenNumbers([5, 6, 7, 8]))
console.log(last("11"))  


const filterEvenNumber = ((arr) => { 
    let result = []
    for(let i=0; i<arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result.push(arr[i])
        }
    } 
    return result   
})

console.log(filterEvenNumber([1, 2, 3, 4])) // [2, 4]
console.log(filterEvenNumber([5, 6, 7, 8])) // [6, 8]
console.log(last("12"))  


function populateArray(length, value) {
    let result = [] 
    for(let i=0; i<length; i++) {
        result.push(value)
    }
    return result
}

console.log(populateArray(3, 'a'))
console.log(populateArray(5, 0) )
console.log(last("13"))


function squareNumbers(arr) {
    let result = []
    for (let i=0; i<arr.length; i++) {
        result.push(arr[i] * arr[i])
    }
    return result
}

console.log(squareNumbers([1, 2, 3, 4]))
console.log(squareNumbers([5, 6]) )
console.log(last("14"))



function processNumbers(arr) {
    let numSq = []
    for(let i=0; i<arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            numSq.push(arr[i] ** 2)
        } 
    }
    let result = numSq.reduce((acc, cur) => acc + cur)
    return result
}


console.log(processNumbers([1, 2, 3, 4]))
console.log(processNumbers([5, 6, 7, 8]))
console.log(last("15"))

console.log(last("finnish ja")) 

