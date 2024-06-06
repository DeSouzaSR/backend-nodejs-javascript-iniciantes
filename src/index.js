const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log("Entrou aqui"); // vai no console
  res.send("app GET"); // vai no navegador
});

app.post("/", (req, res) => {
  res.send("App POST");
});

app.delete("/", (req, res) => {
  res.send("app DELETE");
});

app.listen(PORT, () => {
  console.log(`App online na porta ${PORT}`);
});
