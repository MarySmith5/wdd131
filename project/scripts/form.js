const inputTitle = document.querySelector("#title");
const inputLink = document.querySelector("#link");
const inputBook = document.querySelector("#book");
const inputAudiobook = document.querySelector("#audiobook");
const inputVideo = document.querySelector("#video");
const inputPrinciples = document.querySelector("#principles-in");
const inputMorality = document.querySelector("#morality-in");
const inputDivision = document.querySelector("#division-in");
const inputConspiracy = document.querySelector("#conspiracy-in");
const inputOccult = document.querySelector("#occult-in");
const inputSummary = document.querySelector("#summary");
const addButton = document.querySelector("button");
const hambutton = document.querySelector('#category');

media = getMediaList(media);

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    mediaObject = {
        title: "",
        link: "",
        type: "",
        category: [],
        summary: ""
    };
    if (inputTitle.value.trim() !== '') {
        mediaObject.title = inputTitle.value;
        inputTitle.value = "";
    }
    if (inputLink && inputLink.value.trim() !== '') {        // save link
        mediaObject.link = inputLink.value;
        inputLink.value = "";
    }
    if (inputBook.checked) {
        mediaObject.type = "book";
        inputBook.checked = false;
    }
    if (inputAudiobook.checked) {
        mediaObject.type = "audiobook";
        inputAudiobook.checked = false;
    }
    if (inputVideo.checked) {
        mediaObject.type = "video";
        inputVideo.checked = false;
    }
    if (inputPrinciples.checked) {
        mediaObject.category.push("principles");
        inputPrinciples.checked = false;
    }
    if (inputMorality.checked) {
        mediaObject.category.push("morality");
        inputMorality.checked = false;
    }
    if (inputDivision.checked) {
        mediaObject.category.push("division");
        inputDivision.checked = false;
    }
    if (inputConspiracy.checked) {
        mediaObject.category.push("conspiracy");
        inputConspiracy.checked = false;
    }
    if (inputOccult.checked) {
        mediaObject.category.push("occult");
        inputOccult.checked = false;
    }
    if (inputSummary.value.trim() !== '') {
        mediaObject.summary = inputSummary.value;
        inputSummary.value = "";
    }

    media.push(mediaObject);
    localStorage.setItem("media", JSON.stringify(media));
    window.location.href = 'media.html';
});


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


function setCurrent(link) {
    document.querySelectorAll('.navigation a').forEach(a => a.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'page');
}
