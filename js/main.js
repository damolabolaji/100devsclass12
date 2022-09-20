

let total = 0
document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#pumpkin').addEventListener('click', makeZero)

function makeZero(){
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function add3(){
  total = total + 3
document.querySelector('#placeToPutResult').innerText = total
}

