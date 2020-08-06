import $ from 'jquery/dist/jquery.min.js';

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
