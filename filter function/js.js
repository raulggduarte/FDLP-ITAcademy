//MAIN FUNCTION******************************************

function myFilter(arr, callback) {
  const filteredArray = [];
  for (i = 0; i < arr.length; i++) {
    if (callback(arr[i])) filteredArray.push(arr[i]);
  }
  return filteredArray;
}

//*******************************************************

function biggerThanOne(item) {
  return item > 1;
}

function biggerThanTwo(item) {
  return item > 2;
}

function biggerThanThree(item) {
  return item > 3;
}

function smallerThanThree(item) {
  return item < 3;
}

function isEven(item) {
  return item % 2 === 0;
}

function isOdd(item) {
  return item % 2 !== 0;
}

function nameIsPepito(item) {
  return item.name === 'Pepito';
}

arr = [1, 2, 3, 4, 5];

console.log(myFilter(arr, biggerThanOne));
console.log(myFilter(arr, biggerThanTwo));
console.log(myFilter(arr, biggerThanThree));
console.log(myFilter(arr, smallerThanThree));
console.log(myFilter(arr, isEven));
console.log(myFilter(arr, isOdd));

arr2 = [
  { name: "Pepita", surname: "Grillo", age: 25 },
  { name: "Maria", surname: "Martinez", age: 35 },
  { name: "Pepito", surname: "Grillo", age: 27 },
  { name: "Pepito", surname: "Sanchez", age: 45 },
];

console.log(myFilter(arr2, nameIsPepito));
