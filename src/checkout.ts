export default class Checkout {
  orderItems: { item: string, price: number }[]

  constructor() {
    this.orderItems = []
  }
}