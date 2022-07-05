import menu from './menu'

export default class Order {
  basket: { item: string | undefined, price: number | undefined }[]
  items: { id: number, item: string, price: number }[]

  constructor(items = menu) {
    this.basket = []
    this.items = items
  }

  addItem(itemId: number, quantity: number = 1): void {
    if (this.items.find(i => i.id === itemId) === undefined) throw new Error('Item not on menu')
    
    this.#handleAddItem(itemId, quantity)
  }

  #handleAddItem(itemId: number, quantity: number = 1): void {
    for (let i = 0; i < quantity; i++) {
      this.basket.push({ 
        item: this.items.find(i => i.id === itemId)?.item, 
        price: this.items.find(i => i.id === itemId)?.price
      })
    }
  }
}
