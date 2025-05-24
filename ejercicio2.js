// leer el archivo persona.json e imprimir los datos como se muetra, sin modificar el contenido del archivo json.:
// Usuario de nombre Juan y edad 30 vive en Madrid
import { readFileSync} from "node:fs";

const fileContent = readFileSync("./fixtures/persona.json", "utf-8");

const jsonData = JSON.parse(fileContent);

console.log( "Usuario de nombre " + jsonData.Nombre + " y edad " + jsonData.Edad + " vive en " + jsonData.Ciudad);