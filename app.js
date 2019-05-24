//requireds
//const fs = require('fs');
//const fs = require('express'); 
//const fs = require('./fs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')
const argv = require('./config/yargs').argv;
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido'.red);
}



//console.log(argv.base);


//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(base);