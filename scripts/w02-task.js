/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = 'Isaac Gutierrez';
let currentYear = 2023;
let profilePicture = 'images/profilepicture.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('main#home picture img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute = ('alt', `Profile Picture ${fullname}`);

/* Step 5 - Array */

let favFoods = [
    "Pizza",
    "Tacos",
    "Chicken",
    'Ice Cream',
]
foodElement.innerHTML = `${favFoods}`;

let singleFavFood = "Cakes";

favFoods.push(singleFavFood);
foodElement.innerHTML += `<br>${favFoods}`;

let removeFirtsFood = favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

let removeLastFood = favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;






