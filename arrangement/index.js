const divElements = document.querySelectorAll("tr div")
const countElement = document.querySelector(".moves h2")
const startButton = document.querySelector(".start_game")
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function startGame() {
    console.log(...divElements)
    let movesCount = 0
    numbersArray.sort(() => 0.5 - Math.random())
    let nullIndex = 0
    startButton.disabled = true;
    divElements.forEach(
        (element, index) => {
            if (numbersArray[index] == 9) {
                nullIndex = index
                element.innerHTML = `<h1></h1>`
            } else {
                element.innerHTML = `<h1>${numbersArray[index]}</h1>`
            }
            element.addEventListener("click", event => {
                if (index !== nullIndex && numbersArray[index] !== 9) {
                    movesCount += 1
                    element.innerHTML = `<h1></h1>`
                    divElements[nullIndex].innerHTML = `<h1>${numbersArray[index]}</h1>`
                    let temp = numbersArray[nullIndex]
                    numbersArray[nullIndex] = numbersArray[index]
                    numbersArray[index] = temp
                    nullIndex = index
                    countElement.innerHTML = movesCount
                    const getProcessResult = getResult(numbersArray)
                    if (getProcessResult) {
                        console.log("Done");alert('You Won with'+movesCount);

                        startButton.disabled = false;
                    }
                    console.log(`last - ${index} current - ${nullIndex} array - ${numbersArray}`);
                }
            })
        }
    )
}

function getResult(numbersArray) {
    
    const sortedArray = [1,2,3,4,5,6,7,8,9]
    for (var i = 0; i < numbersArray.length; ++i) {
        if (numbersArray[i] !== sortedArray[i]) return false;
    }
    return true;
}


startButton.addEventListener(
    "click", event => {
        startGame()
    }
)