
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



// for contact copy buttons
$(document).ready(function() {
  $('[data-clipboard-text]').on('click', function() {
    const text = $(this).attr('data-clipboard-text');
    navigator.clipboard.writeText(text);
  });
});