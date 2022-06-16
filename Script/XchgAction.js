export function XchgAction(){
    console.log("sa");
    const fromX = document.querySelector('.start-x').value
    const toX = document.querySelector('.end-x').value
    const resultFrom = document.querySelector(".result-" + fromX)
    let valueFrom

    (resultFrom.textContent == "")
    ?
        valueFrom = document.querySelector('.' + toX + '-value').value
    :
        valueFrom = document.querySelector('.result-' + toX).textContent

    const result = document.querySelector(".result-" + fromX)
    result.textContent = valueFrom
}