document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyPassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characters = '';
    if (includeUppercase) characters += uppercaseLetters;
    if (includeLowercase) characters += lowercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (characters === '') {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('passwordOutput').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('passwordOutput');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

var slider = document.getElementById("myRange");
var input = document.getElementById("length");
var output = document.getElementById("length2");
input.value = slider.value;

slider.oninput = function() {
    input.value = this.value;
}