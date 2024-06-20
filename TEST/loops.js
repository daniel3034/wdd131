// loops.js
const myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  
  // Function to create an HTML list item for a food string
  function createFoodHTML(food) {
    return `<li>${food}</li>`;
  }
  
  // Function to create an HTML definition list item for a place object
  function createPlaceHTML(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }
  
  // Function to transform a list into a single HTML string using a callback function
  function transformListToHTML(list, templateFunction) {
    return list.map(templateFunction).join("");
  }
  
  // Get the HTML elements where the content will be inserted
  const foodsElement = document.querySelector("#favorite-foods");
  const placesElement = document.querySelector("#places-lived");
  
  // Transform the lists and set the innerHTML of the appropriate elements
  foodsElement.innerHTML = transformListToHTML(myInfo.favoriteFoods, createFoodHTML);
  placesElement.innerHTML = transformListToHTML(myInfo.placesLived, createPlaceHTML);
  