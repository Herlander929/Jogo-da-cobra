import {onSnake, expansionSnake} from './snake.js'
import {randomGridPosition} from './grid.js'




let food = {
    x:2,
    y:8
}


const EXPANSION_RATE = 2

export function update() {
    if(onSnake(food)){
        expansionSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }

}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridColumnStart = food.x 
    foodElement.style.gridRowStart = food.y 
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

function getRandomFoodPosition() {
    let newFoodPosition

    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()

    }
    return newFoodPosition
}
