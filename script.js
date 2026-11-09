
let curiosidades = [
    "A camiseta branca se tornou uma peça clássica da moda.",
    "O jeans surgiu originalmente como roupa de trabalho.",
    "A moda muda de acordo com a cultura e a época.",
    "O tênis se tornou um item popular em diferentes estilos."
];

let numero = 0;

function mostrarCuriosidade() {
    document.getElementById("curiosidade").innerText =
        curiosidades[numero];

    numero++;

    if (numero >= curiosidades.length) {
        numero = 0;
    }
}

function verificarResposta(resposta) {
    let resultado = document.getElementById("resultado");

    if (resposta === "streetwear") {
        resultado.innerText = "Parabéns! Você acertou!";
    } else {
        resultado.innerText = "Resposta incorreta. Tente novamente!";
    }
}
