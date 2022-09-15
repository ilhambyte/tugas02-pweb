$(document).ready(() => {
    $("td").click(function (event) {
        alert("Ada apa dengan " + $(this).html() + "?");
    });
    $("th").click(function (event) {
        alert("Ada apa dengan " + $(this).html() + "?");
    });
});