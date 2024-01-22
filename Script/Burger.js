const navbar = document.getElementById("right");
const nav_bar = document.getElementById("nav_bar");
const nav_close = document.getElementById("nav_close");

nav_bar.addEventListener('click', () => {
    navbar.classList.add("nav_mobile")
    nav_bar.style.display = "none"
})
nav_close.addEventListener('click', () => {
    navbar.classList.remove("nav_mobile")
    nav_bar.style.display = "block"
})


const cardData = [
    {
        img: "./Assets/Burgers/burger (1).png",
        head: "HAMBURGER",
        para:"Choice of cheese topped with lettuce, tomato, fried onion strings",
        price:"$12.45"
    },
    { 
        img: "./Assets/Burgers/burger (2).png",
        head: "DOUBLE <br> HAMBURGER",
         para:"Choice of cheese topped with lettuce, tomato, fried onion strings",
        price:"$12.45"
    },
    {
        img: "./Assets/Burgers/burger (3).png",
        head: "CHEESEBURGER",
         para:"Choice of cheese topped with lettuce, tomato, fried onion strings",
        price:"$12.45"
    },
    {
        img: "./Assets/Burgers/burger (4).png",
        head: "DOUBLE <br> CHEESEBURGER",
         para:"Choice of cheese topped with lettuce, tomato, fried onion strings",
        price:"$12.45"
    },
    {
        img: "./Assets/Burgers/burger (5).png",
        head: "TEXAS FOREVER <br> BURGER",
         para:"Pepper jack cheese, bacon, sautéed jalapeños, lettuce, tomato ......",
        price:"$12.45"
    },
    {
        img: "./Assets/Burgers/burger (6).png",
        head: "THE ALAMO <br> BURGER",
         para:"Pepper Jack, American and cheddar cheese, lettuce, tomato, sautéed ......",
        price:"$12.45"
    },
    {
        img: "./Assets/Burgers/burger (7).png",
        head: "MUSHROOM SWISS",
         para:"Mushrooms, Swiss cheese, fried onion strings",
        price:"$12.45"
    },
    {
        img: "./Assets/Burgers/burger (8).png",
        head: "BBQ BURGER",
         para:"Lettuce, tomato, pickles, BBQ sauce onion strings",
        price:"$12.45"
    },
    {
        img: "./Assets/Burgers/burger (9).png",
        head: "BREAKFAST BURGER",
         para:"Bacon, sausage, hashbrown, fried egg, cheddar cheese",
        price:"$12.45"
    },
    {
        img: "./Assets/Burgers/burger (10).png",
        head: "CHILI <br> CHEESEBURGER",
         para:"American Cheese, Lettuce, Tomato, Onion, Chili and Fritos",
        price:"$12.45"
    },
]

const card = document.getElementById("menu_card");

const postmethod = () => {
    cardData.map((e) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
        <div class="menu_card">
            <img src="${e.img}" alt="">
            <h2>${e.head}</h2>
            <p>${e.para}</p>
            <h3>${e.price}</h3>
        </div>
        `
        card.appendChild(postElement)
    })
}

postmethod()