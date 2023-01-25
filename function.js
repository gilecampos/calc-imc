const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const calculateButton = document.querySelector('#calculateBtn');
const clearInputValueBtn = document.querySelector('#clean');
const result = document.querySelector('#you-imc');


let validWeight = true;
let validHeight = true;


// VALIDANDO DADOS DE ENTRADA (ALTURA E PESO).
function dataValidate() {
    if(inputWeight.value <= 0 || inputWeight.value > 400) {
        validWeight = false;
    } else {
        validWeight = true;
    }

    if(inputHeight.value <= 0 || inputHeight.value >= 3) {
        validHeight = false;
    } else {
        validHeight = true;
    }
}

// CALCULANDO O IMC
function calcIMC() {
    const imc = inputWeight.value / (inputHeight.value * inputHeight.value);
    return imc.toFixed(2);
}

// CLEAR INPUTS
function inputClear() {
    inputWeight.value = '';
    inputHeight.value = '';
};

// PEGANDO O RESULTADO E ALTERANDO O BACKGROUND DE ACORDO COM O RESULTADO
function classIMC () {
    let mainBG = document.querySelector('main');
    if(calcIMC() < 18.5) {
        mainBG.style.backgroundColor = '#7FACD6';
        mainBG.style.borderColor = '#7FACD6'

        result.innerHTML = `
            <div class="resultado-imc">
                <h1>${calcIMC()}</h1>
                <p>Você está abaio do peso adequado.</p>
            </div>
        `
    } else if(calcIMC() >= 18.5 && calcIMC() < 25) {
        mainBG.style.backgroundColor = '#7AB182'
        mainBG.style.borderColor = '#7AB182'

        result.innerHTML = `
            <div class="resultado-imc">
                <h1>${calcIMC()}</h1>
                <p>Você está dentro do peso adequado.</p>
            </div>
        `
    } else if(calcIMC() >= 25 && calcIMC() < 30) {
        mainBG.style.backgroundColor = '#ECCC51'
        mainBG.style.borderColor = '#ECCC51'

        result.innerHTML = `
            <div class="resultado-imc">
                <h1>${calcIMC()}</h1>
                <p>Você está acima do peso adequado (obesidade grau l).</p>
            </div>
        `
    } else if(calcIMC() > 30 && calcIMC() < 40) {
        mainBG.style.backgroundColor = '#CB7714'
        mainBG.style.borderColor = '#CB7714'

        result.innerHTML = `
            <div class="resultado-imc">
                <h1>${calcIMC()}</h1>
                <p>Você está muito acima do peso (grau obesidade ll).</p>
            </div>
        `
    } else {
        mainBG.style.backgroundColor = '#C22339'
        mainBG.style.borderColor = '#C22339'

        result.innerHTML = `
            <div class="resultado-imc">
                <h1>${calcIMC()}</h1>
                <p>Você está muito acima do peso (grau obesidade lll).</p>
            </div>
        `
    }
}

// VERIFICANDO SE CONTÈM ELEMENTO DE RESULTADO CRIADO
function checkElement() {
    if(result.children.length >= 1) {
        result.innerHTML = '';
    }
}

// FAZENDO O CALCULO E EXIBINDO
function calculateImc() {
    dataValidate();
    if(validHeight && validWeight) {
        checkElement();

        let resultadoIMC = document.createElement('h1');
        resultadoIMC.innerHTML = calcIMC();
        result.appendChild(resultadoIMC)

        classIMC()
    }else if (validHeight === false && validWeight === false) {
        alert('Ambas informações estão incorretas, digite-os novamente!')
    }else if (validWeight === false) {
        alert('O peso informado está abaixo do limite mínimo permitido ou')
    }else {
        alert('A altura informada está incorreta, digite um valor VÁLIDO!');
    }
}

calculateButton.addEventListener('click', calculateImc);
clearInputValueBtn.addEventListener('click', inputClear);


