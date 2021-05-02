//llamar la libreria del protocolo

let red =require('http');
let archivo = require('fs');

red.createServer(function(peticion,respuesta){
    //peticion
    
    //let pagina = archivo.readFileSync('./algo.html');//sincronica
    let pagina = archivo.readFile('./index.html',(err,pagina)=>{
        // respuesta
        console.log("servidor responde");
        //respuesta.writeHead(404,{"Content-Type":"text/html"})
        respuesta.write(pagina);
        respuesta.end();
    });
}).listen(5000);

