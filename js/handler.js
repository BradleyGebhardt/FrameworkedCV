var sections = document.getElementsByClassName('mainSection');
console.log(sections);
var numSec;

function selected(num) {
    numSec = num;
};

$(document).ready(function () {
    $('.mainSection').hide();
    $('.mainSec').addClass('w3-green');
    $('.navBtn').click(function() {
        $('.navBtn').removeClass('w3-green');
        $('.mainSection').hide();
        sections[numSec].style.display = 'block';
        $(this).addClass('w3-green');
    });
    sections[0].style.display = 'block';
});