const fs = require('fs');
const colors = require('colors');

let data = '';

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base*i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`.blue);
        });

    })
}

let listarTabla = (base, limite = 10) => {
    for (i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base*i }`.yellow);
    }
}





module.exports = {
    crearArchivo,
    listarTabla
}