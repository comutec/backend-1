// Crea el archivo items.json usando writeFileSync
// dentro crea 10 items con id de 1 a 10 y un texto aleatorio
// Ejemplo:
// {
//   "items": [
//     {
//       "id": 1,
//       "text": "f4n8m2t9o1"
//     },
//     {
//       "id": 2,
//       "text": "f4n8m2t9o2"
//     },
//     ...
//   ]
// Tip: Usa const randomString = Math.random().toString(36).slice(2);

import { writeFileSync } from "node:fs";

const items = [];

for (let i = 1; i <= 10; i++) {
  const randomString = Math.random().toString(36).slice(2);
  items.push({
    id: i,
    text: randomString,
  });
}

const jsonData = JSON.stringify({ items }, null, 2);
writeFileSync("./fixtures/items.json", jsonData, "utf-8");
