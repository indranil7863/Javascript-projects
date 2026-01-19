const inputAmount = document.querySelector('#type-amount')
const customInput = document.querySelector('#customer-tip');
const allPs = document.querySelectorAll('.discount-btn p')
const billBtn = document.querySelector('.bill-button')
const PeopleCnt = document.querySelector('#people-count')

const TipAmount = document.querySelector('.tip-amount')
const Total = document.querySelector('.total-amount')
const EachPersonBill = document.querySelector('.each-bill')

const ResetBtn = document.querySelector('.reset-btn')

let amount = 0;
let customTip = 0;

let color = false;
let SelectedEle = null;
let noOfPeople = 0;

inputAmount.addEventListener('input', (e)=>{
    amount = parseInt(e.target.value);
})

PeopleCnt.addEventListener('input', (e)=>{
    noOfPeople = parseInt(e.target.value) || 0;
    billBtn.style.backgroundColor = "blueviolet";
    if(!noOfPeople){
        billBtn.style.backgroundColor = "#892be265";
    }
})

customInput.addEventListener('input', (e)=>{
    customTip = parseInt(e.target.value);
    if(color){
        SelectedEle.style.backgroundColor = "blueviolet";
        color = false;
        SelectedEle = null;
    }
})


allPs.forEach((ele)=>{
    ele.addEventListener('click', (e)=>{
        customInput.value = "";
        const val = e.target.innerText;
        if(!color){
            ele.style.backgroundColor = "red"
            SelectedEle = ele;
            color = true;
        }else{
            SelectedEle.style.backgroundColor = "blueviolet";
            ele.style.backgroundColor = "red"
            SelectedEle = ele;
        }
        
        switch(val){
            case "5%":
                customTip = 5;
                break;
            case "10%":
                customTip = 10;
                break;
            case "15%":
                customTip = 15;
                break;
            case "25%":
                customTip = 25;
                break;
            case "50%":
                customTip = 50;
                break;
            case "75%":
                customTip = 75;
                break;
            default: customTip = 0;
        }
    })
})

function Bill(){
    let tp = Math.ceil(amount * (customTip/100));
    TipAmount.innerText = `₹${tp}`;
    Total.innerText = `₹${amount-tp}`;
    EachPersonBill.innerText = `₹${Math.ceil((amount - tp) / noOfPeople)}`
}

billBtn.addEventListener('click', ()=>{
    Bill();
})

ResetBtn.addEventListener('click', ()=>{
    
    inputAmount.value = "";
    customInput.value = "";
    PeopleCnt.value = "";
    if(SelectedEle){
        SelectedEle.style.backgroundColor = "blueviolet";
    }
    
    billBtn.style.backgroundColor = "#892be265"
    TipAmount.innerText = `₹0.00`
    Total.innerText = `₹0.00`
    EachPersonBill.innerText = `₹0.00`;
    amount = 0;
    customTip = 0;

    color = false;
    SelectedEle = null;
    noOfPeople = 0;
})

