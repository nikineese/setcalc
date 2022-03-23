import {inputA,inputB,button,result,reset} from "./variables.js";



reset.addEventListener('click', function (){
    result.forEach(res=>{
        res.classList.add('hide')
    })
    inputA.value = ""
    inputB.value = ""
})

button[0].addEventListener('click', function (){
    result[0].classList.remove('hide')
    result[0].textContent = concatArray()
})
button[1].addEventListener('click', function (){
    result[1].classList.remove('hide')
    result[1].textContent = isCrossing()
})
button[2].addEventListener('click', function (){
    result[2].classList.remove('hide')
    result[2].textContent = deleteAB()
})
button[3].addEventListener('click', function (){
    result[3].classList.remove('hide')
    result[3].textContent = deleteBA()
})
button[4].addEventListener('click', function (){
    result[4].classList.remove('hide')
    result[4].textContent = isNotCrossing()
})



function concatArray(){
    let arrayA = inputA.value.split('') || []
    let arrayB = inputB.value.split('') || []
    arrayA = Array.from(new Set(arrayA))
    arrayB = Array.from(new Set(arrayB))

    for (let i = 0; i < getMaxLength(arrayA, arrayB); i++ ){
        if (!arrayA.includes(arrayB[i])){
            arrayA.push(arrayB[i])
        }
    }

    return arrayA
}
function isCrossing(){
    let arrayA = inputA.value.split('') || []
    let arrayB = inputB.value.split('') || []
    arrayA = Array.from(new Set(arrayA))
    arrayB = Array.from(new Set(arrayB))
    let newArray = []
    console.log(arrayA)
    console.log(arrayB)
    for (let i = 0 ; i < getMaxLength(arrayA, arrayB); i++){
        if (arrayA.includes(arrayB[i])){
            newArray.push(arrayB[i])
        }
    }
    return newArray.toString()
}

let fixArr = []

function deleteAB(){
    let arrayA = inputA.value.split('') || []
    let arrayB = inputB.value.split('') || []
    arrayA = Array.from(new Set(arrayA))
    arrayB = Array.from(new Set(arrayB))
    fixArr = arrayA
    if (JSON.stringify(arrayA) === JSON.stringify(arrayB)){
        return "0"
    }
    for (let i = 0; i < getMaxLength(arrayA,arrayB) ; i++){
        if (arrayA.includes(arrayB[i])) {
            arrayA = arrayA.filter((n) => {
                return n !== arrayB[i]
            })
        }
    }
    if (arrayA.length === 1 && arrayA.includes(arrayA[0]) && arrayB.includes(arrayA[0])){
        return null
    }
    return arrayA
}
function deleteBA(){
    let arrayA = inputA.value.split('') || []
    let arrayB = inputB.value.split('') || []
    fixArr = arrayB
    if (JSON.stringify(arrayA) === JSON.stringify(arrayB)){
        return "0"
    }
    for (let i = 0; i < getMaxLength(arrayA,arrayB); i++){
        if (arrayB.includes(arrayA[i])) {
            arrayB = arrayB.filter((n) => {
                return n !== arrayA[i]
            })
        }
    }
    console.log(arrayA, arrayB)
    if (arrayB.includes(arrayB[0]) && arrayA.includes(arrayB[0])){
        return null
    }
    return arrayB
}
function isNotCrossing(){
    let arrayA = inputA.value.split('') || []
    let arrayB = inputB.value.split('') || []
    arrayA = Array.from(new Set(arrayA))
    arrayB = Array.from(new Set(arrayB))
    let newArray = []
    for (let i = 0 ; i < getMaxLength(arrayA, arrayB); i++){
        if (!arrayA.includes(arrayB[i])){
            newArray.push(arrayB[i])
        }
        if(!arrayB.includes(arrayA[i])){
            newArray.push(arrayA[i])
        }
    }
    return newArray.toString()
}

function getMaxLength(arrayA, arrayB){
    let arrayLength
    if (arrayA.length > arrayB.length){
        arrayLength = arrayA.length
    } else if (arrayB.length < arrayA.length){
        arrayLength = arrayB.length
    } else{
        arrayLength = arrayA.length = arrayB.length
    }
    return arrayLength
}

