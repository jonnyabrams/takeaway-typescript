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

  removeItem(orderedItem: string, quantity: number = 1): void {
    this.#handleRemoveItemErrors(orderedItem, quantity)

    this.basket.splice(this.basket.findIndex(({ item }) => item === orderedItem), quantity)
  }

  #handleAddItem(itemId: number, quantity: number = 1): void {
    for (let i = 0; i < quantity; i++) {
      this.basket.push({ 
        item: this.items.find(i => i.id === itemId)?.item, 
        price: this.items.find(i => i.id === itemId)?.price
      })
    }
  }

  #handleRemoveItemErrors(orderedItem: string, quantity: number = 1): void {
    const found = this.basket.some(i => i.item === orderedItem)
    if (!found) throw new Error('Item not found')
    if (quantity > this.basket.filter(i => i.item === orderedItem).length) throw new Error('Invalid request')
  }
}
