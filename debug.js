const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myObject = {
  name: 'jack',
  age: 21,
  city: 'New York'
}

console.log('The original array is;', myArray);
console.log('The original object is;', myObject);

myArray.push(6);

myObject.age = 24;

console.log('The modified array is:', myArray);
console.log('The modified object is:', myObject);