import express from "express";
import { readFileSync, writeFileSync } from "node:fs";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

app.get("/api/leer", (req, res) => {
  // Lee el archivo json llamado counter.json
  const data = readFileSync("./fixtures/counter.json", "utf-8");
  const parsedData = JSON.parse(data);
  res.json(parsedData);
});

app.get("/api/incrementar", (req, res) => {
  // Actualiza el archivo counter.json
  const data = readFileSync("./fixtures/counter.json", "utf-8");
  const parsedData = JSON.parse(data);
  parsedData.count += 1;
  writeFileSync("./fixtures/counter.json", JSON.stringify(parsedData, null, 2));
  res.send("Incrementado.");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
