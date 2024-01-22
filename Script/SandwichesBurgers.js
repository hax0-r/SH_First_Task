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
        img: "./Assets/drinks/drink1.png",
        head: "HAMBURGER",
        para: "Lettuce, tomatoes, fried onion strings ………",
        price: "$7.95"
    },
    {
        img: "./Assets/drinks/drink2.png",
        head: "DOUBLE HAMBURGER",
        para: "Lettuce, tomatoes, fried onion strings ………",
        price: "$8.95"
    },
    {
        img: "./Assets/drinks/drink3.png",
        head: "CHEESEBURGER",
        para: "Choice of cheese topped with lettuce, tomato, fried onion strings",
        price: "$8.95"
    },
    {
        img: "./Assets/drinks/drink4.png",
        head: "DOUBLE CHEESEBURGER",
        para: "Choice of cheese topped with lettuce, tomato, fried onion strings",
        price: "$9.95"
    },
    {
        img: "./Assets/drinks/drink5.png",
        head: "TEXAS FOREVER BURGER",
        para: "Pepper jack cheese, bacon, sautéed jalapeños, lettuce, tomato, pickles, fried onion strings",
        price: "$11.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "THE ALAMO BURGER&quot",
        para: "Pepper Jack, American and cheddar cheese, lettuce, tomato, sautéed onions, jalapeños, bacon, smoked sausage, fried onion strings and BBQ sauce",
        price: "$12.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "MUSHROOM SWISS",
        para: "Mushrooms, Swiss cheese, fried onion strings",
        price: "$12.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "BBQ BURGER",
        para: "Lettuce, tomato, pickles, BBQ sauce onion strings",
        price: "$9.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "BREAKFAST BURGER",
        para: "Bacon, sausage, hashbrown, fried egg, cheddar cheese",
        price: "$8.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "TEXAS BLT",
        para: "Loaded with bacon, lettuce, tomato, cheese",
        price: "$8.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "GRILLED CHICKEN SANDWICH",
        para: "American cheese, lettuce, tomato, fried onion strings",
        price: "$11.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "PULLED PORK SANDWICH",
        para: "Coleslaw sandwich",
        price: "$11.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "CHILI CHEESEBURGER",
        para: "American Cheese, Lettuce, Tomato, Onion, Chili and Fritos",
        price: "$9.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "FRIED CHICKEN SANDWICH",
        para: "American cheese, lettuce, tomato, fried onion strings",
        price: "$11.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "THE BIG PHILLY",
        para: "With sauteed peppers, onions, provolone cheese",
        price: "$11.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "PATTY MELT",
        para: "Texas Toast, cheddar cheese, sauteed onions",
        price: "$11.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "CHICKEN AVOCADO <br> BACON CLUB",
        para: "Avocado, lettuce, tomato, pickles, bacon, ranch dressing, swiss cheese",
        price: "$9.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "FRIED FISH SANDWICH",
        para: "Lettuce, tomato, tartar sauce",
        price: "$10.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "PO BOY",
        para: "Shrimp or fish, grilled or fried with lettuce, tomato, fried onion strings &amp; choice of sauce.",
        price: "$10.95"
    },
    {
        img: "./Assets/drinks/asdasdasd.png",
        head: "CHICKEN & WAFFLE <br> SANDWICH",
        para: "A chicken fried chicken sandwich between two Belgian waffles, quarter cut and topped with powdered sugar, served with syrup",
        price: "$10.95"
    },
]

const card = document.getElementById("menu_card");

const postmethod = () => {
    cardData.map((e) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
        <div class="menu_card">
        <div class="drink_height">
        <img src="${e.img}" alt="">
        </div>
            <h2>${e.head}</h2>
            <p>${e.para}</p>
            <h3>${e.price}</h3>
        </div>
        `
        card.appendChild(postElement)
    })
}

postmethod()