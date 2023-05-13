$(document).ready(() => {
    $('#btn1').click(() => {
       $('.box1').animate({
        height: '500px',
        width: '500px'
       }, 3000)
    });
});