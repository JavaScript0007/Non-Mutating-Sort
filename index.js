// sort array without mutation
// sort by default is going to mutate the original array
// that is why we have to use either concat method or spread operator

const globalArray = [5, 6, 3, 2, 9];

const nonMutatingSort = (arr) => {
  let newArr = [...arr].sort((a, b) => a - b)
  return newArr
}

// solution with concat

//const nonMutatingSort = (arr) => {
//  const newArr = [].concat(arr).sort((a, b) => a - b)
//  return newArr
//}

console.log("sorted array", nonMutatingSort(globalArray))
console.log("original array", globalArray)
