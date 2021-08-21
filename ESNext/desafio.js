const fs = require("fs");
const path = require("path");

lerArquivo = (caminho) =>
  new Promise((resolve, reject) => {
    try {
      fs.readFile(caminho, (erro, conteudo) => {
        if (erro) {
          reject(new Error(erro));
        } else {
          resolve(conteudo.toString());
        }
      });
    } catch (e) {
      reject(e);
    }
  });

lerArquivo(path.join(__dirname, "dados.txt"))
  .then((conteudo) => console.log(conteudo))
  .catch((e) => console.log(e.message));
