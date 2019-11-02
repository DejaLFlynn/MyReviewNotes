console.log('//////EVEN LENGTH STRINGS IN AN ARRAY')
const evenLength = (arr) => {
    return arr.filter(el => {
        return el.length % 2 === 0
    })
}

let arr = ['hello', 'good', 'time', 'times', 'in', 'code']
console.log(evenLength(arr))
console.log('/////SECOND LARGEST')
function secondLargest(arr) {
    let largest = -Infinity
    let secondLargest = -Infinity
    arr.forEach(element => {
        if (element > largest) {
            largest = element
        } else if (element > secondLargest) {
            secondLargest = element
        }
    });
    return secondLargest

}
let element = [6, 7, 9, 8, 14, 10]
console.log(secondLargest(element))
console.log('/////////SECOND SMALLEST')
function secondSmallest(arr) {
    let smallest = Infinity
    let secondSmallest = Infinity
    arr.forEach(element2 => {
        if (element2 < smallest) {
            smallest = element2
        } else if (element2 < secondSmallest) {
            secondSmallest = element2
        }
    })
    return secondSmallest
}
let element2 = [6, 7, 9, 8, 14, 10]
console.log(secondSmallest(element2))
console.log('/////CHECK IF NAN IS number')
console.log(NaN !== NaN)
console.log(isNaN(NaN))
console.log('////TURN NUMBER INTO STRING')
let num = 10
num = num.toString()
console.log('//////CHECK IF A NUMBER')
console.log(typeof num)
console.log('////OBJECTS IN ARRAY AND SHOW INDEX')
let array = ['apple', 'peach', 'banana', 'strawberries']

console.log(typeof array)
console.log('//////CALLING FIRST  AND LAST ELEMENT IN ARRAY')
for (let index in array) {
    console.log('index', index, 'value:', array[index])
}
console.log(array[0])
console.log(array[array.length - 1])

console.log('//////LENGTH OF STRING')
let str = 'supercali'
for (let char of str) {
    console.log(char)
}
console.log(str.length)
console.log('/////ELEMENTS OF OBJECT')
let person = { name: 'deja', age: '33', hair: true }
for (let key in person) {
    console.log('key', key, 'value:', person[key])
}
console.log('///////using map to key into array to return just names in a new array')
let people = [{ name: "corey", age: 100 }, { name: "jon", age: 70 },
{ name: "Celine", age: 18 }]
const names = (arr) => {
    return arr.map(el => {
        return el.name
    })
}
console.log(names(people))
console.log('//////ADDING KEY:hair CHANGING NAME AND DELETE AGE')
let person3 = { name: 'deja', age: 33 }
person3['hair'] = true
console.log(person3)
person3['name'] = 'Shawn'
delete person3.age
console.log('//////NO DUPS/////////3 DIFFERENT WAYS')
const noDups = arr => {
    let output = []
    arr.forEach(el => {
        if (!output.includes(el)) {
            output.push(el)
        }
    })
    return output
}
console.log(noDups([1, 1, 2, 2, 2, 4, 7]))
const noDups2 = arr => {
    return arr.reduce((acc, el) => {
        if (!acc.includes(el)) {
            acc.push(el)
        }
        return acc
    }, [])
}
console.log(noDups2([1, 1, 2, 4, 7]))
const noDups3 = arr => {
    let obj = {}
    arr.forEach(el => {
        obj[el] = el
    })
    return Object.values(obj)
}
console.log(noDups3([1, 1, 2, 4, 7]))

console.log('/////KEYING INTO ELEMENTS IN AN ARRAY')
let fruits = ['mango', 'strawberry', 'banana']
console.log(fruits[0])
console.log(fruits[fruits.length - 1])
console.log('//////SLICING INTO A STRING')
console.log('corey'.slice(2, 4))
console.log('deja'.slice(1, 3))
console.log('supercali'.slice(2, 5))
let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
let arr3 = [1, 2, 3]

console.log(arr1 === arr2)
console.log(arr3 === arr2)
console.log('///////CHARACTER COUNT')

const counter = (arr5) => {
    let counts = {}
    arr5.forEach(el => {
        if (counts[el]) {
            counts[el += 1]
        } else {
            counts[el] = 1
        }
    })
    return counts
}
console.log(counter([1, 1, 2, 2, 3, 3, 3, 4]))
console.log('/////////SUM OF ARRAY USING REDUCE')
const sumArrayReduce = arr => {
    return arr.reduce((acc, el) => {
        return acc += el
    }, 0)
}
console.log(sumArrayReduce([3, 2, 4]))

