const port = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const database = require("./database");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/products", (req, res, next) => {
  res.send(database.getProducts());
});

app.get("/products/:id", (req, res, next) => {
  res.send(database.getProduct(req.params.id));
});

app.delete("/products/:id", (req, res, next) => {
  res.send(database.deleteProduct(req.params.id));
});

app.post("/products", (req, res, next) => {
  console.log(req);
  const product = database.saveProducts({
    name: req.body.name,
    price: req.body.price,
  });
  res.send(product);
});

app.put("/products/:id", (req, res, next) => {
  console.log(req);
  const product = database.saveProducts({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price,
  });
  res.send(product);
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}.`);
});
