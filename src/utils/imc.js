const classificationIMC = [
  { limit: 18.5, description: 'Abaixo do peso' },
  { limit: 24.9, description: 'Peso normal' },
  { limit: 29.9, description: 'Sobrepeso' },
  { limit: 34.9, description: 'Obesidade grau 1' },
  { limit: 39.9, description: 'Obesidade grau 2' },
  { limit: Infinity, description: 'Obesidade grau 3' }
];

export class IMC {
  constructor({ weight, height }) {
    this.weight = weight
    this.height = height
  }

  get classification() {
    const imc = this.calculation()

    return {
      ...classificationIMC.find(item => imc < item.limit),
      value: imc
    }
  }

  calculation() {
    const imc = this.weight / ( this.height * this.height )
    return Number(imc).toFixed(2)
  }
}