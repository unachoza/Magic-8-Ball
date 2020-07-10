const button = document.querySelector('button');
var displayAnswer = document.querySelector('.displayAnswer');
var frame1 = document.querySelector('#frame-1');
var form = document.querySelector('form');
var ask = document.getElementById('ask');
var submit = document.getElementById('submit');

document.querySelector('#frame-1').addEventListener('click', function () {
  document.querySelector('#frame-1').classList.add('active');
});
function addActive() {
  document.querySelector('#frame-1').classList.add('.active');
}

function reloading() {
  location.reload();
}
function shake() {
  document.getElementById('frame-1').className = 'shake';
  switch (num) {
    case 0:
      answer = 'It is certain';
      break;
    case 2:
      answer = 'It is decidedly so';
      break;
    case 3:
      answer = 'Reply hazy try again';
      break;
    case 4:
      answer = 'Cannot predict now';
      break;
    case 5:
      answer = 'nope';
      break;
    case 8:
      answer = 'Without a doubt';
      break;
    case 6:
      answer = 'My sources say no';
      break;
    case 7:
      answer = 'Outlook not so good';
      break;
    case 1:
      answer = 'Signs point to yes';
      break;
    case 9:
      answer = 'Yes - definitely.';
      break;
    case 10:
      answer = 'Better not tell you now.';
      break;
    case 11:
      answer = 'Concentrate and ask again';
      break;
    case 12:
      answer = 'Very doubtful';
      break;
    case 13:
      answer = " Don't count on it";
      break;
  }
  displayAnswer.innerHTML = answer;
  setInterval('frame1.style.opacity = 0', 1000);
  ask.style.visibility = 'visible';
  submit.style.visibility = 'hidden';
}

var userQuestion = document.getElementById('question').value;

function handleSubmit() {
  form.style.visibility = 'hidden';
  form.style.display = 'none';
  submit.style.visibility = 'hidden';
  ask.style.visibility = 'visible';

  var input_value = document.getElementById('question').value;
  document.getElementById('displayQuestion').innerHTML = input_value;
}
function clicked() {
  var input_value = document.getElementById('data').value;
  document.getElementById('display').innerHTML = input_value;
}
function myyFunction() {}

let num = Math.floor(Math.random() * 12);
let randomNumber = Math.floor(num);
let eightBall = '';
