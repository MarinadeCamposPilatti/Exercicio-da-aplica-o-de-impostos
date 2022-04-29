let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

console.log("O valor da " + produtoA.nome + " com impostos é")
if(produtoA.internacional == true){
    produtoA.valor*1.2
}

console.log("O valor do " + produtoB.nome + " com impostos é")
if(produtoB.internacional == true){
    produtoB.valor*1.2
}

console.log("O valor da " + produtoC.nome + " com impostos é")
if(produtoC.internacional == false){
    produtoC.valor*1.12
}