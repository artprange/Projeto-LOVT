const express = require("express");
const app = express();

let produto = {
  tipoProduto: null,
  preco: null,
  quantidade: null,
};

app.post(produto, ("living", 1245, 300)=> res.send(produto));

app.get("/produto/criar", (res, req) => res.send(produto));
