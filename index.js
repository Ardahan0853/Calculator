const buttons = document.querySelectorAll('.numbers-only button')
const display = document.querySelector('h1')
const operators = document.querySelectorAll('.operators')
const clearBtn = document.querySelector('.clear')
const result = document.querySelector('.result')
let numberOne
let numberTwo
let operator = null

const add = (numberA, numberB) => {
    return numberA + numberB
}
const subtract = (numberA, numberB) => {
    return numberA - numberB
}
const multiply = (numberA, numberB) => {
    return numberA * numberB
}
const divide = (numberA, numberB) => {
    return numberA / numberB
}

const runOperator = (operatorSembol, numberA, numberB) => {
    if(operatorSembol == '+'){
       
       return add(numberA, numberB)
    }else if(operatorSembol == '-'){
        
        return subtract(numberA, numberB)
    }else if(operatorSembol == '*'){
        
        return multiply(numberA, numberB)
    }else if(operatorSembol == '/'){
        
        return divide(numberA, numberB)
    }
}

let numberArray = []
let innerTextElement = ''

/// asigning numberOne and numberTwo
buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        
        if(numberArray.length < 1){
            numberArray.push(parseInt(e.target.textContent))
            numberOne = numberArray[0]
            // numberArray.length > 1 ? numberTwo = numberArray[1] : numberTwo = ''
            display.innerText = numberArray[0]
        }else if(operator != null){
            numberArray.push(parseInt(e.target.textContent))
            numberTwo = numberArray[1]
            display.innerText = `${numberArray[0]} ${operator} ${numberArray[1]}`
        }else{
            alert("Please select an operator")
        }
        
        
        numberOne && numberTwo ? console.log(numberOne, numberTwo) : ''
    })
})

const clear = () => {
    numberOne = 0;
    numberTwo = 0;
    numberArray = [];
    operator = null;
}

clearBtn.addEventListener('click', () => {
    clear()
    display.innerText = 'Numbers will be displayed here'
})

operators.forEach(op => {
    op.addEventListener('click', (e) => {
        if(numberArray[0]){
            operator = e.target.innerText   
            display.innerText = numberOne + " " + operator
            console.log(operator)
        }else{
            alert("Please enter number first")
        }
        
    })
})


result.addEventListener('click', () => {
    if(display.innerText == `${numberArray[0]} ${operator} ${numberArray[1]}`){
        display.innerText = runOperator(operator, numberOne, numberTwo)
        clear()
    }else{
        alert("Please select numbers and operators first")
    }
    
})