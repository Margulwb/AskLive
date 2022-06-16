import { RandomButtonAction } from "./Script/RandomButtonAction.js";
import { ClearInputValue } from "./Script/ClearInputValue.js";
import { MoveAction } from "./Script/MoveAction.js";
import { XchgAction } from "./Script/XchgAction.js";

let resultAx = document.querySelector('.result-ax')
let resultBx = document.querySelector('.result-bx')
let resultCx = document.querySelector('.result-cx')
let resultDx = document.querySelector('.result-dx')

let inputAx = document.querySelector('.ax-value')
inputAx.addEventListener('change', (e) => resultAx.textContent = inputAx.value)
let inputBx = document.querySelector('.bx-value')
inputBx.addEventListener('change', (e) => resultBx.textContent = inputBx.value)
let inputCx = document.querySelector('.cx-value')
inputCx.addEventListener('change', (e) => resultCx.textContent = inputCx.value)
let inputDx = document.querySelector('.dx-value')
inputDx.addEventListener('change', (e) => resultDx.textContent = inputDx.value)

const importDataValue = [inputAx,inputBx,inputCx,inputDx,resultAx,resultBx,resultCx,resultDx]

const randomButton = document.querySelector('.random-button')
randomButton.addEventListener('click', ()=>RandomButtonAction(importDataValue))

const resetButton = document.querySelector('.clear-button')
resetButton.addEventListener('click',()=>ClearInputValue())

const moveButton = document.querySelector('.move-action')
moveButton.addEventListener('click', ()=>MoveAction())

const xchgButton = document.querySelector('.xchg-action')
xchgButton.addEventListener('click',()=>XchgAction())