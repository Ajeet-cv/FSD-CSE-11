
let users =[
    {name:"ajeet",age:18},
    {name :"ajeeta",age:16},
]
users.sort((a,b)=>a.age-b.age);
console.log(users);
let names = users.map(user =>user.name);
console.log(names);
let adult = users.filter(user=>user.age>=18);
console.log(adult);
let number =[10,20,60,40];
let sum = number.reduce((acc,number)=>{
    return acc+number;
},0)
console.log(sum);
number.sort((a,b)=>a-b);
console.log(number);
let user = {
    name: "John",
    age: 25,
    city: "Delhi"
}
// console.log(Object.entries(user));
// Object.entries(user).forEach(([key, value]) => {
//     console.log(key, value);
// });
let {name:username,age:userage,city} = user;
console.log(username);
let update = {
    ...user,
    phone_no:2453234,
}
console.log(update);