const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path')
//console.log(app);

app.on('before-quit', ()=>{
    console.log('Adios perra!!...');
});

//var, const,, let

app.on('ready', ()=>{

    let win = new BrowserWindow({
        width:800,
        height:600,
        title: 'Segunda Aplicación',
        center:true,
        maximizable:false,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes:true
        })
    )


    win.on('move', ()=>{
         const position=win.getPosition();

         console.log(position)
    })

    win.on('closed', ()=>{
        app.quit();
   })

});
