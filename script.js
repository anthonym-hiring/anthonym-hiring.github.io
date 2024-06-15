
// for navbar
const header = document.querySelector(".navbar")
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


// scripts to run copy text to clipboard
var copyButton = document.getElementById('copy-button1');
copyButton.addEventListener('click', function() {
var textToCopy = 'anthony-masingale@ouhsc.edu';
navigator.clipboard.writeText(textToCopy);
alert('Text has been copied to the clipboard!');
});
var copyButton = document.getElementById('copy-button2');
copyButton.addEventListener('click', function() {
var textToCopy = 'anthony-masingale@ouhsc.edu';
navigator.clipboard.writeText(textToCopy);
alert('Text has been copied to the clipboard!');
});        
var copyButton = document.getElementById('copy-button3');
copyButton.addEventListener('click', function() {
var textToCopy = 'anthony-masingale@ouhsc.edu';
navigator.clipboard.writeText(textToCopy);
alert('Text has been copied to the clipboard!');
});         
var copyButton = document.getElementById('copy-button4');
copyButton.addEventListener('click', function() {
var textToCopy = 'anthony-masingale@ouhsc.edu';
navigator.clipboard.writeText(textToCopy);
alert('Text has been copied to the clipboard!');
});
         
                    