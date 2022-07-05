export default class Checkout {
  items: { item: string | undefined, price: number | undefined }[]

  constructor() {
    this.items = []
  }

  printBill() {
    return this.items.map(i => `${i.item}: ${i.price} \n`) + `Total: ${this.calculateTotal()}`
  }

  calculateTotal(items = this.items) {
    let total = 0
    items.forEach(i => i.price ? total += i.price : total)
    return total
  }
}