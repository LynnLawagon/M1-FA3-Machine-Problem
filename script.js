document.getElementById('checkemail').addEventListener('click', checkingemail);

function checkingemail(){

let email = document.getElementById('email').value;
let result = document.getElementById('result');

if(email.includes('@')){
    result.innerText = 'Valid';
} else {
    result.innerText = 'Invalid';
}

}

document.getElementById('checkchars').addEventListener('click', checkingchars);
function checkingchars(){
    let text = document.getElementById('text').value.trim();
    let count = text.length;

    document.getElementById('cresult').innerText = `Character count: ${count}`;

    
}