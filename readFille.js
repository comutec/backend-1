import { readFileSync } from "node:fs";

const fileContent1 = readFileSync("./fixtures/hello.txt", "utf-8");

console.log(fileContent1);

const fileContent2 = readFileSync("./fixtures/sample.json", "utf-8");

console.log(fileContent2);
console.log(JSON.parse(fileContent2));
