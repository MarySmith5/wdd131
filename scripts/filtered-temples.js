const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        alt: "exterior of LDS temple in Aba, Nigeria"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        alt: "exterior of LDS temple in Manti, Utah, United States"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        alt: "exterior of LDS temple in Payson, Utah, United States"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        alt: "exterior of LDS temple in Yigo, Guam"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        alt: "exterior of LDS temple in Kensington, Maryland, United States"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        alt: "exterior of LDS temple in Lima, Perú"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        alt: "exterior of LDS temple in Mexico City, Mexico"
    },
    {
        templeName: "Perth Australia Temple",
        location: "Yokine, W. Australia",
        dedicated: "2001, May, 20",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/perth-australia-temple/perth-australia-temple-34994-main.jpg",
        alt: "exterior of LDS temple in Yokine, Western Australia"
    },
    {
        templeName: "Oakland California",
        location: "Oakland, California",
        dedicated: "1964, November, 19",
        area: 80157,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg",
        alt: "exterior of LDS temple in Oakland, California"
    },
    {
        templeName: "Kirtland",
        location: "Kirtland, Ohio ",
        dedicated: "1836, March, 27",
        area: 80157,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg",
        alt: "exterior of LDS temple in Oakland, California"
    }
    // Add more temple objects here...
];

createTempleCard(temples);

function createTempleCard(temples) {
    document.querySelector(".cards").innerHTML = "";
    temples.forEach(temple => {
        let card = document.createElement("figure");
        let caption = document.createElement("figcaption");
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span>  ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span>  ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span>  ${temple.area}`;

        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.alt);
        image.setAttribute("loading", "lazy");

        caption.appendChild(name);
        caption.appendChild(location);
        caption.appendChild(dedication);
        caption.appendChild(area);

        card.appendChild(caption);
        card.appendChild(image);

        document.querySelector(".cards").appendChild(card);
    });
}

function setCurrent(link) {
    document.querySelectorAll('.navigation a').forEach(a => a.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'page');
}

largeLink.addEventListener("click", (e) => {
    e.preventDefault();
    setCurrent(largeLink);
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", (e) => {
    e.preventDefault();
    setCurrent(smallLink);
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

oldLink.addEventListener("click", (e) => {
    e.preventDefault();
    setCurrent(oldLink);
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.slice(0, 4)) < 1900));
});

newLink.addEventListener("click", (e) => {
    e.preventDefault();
    setCurrent(newLink);
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.slice(0, 4)) > 2000));
});

homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    setCurrent(homeLink);
    createTempleCard(temples);
});
