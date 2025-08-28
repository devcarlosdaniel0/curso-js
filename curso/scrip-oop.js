const carro = {
    marca: "Kwid",
    ano: 2025,
    cor: "amarelo"
}

console.log(carro);

class Carro {
    constructor(marca, ano, cor) {
        this.marca = marca;
        this.ano = ano;
        this.cor = cor;
    }

    buzinar() {
        return this.marca + " biii";
    }
}

const celta = new Carro("Celta", 2002, "prateado"); 
const gol = new Carro("Gol", 2013, "preto");
console.log(celta);

console.log("Marca do carro: " + gol.marca);
console.log(gol.buzinar());
console.log(celta.buzinar());