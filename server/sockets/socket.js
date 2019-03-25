
const {io} = require('../server');

io.on('connection',(client)=>{
    
    console.log('Usuario Conectado');

    client.emit('mensajeBienvenida',{
        usuario:'Administrador',
        mensaje:'Bienvenido a esta aplicación'
    });

    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    });

    //escuchar cliente:
    client.on('mensajeBienvenida',(data,callback)=>{

        console.log(data);

        client.broadcast.emit('mensajeBienvenida',data);

        // if (mensaje.usuario){
        //     callback({
        //         resp:'TODO SALIÓ BIEN !!'
        //     });
        // }else{
        //     callback({
        //         resp:'TODO SALIÓ MAL !!'
        //     });
        // }
        
    });

});