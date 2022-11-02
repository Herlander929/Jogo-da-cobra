import { getInputDirection } from './input.js'

export const  SNAKE_SPEED = 4

const snakeBody = [
    { x: 11, y: 11 },  
]

let newSegments = 0
export function update() {
    addSegments()

    const inputDirection = getInputDirection()

    for(let i = snakeBody.length -2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]}
    }
 
    snakeBody[0].x +=inputDirection.x
    snakeBody[0].y +=inputDirection.y

}

export function draw(gameBoard){
    snakeBody.forEach(segment =>  {
       const SnakeElement = document.createElement('div')
       SnakeElement.style.gridColumnStart = segment.x 
       SnakeElement.style.gridRowStart = segment.y 
       SnakeElement.classList.add('snake')
       gameBoard.appendChild(SnakeElement)
    })

}

export function expansionSnake(amount) {
    newSegments += amount

}

export function addSegments() {
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    newSegments = 0
}

export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index)=> {
        if(ignoreHead && index === 0) return 
        return position.x === segment.x && position.y === segment.y
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(getSnakeHead(), {
        ignoreHead: true
    })
}