/**
 * হিরো ভাই এখন সবগুলো h দিয়ে মেয়েদের নাম পেয়ে গেছে প্রত্যেকটা object  এখন আবার হিরো  ভাই বলতেছে শুধু যাদের বাড়ি ঢাকা জেলার মধ্যে হবে সেই মেয়ের বাসায় proposal  পাঠাবে , এখন তোমাকে এমন একটা function  লিখতে হবে যে function   input  হিসেবে দুইটা object  নেই এবং সি object  এর ভিতরে যদি বাড়ি জেলার সাথে আরেকজনের মিল হয় তাহলে তোমাকে positive  একটা string  return  করতে হবে যে "proposal  done " যদি তোমার input  এর ভিতরে object  ছাড়া অন্য কিছু আসে তাহলে তোমাকে একটা error  দিতে হবে যে invalid input  
 */ 

const hiroBioData = {
  name: "Hiro",
  age: 25,
  address: { 
    street: "bashundaara", 
    city: "dhaka",
    district: "dhaka"
  },
  fatherName: "M Hero",
  email: "hiro@gmail.com",
}
const henaBioData = {
  name: "Hena",
  age: 22,
  address: { 
    street: "motizheel",
    city: "dhaka",
    district: "ctg"
  },
  fatherName: "salman mh",
  email: "hena@gmail.com",
}

function proposalFunction(hiro, hena) {

  if (typeof hiro === 'object' || typeof hena === 'object' && !Array.isArray(hiroBioData)) {
    if (hiro.address.district === hena.address.district) {
      return "proposal match"
    } else {
      return "proposal not match"
    } 
  } 
  return "invalid input"
} 

const sendProposal = proposalFunction(hiroBioData, henaBioData);
console.log('Status : ', sendProposal); 
// proposal done