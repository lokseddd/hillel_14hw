let numbers1 = [1, 3, 8, 10, 5, 9, 11, 4, 7];

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] > 3 && numbers1[i] < 10) {
    console.log(numbers1[i]);
  }
}


let numbers2 = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] === 4) { 
    console.log('Наявний!');
    break; 
  }
}


let mass = [42, 2, 33, 11, 12, 10, 0];

let sum = mass.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let average = sum / mass.length;

console.log("Середнє арифметичне:", average);


let totalLength = ["parrot", "bull", "bear", "monkey"].reduce((accumulator, currentItem) => {
    return accumulator + currentItem.length;
}, 0);

console.log('Total text length:', totalLength);


let mixedArray = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];
let stringArray = mixedArray.filter(item => typeof item === 'string');

console.log("Filtered array:", stringArray);
