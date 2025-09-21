// // const arr = [1,2,3] , output = [1,2,3,1,2,3] (concatenation)

// const a = [1,2,3];

// let j = a.length;

// for(let i = 0; i< j; i++){
//     a[j + i] = a[i];
// }

// for(let i = 0; i<a.length ;i++){
//     console.log(a[i])
// }

const a = [1,2,3]

// function concatenateAry(a){
//     return a.concat(a)
// }

// console.log(concatenateAry(a))

const j = a.length;

for(let i = 0; i<j ; i++){
    a.push(a[i])
}

console.log(a)