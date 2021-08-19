// let e const
{
  var a = 2;
  let b = 3;
  console.log("na estrutura var a =", a);
  console.log("na estrutura let b =", b);
}

console.log("fora da estrutura var a =", a);
//console.log("fora da estrutura let b =", b); //Erro Not Defined

//Template String
const produto = "iPad";
console.log(`${produto} é caro!`);

//Destructuring
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome} = {nome: 'ana', idade: 9}
console.log(i, nome)
