import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

app.get("/api/leer", (req, res) => {
  // Lee el archivo json llamado counter.json
  res.json({ count: 0 });
});

app.get("/api/incrementar", (req, res) => {
  // Actualiza el archivo counter.json
  res.send("Incrementado.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
