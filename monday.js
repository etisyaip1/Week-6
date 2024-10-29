
const fruit = ["apple" , "banana" , "cherry"];

fruit.forEach(f => console.log(f));

function print(item){
    console.log(item);
}

fruit.forEach(print); //note lack of parentehesses

//no variable
[999, 444, 222].forEach(n => console.log(n));


["apple" , "banana" , "cherry"].forEach((f, i, a) => console.log(i+1, f, a));

//EXTRA CRED show diff between current value & previous value
[11,14, 16, 25].forEach((n, i, a) => i ? console.log(n - a[i-1]) : 0);

//fn-f5 run & debug 