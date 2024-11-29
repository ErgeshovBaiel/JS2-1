// Spread - (...)
// rest - оператор массивтин ичинен чыгарат.
const num = [1,2,3,4,5];
console.log(num, "обычный");
console.log(...num, "rest оператор");

const obj = {
    num: 1,
    num: 2,
    num: 3,
}

const res = {...obj};

console.log(res);

// Rest...

const numbers = [10,20,30,40,50];
console.log(numbers);

const [one , two , tree , ...nums] = numbers;

console.log(one);
console.log(two);
console.log(tree);

console.log(nums);

// Деструктуризация 

const myself = {
    name:"Baiel",
    age:16,
    isMarried: false,
};

// console.log(myself.age , myself.isMarried);


const {name , age , isMarried } = myself;
console.log(name);
console.log(age);
console.log(isMarried);

const original = {
    color: "синий",
    size: "XL",

}
console.log(original);

const copy = {...original, size: "L", color:"красный"}

console.log(copy);

const number = [100,200,300,400,500];
console.log(number);

const [red, green, ...nym] = number ;

console.log(red);
console.log(green);

console.log(nym);

const obj2 = {
    name: "Argen",
    age: 20,
    hobby: "Sleep",
}
const obj3 = {
    nami: "Maks",
    agi: 23,
    hobbi: "Swim",
}

const full = {...obj2 , ...obj3 }

console.log(full);
