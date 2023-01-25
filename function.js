const inputWeight = document.querySelector('[data-js="weight"]');
const inputHeight = document.querySelector('[data-js="height"]');
const calculateButton = document.querySelector('[data-js="calculateBtn"]');
const clearInputButton = document.querySelector('[data-js="clean"]');
const result = document.querySelector('[data-js="container-result-imc"]');

let validWeight = true;
let validHeight = true;

// VALIDANDO DADOS DE ENTRADA (ALTURA E PESO).
const dataValidate = () => {
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
const calculateImc = () => {
    const imc = inputWeight.value / (inputHeight.value * inputHeight.value);
    return imc.toFixed(2);
}

// CLEAR INPUTS
const clearButton = () =>  {
    inputWeight.value = '';
    inputHeight.value = '';
}

// PEGANDO O RESULTADO E ALTERANDO O BACKGROUND DE ACORDO COM O RESULTADO
const classifyImc = () => {
    let mainBG = document.querySelector('main');
    if(calculateImc() < 18.5) {
        mainBG.style.backgroundColor = '#7FACD6';
        mainBG.style.borderColor = '#7FACD6'

        result.innerHTML = `
            <div class="resultado-imc">
                <h1>${calculateImc()}</h1>
                <p>Você está abaio do peso adequado.</p>
            </div>
        `
    } else if(calculateImc() >= 18.5 && calculateImc() < 25) {
        mainBG.style.backgroundColor = '#7AB182'
        mainBG.style.borderColor = '#7AB182'

        result.innerHTML = `
            <div class="resultado-imc">
                <h1>${calculateImc()}</h1>
                <p>Você está dentro do peso adequado.</p>
            </div>
        `
    } else if(calculateImc() >= 25 && calculateImc() < 30) {
        mainBG.style.backgroundColor = '#ECCC51'
        mainBG.style.borderColor = '#ECCC51'

        result.innerHTML = `
            <div class="resultado-imc">
                <h1>${calculateImc()}</h1>
                <p>Você está acima do peso adequado (obesidade grau l).</p>
            </div>
        `
    } else if(calculateImc() > 30 && calculateImc() < 40) {
        mainBG.style.backgroundColor = '#CB7714'
        mainBG.style.borderColor = '#CB7714'

        result.innerHTML = `
            <div class="resultado-imc">
                <h1>${calculateImc()}</h1>
                <p>Você está muito acima do peso (grau obesidade ll).</p>
            </div>
        `
    } else {
        mainBG.style.backgroundColor = '#C22339'
        mainBG.style.borderColor = '#C22339'

        result.innerHTML = `
            <div class="resultado-imc">
                <h1>${calculateImc()}</h1>
                <p>Você está muito acima do peso (grau obesidade lll).</p>
            </div>
        `
    }
}

// VERIFICANDO SE CONTÈM ELEMENTO DE RESULTADO CRIADO
const checkElement = () => {
    if(result.children.length >= 1) {
        result.innerHTML = '';
    }
}

// FAZENDO O CALCULO E EXIBINDO
const displayingImc = () => {
    dataValidate();
    if(validHeight && validWeight) {
        checkElement();

        let resultadoIMC = document.createElement('h1');
        resultadoIMC.innerHTML = calculateImc();
        result.appendChild(resultadoIMC)

        classifyImc()
    }else if (validHeight === false && validWeight === false) {
        alert('Ambas informações estão incorretas, digite-os novamente!')
    }else if (validWeight === false) {
        alert('O peso informado está abaixo do limite mínimo permitido ou')
    }else {
        alert('A altura informada está incorreta, digite um valor VÁLIDO!');
    }
}

calculateButton.addEventListener('click', displayingImc);
clearInputButton.addEventListener('click', clearButton);


