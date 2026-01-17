const showCount = document.querySelector('.counter')

const decrementBtn = document.querySelector('.decrement')
const incrementBtn = document.querySelector('.increment')

const inputBtn = document.querySelector('#input-btn')
const resetBtn = document.querySelector('.reset-btn')

let inputValue = 1;
let result = 0;
function Inc(val = 1){
    result += val;
    return result;
}

function Dec(val = 1){
    result -= val;
    return result;
}

inputBtn.addEventListener('input', (e)=>{
    inputValue = Number(e.target.value);
})

incrementBtn.addEventListener('click', ()=>{
  
    if(inputValue === 0){
       Inc(1)
    }
     Inc(inputValue)
    showCount.textContent = result;
})
decrementBtn.addEventListener('click', ()=>{
   
   if(inputValue === 0){
     Dec(1)
   }
   Dec(inputValue)
    showCount.textContent = result;
})

resetBtn.addEventListener('click', ()=>{
    showCount.textContent = 0;
    inputBtn.value = "";
    result = 0;
    inputValue = 1;
})

