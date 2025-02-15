const inputWeight = document.querySelector('[data-js="weight"]');
const inputHeight = document.querySelector('[data-js="height"]');
const calculateButton = document.querySelector('[data-js="calculateBtn"]');
const clearInputButton = document.querySelector('[data-js="clean"]');
const result = document.querySelector('[data-js="container-result-imc"]');

let validWeight = true;
let validHeight = true;

// VALIDANDO DADOS DE ENTRADA (ALTURA E PESO).
const dataValidate = () => {
	if (inputWeight.value <= 0 || inputWeight.value > 400) {
		validWeight = false;
	} else {
		validWeight = true;
	}

	if (inputHeight.value <= 0 || inputHeight.value >= 3) {
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
const clearButton = () => {
	inputWeight.value = '';
	inputHeight.value = '';
}

const classifyImc = () => {
	const mainBG = document.querySelector('main');
	const imc = calculateImc();

	const ranges = [
		{ min: 0, max: 18.5, color: '#7FACD6', message: 'Você está abaixo do peso adequado.' },
		{ min: 18.5, max: 25, color: '#7AB182', message: 'Você está dentro do peso adequado.' },
		{ min: 25, max: 30, color: '#ECCC51', message: 'Você está acima do peso adequado (obesidade grau l).' },
		{ min: 30, max: 40, color: '#CB7714', message: 'Você está muito acima do peso (grau obesidade ll).' },
		{ min: 40, max: Infinity, color: '#C22339', message: 'Você está muito acima do peso (grau obesidade lll).' },
	];

	for (let range of ranges) {
		if (imc >= range.min && imc < range.max) {
			mainBG.style.backgroundColor = range.color;
			mainBG.style.borderColor = range.color;

			result.innerHTML = `
                <div class="resultado-imc">
                    <h1>${imc}</h1>
                    <p>${range.message}</p>
                </div>
            `;
			break;
		}
	}
	console.log(ranges.message)
}

// VERIFICANDO SE CONTÈM ELEMENTO DE RESULTADO CRIADO
const checkElement = () => {
	if (result.children.length >= 1) {
		result.innerHTML = '';
	}
}

// FAZENDO O CALCULO E EXIBINDO
const displayingImc = () => {
	dataValidate();
	if (validHeight && validWeight) {
		checkElement();

		let resultadoIMC = document.createElement('h1');
		resultadoIMC.innerHTML = calculateImc();
		result.appendChild(resultadoIMC)

		classifyImc()
	} else if (validHeight === false && validWeight === false) {
		alert('Ambas informações estão incorretas, digite-os novamente!')
	} else if (validWeight === false) {
		alert('O peso informado está abaixo do limite mínimo permitido ou')
	} else {
		alert('A altura informada está incorreta, digite um valor VÁLIDO!');
	}
}

calculateButton.addEventListener('click', displayingImc);
clearInputButton.addEventListener('click', clearButton);


