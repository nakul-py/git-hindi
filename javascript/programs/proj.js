// COUNTER PROGRAM  

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countNum = document.getElementById("countNum");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countNum.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countNum.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countNum.textContent = count;
}