function last(word) {
    console.log(`----------------${word}-----------------`);
}

Array.prototype.last1 = function() {
    if (this.length === 0) {
        return -1;
    } else  {
        return this[this.length - 1]
    }
};

const arr = [null, {}, 3] 
console.log(arr.last1())
console.log(last("")) 

var reduce = function (nums, fn, init) {
    let val = init;
    for (let i=0; i<nums.length; i++) {
        val = fn(val, nums[i])
    }
    return val
}

console.log(last("")) 
console.log(reduce([1,2,3,4],function sum(accum, curr) { return accum + curr * curr; }, 100)) 
console.log(last("")) 


var map = function(arr, fn) {
    for(let i=0; i<arr.length; i++) {
        arr[i] = fn(arr[i], i)
    }
    return arr
}
console.log(map([1,2,3], function plusone(n) { return n + 1; }))
console.log(last("")) 


var isEmpty = function(obj) {
    for (const a in obj) return false
    return true
}; 

console.log(isEmpty({})); 
console.log(isEmpty({"x": 5, "y": 42})); 
console.log(last("")) 

var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean) // remove falsy values
                  .map(compactObject) 
    } else if (typeof obj === "object" && obj !== null) {
        let result = {} ;
        for (let key in obj) {
            let value = compactObject(obj[key]);
            if(Boolean(value)) {
                result[key] = value;
            }
        }
        return result
    }
    return obj
    
};



//  [] = obj ||   {} arr
console.log(compactObject([null, undefined, 1])) 
console.log(compactObject({"a": null, "b": [false, 1]}))
console.log(last("")) 


var createCounter = function(init) {
    let currentValue  = init;
     const originalValue = init; 
     return {
        increment: function() {
            currentValue += 1; // เพิ่มค่า currentValue
            return currentValue;
        },

        decrement: function() {
            currentValue -= 1; // ลดค่า currentValue
            return currentValue;
        },

        reset: function() {
            currentValue = originalValue; // คืนค่า currentValue เป็นค่าเริ่มต้น
            return currentValue;
        },
    };
};  

console.log(createCounter(5,["increment","reset","decrement"]))
console.log(last("")) 
 
var once = function(fn){
    let hasBeenCalled = false;
    let result;

    return function(...args) {
        if(!hasBeenCalled) {
            result = fn(...args);
            hasBeenCalled = true;
            return result
        } else {
            return undefined
        }
    }
};



let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // 6
 // returns undefined without calling fn
