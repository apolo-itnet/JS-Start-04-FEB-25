/**
 * array has some duplicate elements
 * []
 */ 

const biriyaniKhor = ['jhon', 'hena', 'mostafa', 'jack', 'hanna', 'jack', 'jhon', 'jack',  'hakim', 'kiara'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61, 87];

function noDuplicate(array){
  const duplicate = [];
  for (const element of array) {
    if (!duplicate.includes(element)) {
      duplicate.push(element);

    } else {
      console.log(`Duplicate found: ${element}`);
    } 
  }
  return duplicate;
}

// const uniqueArray = noDuplicate(biriyaniKhor);
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);