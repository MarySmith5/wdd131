const input = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("ul")



addButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value.trim() !== '') { 
        const chapter = input.value;
        input.value = "";
        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button");

        listItem.textContent = chapter;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'close');
        deleteButton.setAttribute("id", "close-button")
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        deleteButton.addEventListener("click", () => {
            list.removeChild(listItem);
        });
        
        input.focus();
    }
});