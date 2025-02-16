/**
 * here is bride name list - angela, anna, sarah, lily, emily, sophia, isabella, olivia, hena
 * find the bride name which have is "h, H" letter
 */ 

const brideNameList = ["angela", "anna", "sarah", "lily", "emily", "sophia", "isabella", "olivia", "hena" ]; 

function fineHena(list){
  let temp = [];

  for(let i = 0; i < list.length; i++){
    const brideName = list [i];
    if (brideName.includes("h")) {
      temp.push(brideName);
      }
   }
   return temp;
}

const findName = fineHena(brideNameList);
console.log(findName);