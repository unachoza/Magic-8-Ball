
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
    setInterval('frame1.style.opacity = 0', 1000)
    
    }
    function reloading (){
        console.log('refresh!')
        location.reload();

    }

    // function handleSubmit(){
    //     console.log("submitted")
    //     console.log("the value is " + value)
    // }

    var userQuestion = document.getElementById("question").value

    function handleSubmit(){
        console.log("submitted")
        console.log("the value is " + userQuestion)
        var input_value = document.getElementById('question').value;
    document.getElementById('display').innerHTML = input_value;


    }
function clicked() {
    var input_value = document.getElementById('data').value;
    document.getElementById('display').innerHTML = input_value;
}
    function myyFunction(){
        console.log('yes yes no')
    }

let num =  Math.floor(Math.random() * 7)
let randomNumber = Math.floor(num)
let eightBall = ''

console.log(userQuestion)
