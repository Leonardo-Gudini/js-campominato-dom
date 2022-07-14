let campContainer = document.getElementById("container");

let numberOfBox = 100;

const usedNumbers = []

for(let i = 0; i < numberOfBox; i++){

    const numeroBox = casualNumber(1,100)
    const squareBox = addSquareBox(numeroBox)

    squareBox.addEventListener("click" ,
        function(){
            this.classList.toggle("click")
        })

    campContainer.append(squareBox);
}

function casualNumber (min,max){
    let number = Math.floor(Math.random() * ( max - min + 1)) + min;
    console.log(number);
    return number;
}

function addSquareBox (numero){
    
    let box = document.createElement("div")
    box.classList.add("squareBox")

    if (numero % 2 == 0){
        box.classList.add("pari")
    }
    else{
        box.classList.add("dispari")
    }

    box.append(numero);
    return box;
}

function noDoubleNumber (usedNumbers, min, max) {

    let noDoubleNumber = false;

    let createCasualNumber;

    while ( noDoubleNumber == false){
        createCasualNumber = casualNumber(min, max);

        if(usedNumbers.includes(createCasualNumber) == false){
            noDoubleNumber == true;
        }
    }

    return createCasualNumber;
    
}