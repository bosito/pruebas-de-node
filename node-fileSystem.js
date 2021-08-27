
//Primer modulo de node file sistem
//primer tema fileSystem.
//import { readFile } from 'fs/promises';

const fs = require("fs").promises;
const path = require("path");

const rutaArchivo = path.resolve("textoEjemplo.txt");
console.log(rutaArchivo);


/*
fs.readFile(rutaArchivo, "utf8", (error, data) => {
    if (!error) return console.log(data);
    else return console.log(error);
});
*/
/*
fs.writeFile(rutaArchivo, "hola :)", (error)=>{
    if (error) return console.log(error);
});
*/

/*
(async () => {
    try {

        const response = await fs.readFile(rutaArchivo, "utf8");

        console.log(response);

    } catch (error) {
        throw console.log('so soy un error ->', error);
    }
})();
*/
/*
fs.readFile(rutaArchivo, "utf8")
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err
        )
    });
*/