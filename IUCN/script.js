// navbar
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




const html2canvas = require('html2canvas');

// Load the HTML file
const htmlFile = 'img/IUCN_final.html';
const $ = cheerio.load(htmlFile);

// Convert the HTML file to a canvas element
const canvas = html2canvas($, {
  width: 100,
  height: 500,
});

// Embed the canvas element in another HTML file
const parentHTML = 'iucn.html';
const $parent = cheerio.load(parentHTML);
$parent.append(canvas).append('');

                              
                              
                              
                              

