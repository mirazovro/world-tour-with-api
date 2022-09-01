/* object with 6 properties. string, boolean, number, function(method,access any object property and return it),array, object*/

const players = {
    name: 'miraz', age: 25, isPlay: true, arr1: [size = 'xxl', isMature = 'true', hobby = 'photography'], add : (a,b) => {
        return a + b;
    }
}

const adds = players.add(25, 25)
console.log(adds)




        
const samazik = (a,b) => {
return (a+b)
}

console.log('miraz is', ' a bit samazik')

// array third element find out
const data = players.arr1[2]
console.log(data)

// access propertey of object
console.log(players.age)

// no params return 89
const num =()=>{
    return 89;
}

console.log(num());

// number as parameter and return it divided by 17
const dividing = (Number) => {
    return Number/17;
}

console.log(dividing(34))

// take two parameters: first+7, second+5, if result is even return true or odd return false

const numberSum = (a, b) => {
    return(a+b)
}
const results = numberSum(7, 5)

if (results %2===0) {
    console.log(true)
}else {
    console.log(false)
}
console.log(results)

// multiline arrow function : array of number as input params: sum of all numbers and square the result

const sumAll = (a, b, c, d) => {
    const sum = a + b + c + d;
    const square = sum * sum;
    return square;
}

console.log(sumAll(25, 35, 20, 30))
// map
//number of array er each number ke 7 diye divide kore return korbo array take


const number1 = [49, 56, 65, 84, 45, 65].map(x => x / 7);
console.log(number1)


// declare an array

const obj = ['sakib', 'rakib', 'jolil', 'kholil'];

const obj2 = [...obj,28];
console.log(25, ...obj2, 56, 58)

// declare an object
const playersdata = {
    name: 'korim',
    age: '75',
    city: 'dhaka',
    desh: 'bangladesh'
}

const playersdata2 = { ...playersdata }
console.log(playersdata2)
