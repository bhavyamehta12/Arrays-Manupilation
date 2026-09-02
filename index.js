let arr = [5,3,4,6,3,12,65,34,32];
arr.push(5);
arr.pop();
arr.unshift(6);
arr.shift();
console.log(arr.includes(3));
arr.find((value) => {
    if(value === 12){
        console.log("Value found");
    }
});
console.log(arr.indexOf(65));
let even = arr.filter((num) => {
    return num % 2 === 0;
})
console.log(even);
let mul =arr.map((num) => {
    return num * 2;
});
console.log(mul);
let sum = arr.reduce((acc, curr) => {
    return acc + curr;
});
console.log(sum);
let lar = arr.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
});
console.log(lar);
let small = arr.reduce((acc, curr) => {
    return acc < curr ? acc : curr;
});
console.log(small);
let at = arr.some((num) => {
    return num > 50;
});
console.log(at);
let all = arr.every((num) => {

    return num > 0;
}   );
console.log(all);
let sort = arr.sort((a,b) => {
    return a - b;
});
console.log(sort);

let students = [
    {id: 1, name: "John", age: 20,marks: 80,city: "New York"},
    {id: 2, name: "Jane", age: 22,marks: 90,city: "Los Angeles"},
    {id: 3, name: "Jim", age: 21,marks: 75,city: "Chicago"},
    {id: 4, name: "Jack", age: 23,marks: 85,city: "Houston"}
];
let student = students.find((student) => {
    return student.id== 2;
});
console.log(student);
let student1 = students.filter((student) => {
    return student.marks > 80;
});
console.log(student1);
let student2 = students.find((student) => {
    return student.city=="Chicago";
});
console.log(student2);
let name = students.map((student) => {
    return student.name;
}   );
console.log(name);
let marks = students.map((student) => {
    return student.marks;
});
console.log(marks);
let inc = students.map((student) => {
    return student.marks+2;
});
console.log(inc);
let highest = students.reduce((acc, curr) => {
    return acc.marks > curr.marks ? acc : curr;
});
console.log(highest);
let lowest = students.reduce((acc, curr) => {
    return acc.marks < curr.marks ? acc : curr;
});
console.log(lowest);
let avg = students.reduce((acc, curr) => {
    return acc + curr.marks;
}, 0) / students.length;
console.log(avg);

let cart = [
    {id: 1, name: "Product 1", price: 10, category: "Electronics", rating: 4.5, quantity: 2},
    {id: 2, name: "Product 2", price: 20, category: "Clothing", rating: 4.0, quantity: 1},
    {id: 3, name: "Product 3", price: 15, category: "Electronics", rating: 4.8, quantity: 3},
    {id: 4, name: "Product 4", price: 30, category: "Clothing", rating: 4.2, quantity: 2}
];
let product = cart.find((product) => {
    return product.id== 3;
});
console.log(product);
let product1 = cart.filter((product) => {
    return product.category=="Electronics";
});
console.log(product1);
let expensive = cart.reduce((acc, curr) => {
    return acc.price > curr.price ? acc : curr;
});
console.log(expensive);
let cheap = cart.reduce((acc, curr) => {
    return acc.price < curr.price ? acc : curr;
});
console.log(cheap);
let sumPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
}, 0);
console.log(sumPrice);
let avgRating = cart.reduce((acc, curr) => {
    return acc + curr.rating;
}, 0) / cart.length;
console.log(avgRating);