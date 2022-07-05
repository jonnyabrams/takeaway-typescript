import Order from '../src/order'

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

    it('can add multiples of the same item if quantity is specified', () => {
      order.addItem(1, 2)
      expect(order.basket).toEqual([{ item: 'burger', price: 5.25 }, { item: 'burger', price: 5.25 }])
      order.addItem(2, 2)
      expect(order.basket).toEqual([
        { item: 'burger', price: 5.25 }, 
        { item: 'burger', price: 5.25 },
        { item: 'pizza', price: 7.50 },
        { item: 'pizza', price: 7.50 },
      ])
    })

    it('throws an error if item is not on the menu', () => {
      expect(() => {order.addItem(7)}).toThrowError('Item not on menu')
    })
  })

  describe('removeItem', () => {
    it('removes an item from the basket', () => {
      order.addItem(1)
      order.removeItem('burger')
      expect(order.basket).toEqual([])
    })

    it('only removes one item at a time unless quantity is specified', () => {
      order.addItem(1, 2)
      order.removeItem('burger')
      expect(order.basket).toEqual([{ item: 'burger', price: 5.25 }])
      order.addItem(1)
      order.removeItem('burger', 2)
      expect(order.basket).toEqual([])
    })

    it('throws an error if item is not in basket', () => {
      order.addItem(1)
      expect(() => {order.removeItem('pizza')}).toThrowError('Item not found')
      expect(() => {order.removeItem('sandwich')}).toThrowError('Item not found')
    })

    it('throws an error if specified quantity exceeds basket quantity', () => {
      order.addItem(1, 2)
      expect(() => {order.removeItem('burger', 3)}).toThrowError('Invalid request')
    })
  })
})
