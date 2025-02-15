const max = Math.max(12, 15, 18, 20, 22);
console.log('max is using Math.Max : ', max); // 22


//---------------------

const heightInch = [65, 52, 70, 75, 80, 85, 90];

function findMax(number) {
  
  let max = number[0];

  for(const num of number) {
    if(num > max) {
      max = num;
      }
    } 
    return max;
}

const maxHeight = findMax(heightInch);
console.log('max value height is : ', maxHeight);

//---------------------
// 2. find the min value in the array 

const minHeightInch = [65, 48, 70, 75, 80, 85, 90];

function findMin(number) {
  let min = number[0];
  for(const num of number) {
    if(num < min) {
      min = num;
    }
  }
  return min;
}
// task output 

const minHeight = findMin(minHeightInch);
console.log('min value height is : ', minHeight);