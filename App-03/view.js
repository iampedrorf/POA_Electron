var $ = require('jquery');
var count = 0;

//JS Estandar
var clickCounter = document.getElementById('click-counter');
    clickCounter.innerHTML = count.toString();




$('#countbtn').on('click', ()=> {
    count ++;
    $('#click-counter').text(count.toString());
});

