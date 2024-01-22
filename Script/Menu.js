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
        img: "./Assets/Menu/menu1.png",
        head: "STARTERS"
    },
    {
        img: "./Assets/Menu/menu2.png",
        head: "SNACKS"
    },
    {
        img: "./Assets/Menu/menu3.png",
        head: "ENTREES"
    },
    {
        img: "./Assets/Menu/menu7.png",
        head: "SIDES & ADD ONS"
    },
    {
        img: "./Assets/Menu/menu5.png",
        head: "SANDWICHES <br> & BURGERS"
    },
    {
        img: "./Assets/Menu/menu12.png",
        head: "Breakfast"
    },
    {
        img: "./Assets/Menu/menu8.png",
        head: "Deserts & Shakes"
    },
    {
        img: "./Assets/Menu/menu10.png",
        head: "ALCOHOLIC <br> BEVERAGES"
    },
    {
        img: "./Assets/Menu/menu11.png",
        head: "Daily Deals"
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
        </div>
        `
        card.appendChild(postElement)
    })
}

postmethod()