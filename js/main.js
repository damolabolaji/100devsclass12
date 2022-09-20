

let total = 0
document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', add3)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#pumpkin').addEventListener('click', sub2)
document.querySelector('#pumpkin').addEventListener('click', makeZero)

function makeZero(){
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function add3(){
  total = total + 3
document.querySelector('#placeToPutResult').innerText = total
}

function add9(){
total = total + 9
  document.querySelector('#placeToPutResult').innerText = total
}
function sub2(){
total = total - 2
  document.querySelector('#placeToPutResult').innerText = total
}
