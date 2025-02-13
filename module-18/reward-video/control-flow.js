// Switch method - Theme Example

// let theme = "dark";
 let theme = "light";

switch (theme) {
  case "light":
    console.log("Light theme is applied");
    break;
  case "dark" :
    console.log("Dark theme is applied");
    break;
  case "blue" :
    console.log("Blue theme is applied");
    break;
  default:
    console.log("System theme is applied");
}



// if-else method - Dashboard Example

// let userRole = "admin";
let userRole = "moderator";

if(userRole === "admin"){
  console.log("Welcome to admin dashboard");
} else if(userRole === "moderator"){
  console.log("Welcome to moderator dashboard");
} else { 
  console.log("Welcome to user dashboard");
}

// if-else method - User Loggedin Example

let isLoggedin = "true";

if (isLoggedin === "true"){
  console.log("Welcome to homepage");
} else {
  console.log("Please login to access homepage");
}

