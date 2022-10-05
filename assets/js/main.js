const menuTombol = document.querySelector('.menu-tombol input');
const nav = document.querySelector('nav ul');

menuTombol.addEventListener('click', function () {
    nav.classList.toggle('slide');
});


$(document).ready(() => {
    $("td").click(function (event) {
        alert("Ada apa dengan " + $(this).html() + "?");
    });
    $("th").click(function (event) {
        alert("Ada apa dengan " + $(this).html() + "?");
    });
});