const largest = arr6 => {
    return arr6.reduce((acc, el) => {
        if (acc > el) {
            return acc
        } else {
            return el
        }
    }, arr6[0])
}
console.log(largest([2, 4, 6, 2, 8]))
console.log('////DISMEMVOWEL/////////')
function noVowels(str) {
    let newStr = ""
    for (let i = 0; i <= str.length; i++) {
        if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
            newStr += str.charAt(i)
        }

    }
    return newStr
}
console.log(noVowels('happy'))

const disEmVowel = (str) => {
    let lettersToAvoid = "aAeEiIoOuU"
    let output = ""
    for (let char of str) {
        if (!lettersToAvoid.includes(char)) {
            output = output + char
        }
    }
    return output
}
console.log(disEmVowel('happy'))

const isPalidrome = (str) => {
    return str === str.split('').reverse().join('')
}
console.log(isPalidrome('aaabbbaaa'))
const secondPalidrome = str => {
    let i = 0
    let j = str.length - 1
    while (i < j) {
        if (str[i] !== str[i]) {
            return false
        }
        i++
        j--
    }
    return true
}
console.log(secondPalidrome('aaabbbaaa'))

const thirdPal = str => {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(thirdPal('aaabbbaaa'))

let str1 = 'corey'
console.log(str1.split(''))
console.log(str1.split('r').join('r'))
const containsSeven = (num) => {
    num = num.toString();
    if (num.includes(7)) {
        return true;
    } else {
        return false;
    }
}
console.log(containsSeven(274))



const mode = (arr) => {
    let newObj = {}
    for (let number of arr) {
        if (newObj[number] === undefined) {
            newObj[number] = 1
        } else {
            newObj[number]++
        }
    }
    let biggestValue = 0
    let biggestKey
    for (let key in newObj) {
        if (newObj[key] > biggestValue) {
            biggestValue = newObj[key]
            biggestKey = key
        }
    }
    return Number(biggestKey)
}

console.log('////MODE//////')
function mode1(numbers) {

    var modes = [], count = [], i, number, maxIndex = 0;

    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
}

console.log(mode1([2, 2, 2, 7, 7, 3, 8, 1]))

console.log('/////MEDIAN////')
function median(numbers) {

    var median = 0, numsLen = numbers.length;
    numbers.sort();

    if (
        numsLen % 2 === 0 // is even
    ) {
        // average of two middle numbers
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = numbers[(numsLen - 1) / 2];
    }

    return median;
}
console.log(median([3, 5, 4, 4, 1, 1, 2, 3]))
function mean(numbers) {
    var total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
}
console.log(mean([3, 5, 4, 4, 1, 1, 2, 3]))
console.log('DOUBLER')
function doubler(arr) {
    let newArr = arr.map((el) => {
        return el * 2
    })
    return newArr
}
console.log(doubler([3, 5, 4, 4, 1, 1, 2, 3]))
Array.prototype.myMap = function(callback) {
    let result = [];
    for(let i= 0; i < this.length; i++) {
        result.push(callback(this[i], i))
    }
    return result; 
}
let arr6 = ["cat", "dog", 'bird'];
console.log(
    arr6.myMap(el => el.toUpperCase())
)
// nums.myMap((el)=>console.log(el*2))
//  console.log('hi')
console.log('array prototype my filter')
Array.prototype.myFilter = function (cb) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i)) {
            result.push(this[i])
        }
    }
    return result
}
let arr8 = [1, 2, 3, 4, 5]
console.log(
    arr8.myFilter((el, i) => {
        return i % 2
    })
)
console.log('pair indicies')
const findIndicies = (arr9, target) => {
    let result = []
    for (let i = 0; i < arr9.length; i++) {
        for (let j = i + 1; j < arr9.length; j++) {
            if ((arr9[i] + arr9[j] === target)) {
                result.push([i, j])
            }
        }

    }
    return result
}

const findIndicies2 = (arr, target) => {
    let result = [];
    let searching = {};
    for(let i = 0; i < arr.length; i++) {
        let goal = target - arr[i];
        if(searching[arr[i]] !== undefined) {
            result.push([searching[arr[i]], i]);
        } else {
            searching[goal] = i; 
        }
    }    
    return result; 
}
let nums = [-7, 0, 2, 3, 7, 8, -2]
target = 0
console.log(findIndicies(nums, target))
console.log(findIndicies2(nums, target))
