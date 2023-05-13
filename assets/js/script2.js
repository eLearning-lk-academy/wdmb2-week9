$(document).ready(() => {
    $('#btn1').click(() => {
        
        $('.box1').slideUp(1000);
        $('.box2').slideDown(1000);

    });
    $('#btn2').click(() => {
        
        $('.box2').slideUp(1000);
        $('.box1').slideDown(1000);
    });
    $('#btn3').click(() => {
        
        $('.box2').slideToggle(1000);
        $('.box1').slideToggle(1000);
    });
});