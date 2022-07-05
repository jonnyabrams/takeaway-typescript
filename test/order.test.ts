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
    it('adds an item to the basket with a default quantity of one', () => {
      order.addItem(1)
      expect(order.basket).toEqual([{ item: 'burger', price: 5.25 }])
    })

    it('throws an error if the item is not on the menu', () => {
      expect(() => {order.addItem(7)}).toThrowError('Item not on menu')
    })
  })
})
