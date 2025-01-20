const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        li.textContent = input.value;
        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.appendChild(li);
        input.value = "";
        input.focus();
    }
    else {
        input.focus();
    }
})

deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    input.focus();
})