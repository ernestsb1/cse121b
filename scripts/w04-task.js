/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
name: "Ernest Ohwojeheri",
photo: "images/my image.jpg",
favoriteFoods: ["pizza", "Pasta", "ice cream", "Focaccia", "Beef", "Jollof rice",],
hobbies: ["reading", "playing guitar", "hiking", "Jorging"],

/* Populate Profile Object with placesLive objects */

placesLived: []
  };
  


myProfile.placesLived.push({place: "Warri Delta", length: "20 years"});
myProfile.placesLived.push({place: "Monchengladbach Germany", length: "5 years"});
myProfile.placesLived.push({place: "Abuja Fct", length: "6 years"});


/* Name */
document.getElementById("name").innerHTML = myProfile.name;
/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/

let favoriteFoodsList = document.getElementById("favorite-foods");

myProfile.favoriteFoods.forEach(function(food) {
let foodItem = document.createElement("li");
foodItem.textContent = food;
favoriteFoodsList.appendChild(foodItem);
});

/* Hobbies List */
let hobbiesList = document.getElementById("hobbies");

myProfile.hobbies.forEach(function(hobby) {
let hobbyItem = document.createElement("li");
hobbyItem.textContent = hobby;
hobbiesList.appendChild(hobbyItem);
});

let placesLivedList = document.getElementById("places-lived");

myProfile.placesLived.forEach(function(place) {
let dt = document.createElement("dt");
dt.textContent = place.place;
  
let dd = document.createElement("dd");
dd.textContent = place.length;

/* Places Lived DataList */
placesLivedList.appendChild(dt);
placesLivedList.appendChild(dd);
});
/* DOM Manipulation - Output */

/* Name */












