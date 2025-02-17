/**
 * here is list of weeding invitation list, u cane use object ( name and member ) to add new invitation
 * those list have duplicate name, so you can use set to remove duplicate name 
 * 
 */

const invitationList = [ 
  { name: "John", member: 2 },
  { name: "Jane", member: 3 },
  { name: "Alice", member: 5 },
  { name: "Grace", member: 1 },
  { name: "Angela", member: 4 },
  { name: "Sarah", member: 6 },
  { name: "John", member: 2 },
  { name: "Sophia", member: 3 },
  { name: "Jane", member: 3 },
  { name: "Emily", member: 6 },
  { name: "Alice", member: 5 },
];
/*
function removeDuplicates(invitationList) {
  
  let duplicateNames = [];

  for (const person of invitationList){
    
    let isDuplicate = true;
    for (const duplicate of duplicateNames) {
      if (person.name === duplicate.name && person.member === duplicate.member) {
        isDuplicate = false;
        break;
      }
    } 
    if (isDuplicate) {
      duplicateNames.push(person); 
    } 
  }
  return duplicateNames;
}
*/

function removeDuplicates(invitationList) {
  
  let uniqueName = [];

  for (const person of invitationList){
    let isDuplicate = true;
    for (const unique of uniqueName) {
      if (person.name === unique.name && person.member === unique.member) {
        isDuplicate = false;
        break;
      }
    }
    if (isDuplicate) {
      uniqueName.push(person);
    }
  }
  return uniqueName;
}

// use the function to get the unique names 
const duplicateResult = removeDuplicates(invitationList);
console.log('Here is non-duplicate list : ', duplicateResult);
