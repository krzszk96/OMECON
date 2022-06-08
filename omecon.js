// 1. Napisz kod, który przekształacający tablicę [1,2,3,4] na tablicę [1,4,9,16]. (wykorzystaj ES6 lub Typescript)
// 2. Napisz kod, który zwróci z tablicy [1,2,3,4] tylko wartości parzyste.
// 3. Napisz kod, który zwróci sumę wartości z tablicy [1,2,3,4]

// Task 1 solution
function arraySquared(array){
  let arrsq = []
  for(let i=0; i<array.length; i++)
    arrsq[i] = array[i] * array[i] 
  return arrsq
}
// Task 1 output
console.log("Task 1 output: " + arraySquared([1,2,3,4]));

// Task 2 solution
function arraycheckEven(array){
  let arreven = []
  for(let i=0; i<array.length; i++){
    if( array[i] % 2 == 0)  arreven.push(array[i])
  }
  return arreven
}
// Task 2 output
console.log("Task 2 output: " +arraycheckEven([1,2,3,4]))

// Task 3 solution
function arraySum(array){
  let sum = 0
  for(let i=0; i<array.length; i++) sum += array[i]
  return sum
}
// Task 3 output
console.log("Task 3 output: " + arraySum([1,2,3,4]))