export function MoveAction(){
    const fromX = document.querySelector('.start-x').value
    const toX = document.querySelector('.end-x').value
    const resultFrom = document.querySelector(".result-" + fromX)
    let valueFrom

    (resultFrom.textContent == "")
    ?
        valueFrom = document.querySelector('.' + fromX + '-value').value
    :
        valueFrom = document.querySelector('.result-' + fromX).textContent

    const result = document.querySelector(".result-" + toX)
    result.textContent = valueFrom
}