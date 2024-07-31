let age = 6;
if(age >= 18){
    console.log("can vvote");
}
else{
    console.log("cannot vote chal bhag iha se babua");
}
number = 22;
if (number %2 == 0){
    console.log(number,"is even");
}
else{
    console.log("odd");
}
//else id statement
let mode = "dark";
let color;
if(mode === "dark"){
    color = "black";
}
else if(mode === "blue"){
    color = "blue";
}
else{
    color = "white";
}
console.log(color);
// ternary operator
a = 44; 
let res = a >= 18?"can vote":"cannot vote";
console.log(res);