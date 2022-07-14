const start = document.getElementById("start");

start.addEventListener("click", gameBegin);

function gameBegin() {

    const gameDifficulty =  (document.getElementById("difficulty").value);

    console.log(gameDifficulty);

    let totalBox;
    let boxLineNumber;

    switch(gameDifficulty) {
        case easy:
            default:
            totalBox = 100;
            console.log(easy);
            break;

        case medium:
            totalBox = 81;
            console.log(medium);
            break;

        case hard:
            totalBox = 64;
            console.log(hard);
            break;
    }

    boxLineNumber = Math.sqrt(totalBox);
}


createMineField();

function createMineField() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    for (let i = 1; i <= totalBox; i++) {

        const box = squareBoxFunc(i, boxLineNumber)

        box.addEventListener("click", 
            function() {
                console.log(i);
                console.log(this.innerText)
                this.classList.toggle("click")
            });

            container.append(box);
    }
}

function squareBoxFunc(numero, boxLineNumber) {
    const box = document.createElement("div");
    box.style.width = `calc(100% / ${boxLineNumber})`;
    box.style.height = `calc(100% / ${boxLineNumber})`;
    box.classList.add("squareBox");
    box.append(numero);

    return box;
}