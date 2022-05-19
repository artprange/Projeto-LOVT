const express = require("express");
const { send } = require("express/lib/response");

let app = express();

app.get("/", (req, res) => res.send("Olar mundo"));
app.get("/contatos", (req, res) => res.send(["contato1, macaco, contato3"]));

const produto = {
  tipo: null,
  preco: null,
  quantidade: null,
};

app.get("/produto/adicionar", (req, res) => res.send(produto));
// criando um servidor

app.listen(3030, () => console.log("servidor rodando em 3030"));

// app.get("/home", (req, res)=>res.send("Olá, estamos na página home)"));

// let produto = {
//   tipo: null,
//   preco: null,
//   quantidade: null,
// };

// app.get("/produto/adicionar", (req, res) => res.send(produto));
