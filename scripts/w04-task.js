/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Isaac",
    photo: "images/profilepicture.png",
    favoriteFoods: [
        "Pizza",
        "Tacos",
        "Chicken",
        "Ice Cream",
    ],
    hobbies: [
        'Play Guitar',
        'Soccer',
        'Video games',
        'Movies',
        'Travel',
    ],
    placesLived:[],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'San Francisco, CA',
        length: '1 year',
    }
);

myProfile.placesLived.push(
    {
        place: 'Quito',
        length: '2 years',
    }
);
myProfile.placesLived.push(
    {
        place: 'Guayaquil',
        length: '20 years',
    }
);
myProfile.placesLived.push(
    {
        place: 'Ambato',
        length: '1 year',
    }
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('main#home picture img').setAttribute('src',myProfile.photo);
document.querySelector('main#home picture img').setAttribute('alt',myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => 
    {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => 
    {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => 
    {
    let dl = document.querySelector("#places-lived");
    let dt = document.createElement("dt");
    dt.innerHTML = place.place;
    dl.appendChild(dt);
  
    let dd = document.createElement("dd");
    dd.innerHTML = place.length;
    dl.appendChild(dd);
    });



