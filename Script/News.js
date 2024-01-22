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
        img: "./Assets/News/news (1).png",
        head: "Texas Forever Bar and Grill Turns Over a New Leaf",
        para: "As we transition into a breakfast and lunch haven, exciting changes are happening at Texas....",
    },
    {
        img: "./Assets/News/news (2).png",
        head: "10 Reasons to Dine at Texas Forever Bar and Grill",
        para: "Texas Forever Bar and Grill stands as more than just a dining establishment; it's a....",
    },
    {
        img: "./Assets/News/news (3).png",
        head: "Link to all the pictures from the event here",
        para: "A Toast to Unity: Texas Forever Bar and Grill Hosts Khawar and Sons' 5th Annual Christmas Party....",
    },
    {
        img: "./Assets/News/news (4).png",
        head: "The Legacy of the San Jacinto Monument",
        para: "Channelview, Texas, wears its history proudly, and at the heart of its narrative stands the iconic....",
    },
    {
        img: "./Assets/News/news (5).png",
        head: "The Story of The Battle of San Jacinto",
        para: "In the annals of Texas history, the Battle of San Jacinto stands as a defining moment...",
    },
    {
        img: "./Assets/News/news (6).png",
        head: "10 Reasons Why Texas is Awesome",
        para: "Texas boasts a unique and indomitable spirit, often summed up in the phrase....",
    }
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
        </div>
        `
        card.appendChild(postElement)
    })
}

postmethod()