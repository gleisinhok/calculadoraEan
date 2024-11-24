const calculadora = document.getElementById('calculadora');
const reset = document.getElementById('calculadora');

function calculoDigitoVerificador(numeroDigitado) {
    let digito = numeroDigitado.split('').map(Number)
    let somaImpar = 0
    let somaPar = 0
    
    for (i = 0; i < digito.length; i++) {
        if (i % 2 == 0) {
            somaPar += digito[i]
        } else {
            somaImpar += digito[i]
        }
    }
    
    resultadoImpar = somaImpar * 3
    resultadoSomaImparPar = resultadoImpar + somaPar

    digitoVerificador = (10 - resultadoSomaImparPar % 10) % 10
    return digitoVerificador
}

calculadora.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroDigitado = String(document.getElementById('numeroDigitado').value);

    digitoVerificador = calculoDigitoVerificador(numeroDigitado)

    const resultado = numeroDigitado.concat(digitoVerificador);

    document.getElementById("resultadoFinal").textContent = resultado;
})

reset.addEventListener('reset', function(a) {
    document.getElementById("resultadoFinal").textContent = "Resultado";
})