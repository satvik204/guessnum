//declare variables

let a = 1;
let b= 100;
var randomnum = Math.round(a+(b-a)*Math.random());
const easy = document.querySelector(".easy");
const medium = document.querySelector(".medium");
const hard = document.querySelector(".hard");
const expert = document.querySelector(".expert");
const impossible = document.querySelector(".impossible");
const container = document.querySelector(".container");
const mainpage = document.querySelector(".mainpage");
const guess_number = document.querySelector("#guess_number");
const guess = document.querySelector(".guess");
const gorl = document.querySelector(".gorl");
const back = document.querySelector(".Back");
const submit = document.querySelector(".Submit");
const numdisplay = document.querySelector(".numdisplay");
const playAgain = document.querySelector(".PlayAgain");
let guessnum = 0;
var tguess = 0;
let w = 0;
//redirection

easy.addEventListener('click',()=>{
    tguess = 9;
    mainpage.style.display = "flex";
    container.style.display = "none";
    guess.innerHTML = "Guesses: 0/" +tguess;
})


medium.addEventListener('click',()=>{
    tguess = 7;
    mainpage.style.display = "flex";
    container.style.display = "none";
    guess.innerHTML = "Guesses: 0/" +tguess;
})


hard.addEventListener('click',()=>{
    tguess =5;
    mainpage.style.display = "flex";
    container.style.display = "none";
    guess.innerHTML = "Guesses: 0/" +tguess;
})


expert.addEventListener('click',()=>{
    tguess = 3;
    mainpage.style.display = "flex";
    container.style.display = "none";
    guess.innerHTML = "Guesses: 0/" +tguess;
})


impossible.addEventListener('click',()=>{
    tguess = 1;
    mainpage.style.display = "flex";
    container.style.display = "none";
    guess.innerHTML = "Guesses: 0/" +tguess;
})


// submit button click
 submit.addEventListener('click',guessnumber)

//creating function of submit button
function guessnumber() {
    if (w == 0) {
     
    let guessval = guess_number.value;
    gorl.innerHTML = ""; 
    if (Number(guessval) < 0 || Number(guessval) > 100 || String(guessval) == "") {
        gorl.innerHTML = "Enter valid number";
    }else{
        if (guessval == randomnum) {
                gorl.innerHTML = "Congratulations! You Won.";
             
                numdisplay.innerHTML = guessval;
                 guessval = 0;
                 guessnum = 0;
                 w= 1;
            
        }else{
            guessnum +=1
            if (guessnum > tguess) {
                gorl.innerHTML = "Sorry! You Lost.";
                numdisplay.innerHTML = guessval;
                guessval = 0;
                guessnum = 0;   
                w = 1;
            }else{
                guess.innerHTML = "Guesses: " + guessnum +"/"+tguess;
                if (guessval > randomnum) {
                  gorl.innerHTML = "Lower";
                }else{
                    gorl.innerHTML = "Higher";
                }
            }
        }
    }   
    }
}

 //back button work



playAgain.addEventListener('click',() => {

  mainpage.style.display = "flex";
  container.style.display = "none";
  guessnum = 0;
  gorl.innerHTML = "";
  numdisplay.innerHTML = "";
  randomnum =  Math.round(a+(b-a)*Math.random());
  guess_number.value = ""; 
  guess.innerHTML = "Guesses : 0/" + tguess;
  w = 0;
})
back.addEventListener('click',() => {
    mainpage.style.display = "none";
    container.style.display = "flex";
    w =0;
    guessnum = 0;
    gorl.innerHTML = "";
    numdisplay.innerHTML = "";
    randomnum =  Math.round(a+(b-a)*Math.random());
    guess_number.value = ""; 

})