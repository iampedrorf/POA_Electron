const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require
//console.log(app);

app.on('before-quit', ()=>{
    console.log('Saliendo...');
});

//var, const,, let

app.on('ready', ()=>{

    let win = new BrowserWindow({
        width:800,
        height:600,
        title: 'Primer Aplicación',
        center:true,
        maximizable:false,
        webPreferences:{
            nodeIntegration:true,
            
        }
    });

    win.on('move', ()=>{
         const position=win.getPosition();

         console.log(position)
    })

    win.on('closed', ()=>{
        app.quit();
   })

});
