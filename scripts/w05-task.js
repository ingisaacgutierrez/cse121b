/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templesList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => 
    {
        let article = document.createElement("article");
        let html = `<h3>${temple.templeName}</h3>
                      <img src="${temple.imageUrl}" alt="${temple.location}">`;
        article.innerHTML = html;
        templesElement.appendChild(article);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () =>
{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templesList = await response.json();
    displayTemples(templesList);
}


/* reset Function */
const reset = (reset) => 
{
    while (templesElement.firstChild)
    {
        templesElement.removeChild(templesElement.firstChild);
    }
}


/* sortBy Function */
const sortBy = (temples) =>
{
    reset();
    let filter = document.getElementById("sortBy").value;
    switch (filter)
    {
        case 'utah':
        displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
        break;
        case 'notutah':
        displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
        break;
        case 'older':
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
        case "all":
        displayTemples(temples);
        break;
    }

}




/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => { sortBy(templesList)});
getTemples();