myInfo = {
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

const foodsElement = document. querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

function generateListMarkup(list, templateCallback)
{
        const htmlList = list.map(templateCallback);
        return htmlList.join("");
}

function foodsTemplates(food)
{
    return `<li>${food}</li>`;
}

function placesTemplates(place)
{
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup
(
    myInfo.favoriteFoods,
    foodsTemplates
);
foodsElement.innerHTML = generateListMarkup
(
    myInfo.placesLived,
    placesTemplates
);
