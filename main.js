const container = document.querySelector(".container");
const button = document.querySelector("button");


function createGrid(num) {
    container.setAttribute("style", `grid-template-columns: repeat(${num}, auto);`, 
        `grid-template-rows: repeat(${num}, auto);`);
        
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const square = document.createElement("div");
            square.classList.add("item");
            square.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = "red";
            });
            container.appendChild(square);
        }
    }
}

createGrid(16);

button.addEventListener("click", () => {
    const gridNum = prompt("Enter a number c for a cxc grid.");

    while (parseInt(gridNum) === NaN) {
        const gridNum = prompt("Enter a number c for a cxc grid.");
    }

    container.innerHTML = ''; /*Removing all children*/
    createGrid(parseInt(gridNum));

});