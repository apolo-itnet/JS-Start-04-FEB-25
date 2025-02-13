// Count how many times a string has the letter a in it 

let news = "a man a plan a canal Panama";
let count = 0;
for (let i = 0; i < news.length; i++) { 
  if (news[i] === 'a') {
    count++; 
  } 
} 
// console.log(count);


// Count how many times a string has the letter a or A in it 
let newsHead = "A man a plan a canal Panama"; 

/*let countA = 0;
 for (let i = 0; i < newsHead.length; i++){
  if (newsHead[i] === 'a' || newsHead[i] === 'A'){ 
    countA++; 
   } } ; */

let countA = (newsHead.match(/a/gi) || []).length;

// console.log(countA); 


//Check whether a string contains all the vowels a,e, i, o, u  
let str = "all the vowels are in this string you know"; 
let vowels = "aeiou";
let foundVowels = new Set();

for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();
  if (vowels.includes(char)){
    foundVowels.add(char);
  }
}

if (foundVowels.size === 5) {
  console.log("The string contains all the vowels");
} else { 
  console.log("The string does not contain all the vowels");
} 