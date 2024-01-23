/* W02-Task - Profile Home Page */
let fullName = "Ernest Ohwojeheri";
/* Step 1 - Setup type tasks - no code required */

const currentYear = 2024;

/* Step 2 - Variables */

const profilePicture = "images/my image.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById (" name");

const yearElement = document.querySelector("#year");




/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;


imageElement.setAttribute("src", profilePicture);






/* Step 5 - Array */

const favoriteFoods = ["Pizza", "Pasta",  "Lasagne", "Gelato (Ice cream)", "Focaccia", "Beef patty", "Jambalaya", "Jollof rice", "Beef Suya", "Salad" ];

const favoriteFood = "Banana";
favoriteFoods.push(favoriteFood);
foodElement.innerHTML += favoriteFoods.join("<br>");
favoriteFoods.shift();
favoriteFoods.pop();
foodElement.innerHTML += "<br>" + 
favoriteFoods.join("<br>");



