var net = require('net');
var server = net.createServer(function(connection){
    
    console.log('Cliente Conectado');

    connection.on('end', function(){
        console.log('Cliente Desconectado')
    });

    connection.write('Is Britney Bitch!!!');
    connection.pipe(connection);
});

server.listen(8080, function(){
    console.log('El servidor se esta ejecutando')
});