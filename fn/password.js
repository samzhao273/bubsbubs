import CORRECT_PASSWORD from '../const/index.js';

export function checkPassword() {
    var passwordInput = document.getElementById('passwordInput').value;
    if (passwordInput.toUpperCase()  === CORRECT_PASSWORD) {
        console.log('this is right')
    } else {
        alert('Incorrect password, please try again.');
    }
} 