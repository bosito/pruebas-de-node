import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

console.log(path.resolve("package.json"));

//para que funcione import en el pakage.json debe tener  "type": "module", agregado.
//las variables globales de node no funcionan con import

//console.log('hola soy una variable global ->',__dirname);

/* 
si quieres hacer funcionar las variables globales
 necesitas hacer esto
*/

const __filename = fileURLToPath(import.meta.url);
const ___dirname = dirname(__filename);

console.log(`soy filname -> ${__filename} y yo soy ${___dirname}`);