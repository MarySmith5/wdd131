const input = document.querySelector("#favchap");
const addButton = document.querySelector("button");
// let list = document.querySelector("ul");
let list = document.querySelector("#list");

function getChapterList() {
    const chapters = localStorage.getItem("chapters");
    if (chapters) {
        return JSON.parse(chapters);
    } else {
        return [];
    }
}

let chaptersArray = getChapterList();

chaptersArray.forEach(chapter => { displayList(chapter); })

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value.trim() !== '') { // make sure the input is not empty
        const chapter = input.value;
        displayList(chapter);// call the function that outputs the submitted chapter
        chaptersArray.push(chapter);// add the chapter to the array
        setChapterList(chaptersArray);// update the localStorage with the new array
        input.value = "";// clear the input
        input.focus();// set the focus back to the input
    }
});

function displayList(item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', 'close');
    deleteButton.setAttribute("id", "close-button")
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    deleteButton.addEventListener("click", () => {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });
}

function setChapterList(chaptersArray) {
    localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}



function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(chaptersArray);

}
