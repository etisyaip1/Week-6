


let counter = 0;

function grow(c){
    if(c > limit){
        return; //no recur
    }
    return grow(c + 1); // call oursleves ?1?!?1
}


console.log (grow(1));

///////////////

fruit = ["apple" , "banana" , "cherry"]
// console.log(fruit.pop())
// console.log(fruit.pop())
// console.log(fruit.pop())
// console.log(fruit.pop())

function SharedWorker(list){
    const one = list.pop();
    if(one !== undefined){
        console.log(one);
        show(list);
    }
}
show(fruit);