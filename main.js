// // function mergeSorted(ArrayOne,ArrayTwo){
// // const result = [...ArrayOne,...ArrayTwo]
// //  return result.sort((a,b)=>a-b)
// // }

// const mergeSorted = (ArrayOne, ArrayTwo) => {
//   const result = [];
//   let counter = 0;
//   let indexOne = 0;
//   let indexTwo = 0;

//   while (counter < ArrayOne.length + ArrayTwo.length) {
//     if (ArrayOne[indexOne] < ArrayTwo[indexTwo]) {
//       result[counter] = ArrayOne[indexOne];
//       indexOne++;
//     } else {
//       result[counter] = ArrayTwo[indexTwo];
//       indexTwo++;
//     }
//     counter++;
//   }
//   return result;
// };

// let ArrayOne = [4, 6, 5, 8, 7];
// let ArrayTwo = [2, 1, 3, 9];

// console.log(mergeSorted(ArrayOne, ArrayTwo));

// // console.log(mergeSorted(ArrayOne,ArrayTwo));
// // const mergedOne= ArrayOne.concat(ArrayTwo)
// // console.log(mergedOne);

// // const mergedTwo=[...ArrayOne,...ArrayTwo,...["keren"]]
// // console.log(mergedTwo);

// ================================================
function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;

  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}
array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));
