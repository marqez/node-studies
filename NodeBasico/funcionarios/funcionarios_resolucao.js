/*
 * RESOLUÇÃO Desafio da aula 153
 * OBS:. a versão ficou melhor para leitura e entendimento, tem melhor coesão com o encadeamento de filters e reducers
 */
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const mulheres = (f) => f.genero === "F";
const chinesas = (c) => c.pais === "China";
const menorSalario = (men, cor) => men.salario < cor.salario ? men : cor

  axios.get(url).then((response) => {
    const funcionarios = response.data;

    const menor = funcionarios
      .filter(mulheres)
      .filter(chinesas)
      .reduce(menorSalario)
    console.log(menor);
  });
