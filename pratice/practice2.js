import {last} from "./practice1.js"

function groupByLength(words){
    let result = {}
    let wordsSort = words.toString().split(",");
    console.log(wordsSort)
    for (let i=0; i<words.length; i++){
        let len = words[i].length;
        if (result[len]) {
            result[len].push(words[i]);
        } else {
            result[len] = [words[i]];
        }
    }
    return result;
}

console.log(groupByLength(["hi", "book", "pen", "code", "AI"]));
// { 2: ['hi','AI'], 3: ['pen'], 4: ['book','code'] }
console.log(last(""))


function updateStudent(students, id, newData){
    const newArray = students.map((item) => {
        if (item.id === id){
            return {...item, ...newData};
        } else {
            return item;
        }
    });
    return newArray;
}


let students = [
    {id:1, name:"Ann", grade:"B"},
    {id:2, name:"Bob", grade:"C"}
];
console.log(updateStudent(students, 2, {grade:"A"}));
// [
//   {id:1, name:"Ann", grade:"B"},
//   {id:2, name:"Bob", grade:"A"}
// ]
console.log(last(""))


function wordStatistics(sentence) {
    let sortSentence = sentence.split(" ").sort((a, b) => a.length - b.length);

    for(let i=0; i<sentence.length;i++){
        let len = sentence[i].length;
    }
    return {
        total: sentence.split(" ").length,
        longest: sortSentence[sortSentence.length-1] ,
        shortest: sortSentence[0]
    }
}


console.log(wordStatistics("JavaScript is fun and powerful"));
// { total: 5, longest: "JavaScript", shortest: "is" }
console.log(last(""))


function wordStatisticsUseReduce(sentence) {
    const words = sentence.split(" ") ;

    const stats = words.reduce(
        (acc, word) => {
            acc.total++ ;

            // longest word
            if(word.length > acc.longest.length){
                acc.longest = word
            }
            // shortest word
            if (acc.shortest === "" || word.length < acc.shortest.length){
                acc.shortest = word;
            }
            return acc;
    }, { total: 0, longest: "", shortest: "" });
    return stats;
}


console.log(wordStatisticsUseReduce("JavaScript is fun and powerful"));
console.log(last(""))


function printBookInfo({ title, author, year}) {
    return `${title} by ${author} (${year})`;
}

console.log(printBookInfo({title:"1984", year:1949}));

// "1984 by Unknown (1949)"