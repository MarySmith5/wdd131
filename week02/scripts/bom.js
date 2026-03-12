const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul")

const listItem = document.createElement("li");
const deleteButton = document.createElement("button");

listItem.textContent = input.value;
deleteButton.textContent = '❌';
deleteButton.setAttribute('aria-label', 'close');
deleteButton.setAttribute("id", "close-button")
listItem.append(deleteButton);
list.append(list);