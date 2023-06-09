interface Car {
  model?: string
  brand: string
}

const car: Required<Car> = {
  brand: 'Fiat',
  model: 'Palio',
}

console.log(car)
