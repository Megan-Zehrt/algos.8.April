let n1 = 10
let m1 = 3

let n2 = 5
let m2 = 6

let n3 = 5
let m3 = 1


var differenceOfSums = function(n, m) {
    
    let notDiv = 0
    let isDiv = 0

    for(let i = 1; i <= n; i++){

        if(i % m === 0){
            isDiv += i
        }
        else{
            notDiv += i
        }
    }

    return notDiv - isDiv
};

console.log(differenceOfSums(n1,m1))
console.log(differenceOfSums(n2,m2))
console.log(differenceOfSums(n3,m3))