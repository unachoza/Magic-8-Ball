
const button8 = document.getElementById("button")
var displayAnswer = document.querySelector(".displayAnswer")
var frame1 = document.querySelector("#frame-1")


document.querySelector("#frame-1").addEventListener('click', function(){
    console.log('clicked')
    document.querySelector("#frame-1").classList.add('active')
})
function addActive(){
    console.log('clicked')
    document.querySelector("#frame-1").classList.add('.active')
}

function magicFunction (){
    console.log("Will I have time to rest in between chores?")
    switch(num){
        case 0: 
        console.log('It is certain')
        answer = "It is certain"
        console.log("answer is : " + answer)
        break;
        case 2:
        console.log('It is decidedly so')
        answer = "It is decidedly so"
        console.log("answer is : " + answer)
        break;
        case 3:
        console.log('Reply hazy try again')
        answer = "Reply hazy try again"
        console.log("answer is : " + answer)
        break;
        case 4:
        console.log('Cannot predict now')
        answer = "Cannot predict now"
        console.log("answer is : " + answer)
        break;
        case 5:
        console.log('nope')
        answer = "nope"
        console.log("answer is : " + answer)
        break;
          case 6:
        console.log('My sources say no')
        answer = "My sources say no"
        console.log("answer is : " + answer)
        break;
        case 7:
        console.log('Outlook not so good')
        answer = "Outlook not so good"
        console.log("answer is : " + answer)
        break;
        case 1:
        console.log('Signs point to yes')
        answer = "Signs point to yes"
        console.log("answer is : " + answer)
        break;
      }
    console.log('showing')
    displayAnswer.innerHTML = answer
    frame1.style.visibility = "hidden"
    }

let userQuestion = 'Should I go to the grocery store today?'
let num =  Math.floor(Math.random() * 7)
let randomNumber = Math.floor(num)
let eightBall = ''

console.log(userQuestion)
