function generateNumber()
{
    let randomNumber1 = parseInt(Math.random()*10000);
    let randomNumber2 = randomNumber1.toString();
    let randomNumberFinal = randomNumber2.padStart(4, '6');
    document.getElementById('generate-screen').value = randomNumberFinal;
    document.getElementById('submit-message').style.display = 'block';
    
}
function clearScreen()
{
    document.getElementById('input-screen').value = '';
}
function del(){
    let screenValue = document.getElementById('input-screen').value;
    
    document.getElementById('input-screen').value = screenValue.slice(0,-1);

}

function display(digit)
{
   let screenCall = document.getElementById('input-screen');

   if(screenCall.value === '')
   {
    screenCall.value = digit;
   }
   else
   {
    screenCall.value +=digit;
   }
 }

 function submit() {
let generateScreen = document.getElementById('generate-screen').value;
let inputScreen = document.getElementById('input-screen').value;
let errorMessage = document.getElementById('error');
let matchMessage = document.getElementById('match');

if (generateScreen === inputScreen && inputScreen !=='') {
matchMessage.style.display = 'block';
errorMessage.style.display = 'none'; 
} else {
errorMessage.style.display = 'block';
matchMessage.style.display = 'none';
let tryValue =  document.getElementById('try-left').innerText;
tryValue--;
document.getElementById('try-left').innerText = tryValue;
if(tryValue === 0)
{
    document.getElementById('Submit').disabled = 'true';
}


}
}

