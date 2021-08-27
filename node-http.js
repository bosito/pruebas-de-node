//modulo de node http
const http = require("http");
const https = require("https");
const fs = require("fs").promises;
const path = require("path");


//rebuest -> <Obj> Peticiones por parte del cliente
//response -> <Obj> Respuesta hacia el cliente
/*
http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.ip);
    console.log(request.protocol);
})
.listen(8000);
*/

http.createServer(async (request, response) => {

    const url = request.url;

    if (url === "/") {
        //Enviar una respuesta al cliente, enviaremos una pagina

        const homePath = path.resolve("./www/index.html");
        //console.log('ruta de la pagina ->',homePath);
        const homePage = await getPages(homePath);

        response.end(homePage);

    } else if (url === "/nosotros") {

        const homePath = path.resolve("./www/nosotros.html");
        //console.log('ruta de la pagina ->',homePath);
        const homePage = await getPages(homePath);

        response.end(homePage);
    } else if (url === "/test") {

        https.get("https://pokeapi.co/api/v2/pokemon", (pokeresponse) => {

            let data = "";

            pokeresponse.on("data", (chunk) => {
                data += chunk;
            });

            //console.log('esta es la data de pokemon ->',data);

            pokeresponse.on("end", () => {

                response.end(data);

            });

        });
    }

})
    .listen(8000);

const getPages = async (path) => {
    try {

        const response = await fs.readFile(path, "utf-8");
        return response;

    } catch (error) {

        throw console.log(error.message);

    };
};