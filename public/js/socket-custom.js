var socket=io();
socket.on('connect',function(){
    console.log('Conectado al servidor');
});

//ESCUCHAR
socket.on('disconnect',function(){
    console.log('Perdimos conexión con el servidor');
});

//ENVIAR INFORMACION
socket.emit('enviarMensaje',{
    usuario:'Ramon',            
    mensaje:'Hola mundo'
},function(resp){
    console.log('Respuesta Server:' , resp);
});

//ESCUCHAR INFORMACION
socket.on('mensajeBienvenida',function(men){
    console.log(men);
});
