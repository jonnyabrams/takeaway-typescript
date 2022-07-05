export default class Order {
  basket: { item: string, quantity: number, price: number }[]

  constructor() {
    this.basket = []
  }
}
