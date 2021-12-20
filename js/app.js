function ArraySum(arr) {
 let tempArr = arr.sort((a, b) => {
  return a - b
 });
 let largest = tempArr.pop();
 // return largest;

 let number = 0;
 tempArr.forEach(e => number += e);
 return largest === number;
}

console.log(ArraySum([1, 6, 4, 2, 13]));
// returns true if 1+2+4+6 = 13

console.log(ArraySum([1, 2, 4, 34, 22]));
// returns false if 1+2+4+22=29 and 29!=34