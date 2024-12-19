const container = document.querySelector(".container");


for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("item");
        container.appendChild(square);
    }
}

const items = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseover', (event) => {
        event.target.style.borderColor = "red";
    })
}