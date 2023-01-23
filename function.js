const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const calculate = document.querySelector('#calculate');
const clean = document.querySelector('#clean');
const resultado = document.querySelector('#seu-imc');


let pesoValido = true;
let alturaValida = true;


// VALIDANDO DADOS DE ENTRADA (ALTURA E PESO).
function validarEntrada() {
    if(weight.value <= 0 || weight.value > 400) {
        pesoValido = false;
    } else {
        pesoValido = true;
    }

    if(height.value <= 0 || height.value >= 3) {
        alturaValida = false;
    } else {
        alturaValida = true;
    }
}

// CALCULANDO O IMC
function calcularIMC() {
    const imc = weight.value / (height.value * height.value);
    return imc.toFixed(2);
}

clean.addEventListener('click', function() {
    weight.value = '';
    height.value = '';
})

// PEGANDO O RESULTADO E ALTERANDO O BACKGROUND DE ACORDO COM O RESULTADO
function classificarIMC () {
    let mainBG = document.querySelector('main');
    if(calcularIMC() < 18.5) {
        mainBG.style.backgroundColor = '#7FACD6';
        mainBG.style.borderColor = '#7FACD6'
        resultado.innerHTML = `
        <div class="resultado-imc">
            <h1>${calcularIMC()}</h1>
            <p>Você está abaio do peso adequado.</p>
        </div>
    `
    } else if(calcularIMC() >= 18.5 && calcularIMC() < 25) {
        mainBG.style.backgroundColor = '#7AB182'
        mainBG.style.borderColor = '#7AB182'
        resultado.innerHTML = `
            <div class="resultado-imc">
                <h1>${calcularIMC()}</h1>
                <p>Você está dentro do peso adequado.</p>
            </div>
        `
    } else if(calcularIMC() >= 25 && calcularIMC() < 30) {
        mainBG.style.backgroundColor = '#ECCC51'
        mainBG.style.borderColor = '#ECCC51'
        resultado.innerHTML = `
        <div class="resultado-imc">
            <h1>${calcularIMC()}</h1>
            <p>Você está acima do peso adequado (obesidade grau l).</p>
        </div>
    `
    } else if(calcularIMC() > 30 && calcularIMC() < 40) {
        mainBG.style.backgroundColor = '#CB7714'
        mainBG.style.borderColor = '#CB7714'
        resultado.innerHTML = `
        <div class="resultado-imc">
            <h1>${calcularIMC()}</h1>
            <p>Você está muito acima do peso (grau obesidade ll).</p>
        </div>
    `
    } else {
        mainBG.style.backgroundColor = '#C22339'
        mainBG.style.borderColor = '#C22339'
        resultado.innerHTML = `
        <div class="resultado-imc">
            <h1>${calcularIMC()}</h1>
            <p>Você está muito acima do peso (grau obesidade lll).</p>
        </div>
    `
    }
}

function verificandoElement() {
    if(resultado.children.length >= 1) {
        resultado.innerHTML = '';
    }
}


calculate.addEventListener('click', function() {
    validarEntrada();
    if(alturaValida && pesoValido) {
        verificandoElement();
        let resultadoIMC = document.createElement('h1');
        resultadoIMC.innerHTML = calcularIMC();
        resultado.appendChild(resultadoIMC)
        classificarIMC()
    }else if (alturaValida === false && pesoValido === false) {
        alert('Ambas informações estão incorretas, digite-os novamente!')
    }else if (pesoValido === false) {
        alert('O peso informado está abaixo do limite mínimo permitido ou')
    }else {
        alert('A altura informada está incorreta, digite um valor VÁLIDO!');
    }
})



