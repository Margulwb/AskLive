import { GeneratedValue } from "./GeneratedRandomValue.js"

export function RandomButtonAction(importDataValue){
    const [inputAx,inputBx,inputCx,inputDx,resultAx,resultBx,resultCx,resultDx] = importDataValue
    
    inputAx.value = GeneratedValue()
    resultAx.textContent = inputAx.value

    inputBx.value = GeneratedValue()
    resultBx.textContent = inputBx.value

    inputCx.value = GeneratedValue()
    resultCx.textContent = inputCx.value
    
    inputDx.value = GeneratedValue()
    resultDx.textContent = inputDx.value
}