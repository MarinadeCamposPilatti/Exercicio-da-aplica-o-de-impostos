let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if(produtoA.internacional == true){
    let valorcomimposto = produtoA.valor*1.2
    console.log("O produto é internacional.")
    console.log("O valor da " + produtoA.nome + " com impostos é" + " " + valorcomimposto + ".") 
}

if(produtoB.internacional == true){
    let valorcomimposto = produtoB.valor*1.2
    console.log("O produto é internacional.")
    console.log("O valor do " + produtoB.nome + " com impostos é" + " " + valorcomimposto + ".")
}

if(produtoC.internacional == false){
    let valorcomimposto = produtoC.valor*1.12
    console.log("O produto é nacional.")
    console.log("O valor da " + produtoC.nome + " com impostos é" + " " + valorcomimposto + ".")
}
