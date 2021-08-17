/*
* Desafio da aula 153 
*/
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then((response) => {
  const funcionarios = response.data;

  const menor = funcionarios
    .filter((f) => {
      if (f.genero === "F" && f.pais === "China") {
        return true;
      }
      return false;
    })
    .reduce((min, cur) => {
      return min.salario > cur.salario ? min : cur;
    });
  console.log(menor);
});
