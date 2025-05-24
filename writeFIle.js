import { writeFileSync } from "node:fs";

const data = {
  Nombre: "Jose",
  Edad: 20,
  Ciudad: "Lima",
};

const jsonData = JSON.stringify(data, null, 2);

writeFileSync("./fixtures/records.json", jsonData, "utf-8");
