alert("magic!")

const button8 = document.getElementById("button")


function magicFunction (){
    console.log("You better believe I was clicked")
}

let userQuestion = 'Will I sleep well tonight?'
let num =  Math.floor(Math.random() * 7)
let randomNumber = Math.floor(num)
let eightBall = ''

console.log(userQuestion)
switch(num){
  case 0: 
  console.log('It is certain')
  break;
  case 2:
  console.log('It is decidedly so')
  break;
  case 3:
  console.log('Reply hazy try again')
  break;
  case 4:
  console.log('Cannot predict now')
  break;
  case 5:
  console.log('nope')
  break;
	case 6:
  console.log('My sources say no')
  break;
  case 7:
  console.log('Outlook not so good')
  break;
  case 1:
  console.log('Signs point to yes')
  break;
}