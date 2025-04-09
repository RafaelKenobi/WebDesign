/*

var nome = "Rafael";
var idade = 25;

console.log(nome);
console.log(idade);

var multipla = idade * 7;
console.log(multipla);

var friends = ["coco", "ranheta", "palito", "facada"];

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);

var pessoa = {
nome: "freaky",
idade: 20,
eestudante: true
};
console.log(pessoa.nome);

var amigos = [
{
    nome: "João",
    idade: 30,
    eestudante: true
},

{
    nome: "Maria",
    idade: 25,
    eestudante: true
},

{
    nome: "José",
    idade: 40,
    eestudante: false
}
];
console.log(amigos[0].nome);
*/




document.getElementById("turnOn").addEventListener("click", function() {
    if (!dark) {
        document.body.style.transition = "background 2s";
        document.body.style.backgroundColor = "black";
        document.getElementById("lamp").style.transition = "2s"
        document.getElementById('lamp').src='bulb-off.png';


        dark = true;
    } else {
        document.body.style.transition = "background 2s";
        document.body.style.backgroundColor = "white";
        document.getElementById("lamp").style.transition = "2s";
        document.getElementById('lamp').src='bulb-on.png';
        dark = false;
    }

});