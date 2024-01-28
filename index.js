const buttons = document.querySelectorAll('.numbers-only button')
const display = document.querySelector('h1')
const operators = document.querySelectorAll('.operators')
const clearBtn = document.querySelector('.clear')
const result = document.querySelector('.result')
let numberOne
let numberTwo
let operator = ''

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
    }else{
        
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
        }else if(operator.includes(operator)){
            numberArray.push(parseInt(e.target.textContent))
            numberTwo = numberArray[1]
            display.innerText = `${numberArray[0]} ${operator} ${numberArray[1]}`
        }else{
            alert("Please select an operator")
        }
        
        
        numberOne && numberTwo ? console.log(numberOne, numberTwo) : ''
    })
})
clearBtn.addEventListener('click', () => {
    numberOne = 0;
    numberTwo = 0;
    numberArray = [];
    display.innerText = 'Numbers will be displayed here'
})

operators.forEach(op => {
    op.addEventListener('click', (e) => {

        operator = e.target.innerText
        display.innerText += " " + operator
        console.log(operator)
    })
})


result.addEventListener('click', () => {
    if(display.innerText == `${numberArray[0]} ${operator} ${numberArray[1]}`){
        display.innerText = runOperator(operator, numberOne, numberTwo)
    }else{
        alert("Please select numbers and operators first")
    }
    
})











// IT GOT REALLY REALLLLYY MESSY SO I DECICED TO DO IT AGAIN
// const buttons = document.querySelectorAll('.inside-calc button')
// const display = document.querySelector('h1')
// const operators = document.querySelectorAll('.operators')


// let numberOne

// let numberTwo

// let operator


// var storedValue = []

// var isCleared = false

// let innerTextElement = ''

// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         storedValue.push(parseFloat(e.target.innerText))
        
//         if(!isCleared){
//             display.innerText = ''
//             isCleared = !isCleared
//             for(let i = 0; i < storedValue.length; i++){
//                 innerTextElement += storedValue[i]
//             }
//             display.innerText = innerTextElement
//         }else if(storedValue.length > 2){
//             display.innerText = "Please enter two numbers at a time"
//             storedValue = []
//             innerTextElement = ''
//         }else{
//             for(let i = storedValue.length - 1; i < storedValue.length; i++){
//                 innerTextElement += " "+  `${operator ? operator : ''}` +" " + storedValue[i]
//                 display.innerText = innerTextElement
//                 console.log(storedValue)
//             }
//         }
//         numberOne = storedValue[0]
//         numberTwo = storedValue[1]
//         console.log(parseFloat(e.target.innerText))
//         console.log(typeof display.innerText)
//     })
// })

// operators.forEach(button => {
//     button.addEventListener('click', (e) => {
//         operator = e.target.innerText;
//         innerTextElement +=   ` ${operator ? operator : ''}` + " " 
//         display.innerText = innerTextElement
//         console.log(innerTextElement)
//         if(operator != ''){
//             operator = ''
//         }
        
//     })
    
// })

// document.querySelector('.result').addEventListener('click', () => {
//     console.log(finalOperator(operator, numberOne, numberTwo))
//     console.log(operator)   
    
// })



// function finalOperator(op, n1,n2){
//     if(op === '+'){
//         add(n1,n2)
//     }else if(op === '-'){
//         subtract(n1,n2)
//     }else if(op === '*'){
//         multiply(n1, n2)
//     }else if(op === '/'){
//         divide(n1,n2)
//     }
// }


// const add = (n1, n2) => {
//     let converted1 = parseFloat(n1)
//     let converted2 = parseFloat(n2)
//     return converted1 + converted2
// }
// const subtract = (n1, n2) => {
//     let converted1 = parseFloat(n1)
//     let converted2 = parseFloat(n2)
//     return converted1 - converted2
// }
// const multiply = (n1, n2) => {
//     let converted1 = parseFloat(n1)
//     let converted2 = parseFloat(n2)
//     return converted1 * converted2
// }
// const divide = (n1, n2) => {
//     let converted1 = parseFloat(n1)
//     let converted2 = parseFloat(n2)
//     return converted1 / converted2
// }



