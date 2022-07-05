export default class Checkout {
  items: { item: string | undefined, price: number | undefined }[]

  constructor() {
    this.items = []
  }

  printBill(items = this.items): string {
    return items.map(i => `${i.item}: £${i.price?.toFixed(2)}`).join('\n') + "\n" + `Total: £${this.calculateTotal(items).toFixed(2)}`
  }

  calculateTotal(items = this.items): number {
    let total = 0
    items.forEach(i => i.price ? total += i.price : total)
    return total
  }
}