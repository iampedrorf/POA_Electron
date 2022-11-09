let $ = require('jquery');
let fs= require('fs');

//JS Estandar
//var clickCounter = document.getElementById('click-counter');
   // clickCounter.innerHTML = count.toString();

let fileName = 'contactos.txt';
let numero = 0;
 
$('form').on('submit', (event) =>{
    event.preventDefault();
    let nombre = $('#txtNombre').val();
    let correo = $('#txtCorreo').val();

    //Hacerlo sin ES6
    //fs.appendFileSync(fileName,nombre+','+correo+'\n');

    //Hacerlo con ES6
    fs.appendFileSync(fileName,`${nombre},${correo}'\n'`);

    //funcion para llenarlo en el html
    addContactHTML(nombre,correo);
});

//evento clic - addContact
$('#addContact').on('click', ()=>{
    let nombre = $('#txtNombre').val();
    let correo = $('#txtCorreo').val();

    //Hacerlo sin ES6
    //fs.appendFileSync(fileName,nombre+','+correo+'\n');

    //Hacerlo con ES6
    fs.appendFileSync(filename,`${nombre},${correo}'\n'`);

    //funcion para llenarlo en el html
    addContactHTML(nombre,correo);
});

addContactHTML = function(nombre,correo){
    if(nombre && correo){
        numero++;
        //ES6
        let estructuraHtml = 
            ` <tr>
            <td>${numero}</td>
            <td>${nombre}</td>
            <td>${correo}</td>
            </tr>`;
        $('#contact-table').append(estructuraHtml);
    }
}


$('#countbtn').on('click', ()=> {
    count ++;
    $('#click-counter').text(count.toString());
});

loadContact = function(){
    if(fs.existsSync(fileName)){
     let data = fs.readFileSync(fileName,'utf8').split('\n');
     data.forEach((contacto, index) => {
         let [nombre,correo] = contacto.split(',');
        addContactHTML(nombre,correo);
     });
    }else{
     fs.writeFile(fileName, '', (err)=>{
         if(err){
             console.log(err);
         }
     });
    }
 }
 
 loadContact();

