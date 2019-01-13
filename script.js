
const button8 = document.getElementById("button")
const answer = document.querySelector(".answer")


function magicFunction (){
    console.log("You better believe I was clicked")
    button.style.visibility = 'hidden'
}

let userQuestion = 'Will I sleep well tonight?'
let num =  Math.floor(Math.random() * 7)
let randomNumber = Math.floor(num)
let eightBall = ''

console.log(userQuestion)
switch(num){
  case 0: 
  console.log('It is certain')
  answer.innerHTML = "It is certain"
  break;
  case 2:
  console.log('It is decidedly so')
  answer.innerHTML = "It is decidedly so"
  break;
  case 3:
  console.log('Reply hazy try again')
  answer.innerHTML = "Reply hazy try again"
  break;
  case 4:
  console.log('Cannot predict now')
  answer.innerHTML = "Cannot predict now"
  break;
  case 5:
  console.log('nope')
  answer.innerHTML = "nope"
  break;
	case 6:
  console.log('My sources say no')
  answer.innerHTML = "My sources say no"
  break;
  case 7:
  console.log('Outlook not so good')
  answer.innerHTML = "Outlook not so good"
  break;
  case 1:
  console.log('Signs point to yes')
  answer.innerHTML = "Signs point to yes"
  break;
}