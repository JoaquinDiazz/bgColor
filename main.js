const p = document.querySelector("#p")
const btn = document.querySelector("#btn")

function randomNum() {
    return Math.floor(Math.random() * 256)
}

function randomColor() {
    let color = `rgb(${randomNum()},${randomNum()},${randomNum()})`
    document.body.style.background = color
    btn.style.color = color
    p.innerText = color
}


btn.addEventListener("click", randomColor)