//API information
const apiKey = `57c2356f487754733816f074782a45b8652e4e1b6011be6ff11116f4a468a3ac`;
const endpoint = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=zombie`;

//Selectors and Variables
const imageResults = document.getElementById("images");
const globeIcon = document.getElementById("globe");
const quotes = document.getElementById("quote");
const author = document.getElementById("author");
const zombie = document.getElementById("zombie");
const enter = document.getElementById("enter");
let content = "";

//API connection
function getPhotos(endpoint) {
    fetch(endpoint)
    .then(response => 
        {
            if (response.ok) 
            {
                return response.json();
            } 
            else 
            {
                return Promise.reject("Error!");
            }
        })
    .then(data => buildPage(data))
    .catch(error => console.log("Error is", error));
}


//Call API function
getPhotos(endpoint);
//Build the page
function buildPage(data)
{
    data.results.forEach(result =>{
        content+=
        `<article>
        <ul>
        <li>${result.user.name}</li>
        <li>${result.likes}</li>
        </ul>
        <img src="${result.urls.regular}"  alt="${result.description}" srcset="${result.urls.small}, ${result.urls.full}, ${result.urls.raw}"/></article>`;
    });
    
    imageResults.innerHTML = content;
}

//Animation for the globe icon
globeIcon.addEventListener("click", e=>{
    e.preventDefault();
    globeIcon.classList.toggle("transform");
    randomQuote();
});

//Random zombie quotes
let quoteArray = [{
    "author": "Stephe Graham Jones",
    "quote": "You can't negotiate with a zombie. They have only one impulse - that's to eat us or our brains."
}, {
    "author": "David Icke",
    "quote": "Humanity is mind-controlled and only slightly more conscious than your average zombie."
}, {
    "author": "John Lithgow",
    "quote": "The zombie is the new, sort of, archetype of our times"
}, {
    "author": "Alan Moore",
    "quote": "Culture is just a shambling zombie that repeats what it did in life; bits of it drop off, and it doesn't appear to notice."
}, {
    "author": "Scott M. Gimple",
    "quote": "A non-frightening zombie is a lame zombie."
}, {
    "author": "Kim Paffenroth",
    "quote": "Zombies are then a symbol of our own mad urges to destroy ourselves, and a terrifying portent that we might succeed."
}, {
    "author": "Graham Parke",
    "quote": "My Zombie apocalypse plan is simple but effective; I fully intend to die in the very first wave."
}, {
    "author": "Mac Montandon",
    "quote": "Zombies are not blessed with overly active frontal lobes."
}, {
    "author": "Ken Foree",
    "quote": "When there's no more room in hell, the dead will walk the earth."
},{
    "author": "George Romero",
    "quote": "Zombies are the real lower-class citizens of the monster world and that's why l like them."
}];


function randomQuote()
{
    const random = Math.floor(Math.random()*quoteArray.length);
    quote.innerHTML = quoteArray[random].quote;
    author.innerHTML = `&mdash; ${quoteArray[random].author}`;
}

// To enter main page
zombie.addEventListener("click", toggle, false);
enter.addEventListener("click", toggle, false);

function toggle()
{
    const isHidden = document.getElementById("hideMe");
    isHidden.style.display = "none";
    const isShow = document.getElementById("showMe");
    isShow.style.display= "block";
}

