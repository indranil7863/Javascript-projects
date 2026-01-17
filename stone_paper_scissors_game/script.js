const Stone = document.querySelector('.stone');
const Paper = document.querySelector('.paper')
const Scissors = document.querySelector('.scissors')

const ShowImage = document.querySelector('.person-div').children[0] // person image
const computerImage = document.querySelector('.computer').children[0]; // computer image

const PersonScoreShow = document.querySelector('.person-score') // score
const ComputerScoreShow = document.querySelector('.computer-score') // cmp socre

const MessageShown = document.querySelector('.fourth-section').children[0]

const gameOver = document.querySelector('.result')
const gameResult = gameOver.children[1].children[0]
const restartBtn = gameOver.children[2] // play again btn


const prevImagePerson = ShowImage.src
const prevComputerImage = computerImage.src

let PersonScore = 0;
let ComputerScore = 0;

let PersonResult = 0; 
let ComputerResult = 0;

function shakeHand(){
    ShowImage.src = prevImagePerson
    ShowImage.style.removeProperty("width");
    computerImage.src = prevComputerImage
    computerImage.style.removeProperty("width")
    ShowImage.classList.add('shake')
    computerImage.classList.add('shake')
}

function checkWhoOwn(){
    if((PersonResult === "stone" && ComputerResult === "scissors") || (PersonResult == "paper" && ComputerResult === "stone") || (PersonResult === "scissors" && ComputerResult === "paper")){
    PersonScore++;
    MessageShown.textContent = "Person won"
    PersonScoreShow.textContent = `(${PersonScore})`
        // person win
    }else if((PersonResult === "stone" && ComputerResult === "stone") || (PersonResult === "paper" && ComputerResult === "paper") || (PersonResult === "scissors" && ComputerResult === "scissors")){
        MessageShown.textContent = "Draw"
        // draw
    }else{
        ComputerScore++;
        MessageShown.textContent = "Computer won"
        ComputerScoreShow.textContent = `(${ComputerScore})`
        // computer won
    }

    
    // console.log(PersonScore)
    // console.log(ComputerScore)
    if(PersonScore === 10 || ComputerScore === 10){
       

        if(PersonScore === ComputerScore){
            // match draw
            gameResult.textContent = "Draw the Match"
            //reset score
            // set message start
        }else if(PersonScore > ComputerScore){
            // person own
            gameResult.textContent = "Person"
            //reset score
            // set message start
        }else{
            // computer own
            gameResult.textContent = "Computer"
            //reset score
            // set message start
        }
         gameOver.style.display = "flex"
         PersonScore = 0;
         ComputerScore = 0;
         PersonScoreShow.textContent = `(${0})`
         ComputerScoreShow.textContent = `(${0})`
         Stone.style.display = "none"
         Paper.style.display = "none"
         Scissors.style.display = "none"
    }
    
}

function computerPlay(){
    const randomNum = Math.floor(Math.random()*3)+1;
    if(randomNum === 1){
        // stone
        computerImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbrCdvl64ZqatFeK43sZ1js4i2H0qqf6hog&s";
        computerImage.style.width = "100px"
        ComputerResult = "stone"
    }else if(randomNum === 2){
        // paper
        computerImage.src = "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/share/1faf1.jpg"
        computerImage.style.width = "250px"
        ComputerResult = "paper"
    }else if(randomNum === 3){
        // scossor
        computerImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZYayfKu42E7izFcB67DtKbiNh7RuDAUwZA&s"
        computerImage.style.width = "200px"
        ComputerResult = "scissors"
    }
}

restartBtn.addEventListener('click', ()=>{
    gameOver.style.display = "none"
    ShowImage.src = prevImagePerson
    ShowImage.style.removeProperty("width");
    computerImage.src = prevComputerImage
    computerImage.style.removeProperty("width")
    Stone.style.display = "flex"
    Paper.style.display = "flex"
    Scissors.style.display = "flex"
})

Stone.addEventListener('click', ()=>{
    shakeHand()
    setTimeout(()=>{
     computerPlay()
     ShowImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbrCdvl64ZqatFeK43sZ1js4i2H0qqf6hog&s";
     ShowImage.style.width = "100px"
     PersonResult = "stone"
     ShowImage.classList.remove('shake')
     computerImage.classList.remove('shake')
     checkWhoOwn()
    }, 700)
    

})

Paper.addEventListener('click', ()=>{
    shakeHand()
    setTimeout(()=>{
     computerPlay()
     ShowImage.src = "https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/share/1faf1.jpg";
     ShowImage.style.width = "250px"
     PersonResult = "paper"
     ShowImage.classList.remove('shake')
     computerImage.classList.remove('shake')
     checkWhoOwn()
    }, 700)

})

Scissors.addEventListener('click', ()=>{
    shakeHand()
    setTimeout(()=>{
     computerPlay()
     ShowImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZYayfKu42E7izFcB67DtKbiNh7RuDAUwZA&s";
     ShowImage.style.width = "200px"
     PersonResult = "scissors"
     ShowImage.classList.remove('shake')
     computerImage.classList.remove('shake')
     checkWhoOwn()
    }, 700)

})



