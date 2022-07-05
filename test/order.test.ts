import Order from '../src/order'

interface MenuItem {
  id: number
  item: string
  price: number
}

describe('Order', () => {
  let order: Order

  beforeEach(() => {
    order = new Order
  })

  it('initialises with an empty basket for adding items to', () => {
    expect(order.basket).toEqual([])
  })

  describe('addItem', () => {
    it('adds an item to the basket', () => {
      order.addItem(1)
      expect(order.basket).toEqual([{ item: 'burger', quantity: 1, price: 5.25 }])
    })

    it('throws an error if the item is not on the menu', () => {
      expect(() => {order.addItem(7)}).toThrowError('Item not on menu')
    })
  })
})
