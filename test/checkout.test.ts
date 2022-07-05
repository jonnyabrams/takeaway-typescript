import Checkout from '../src/checkout'

describe('Checkout', () => {
  let checkout: Checkout

  beforeEach(() => {
    checkout = new Checkout
  })

  it('has an array for storing the order items', () => {
    expect(checkout.items).toEqual([])
  })

  describe('calculateTotal', () => {
    it('adds up the total cost of the items', () => {
      const items = [
        { item: 'burger', price: 5.25 }, 
        { item: 'burger', price: 5.25 },
        { item: 'pizza', price: 7.50 },
        { item: 'pizza', price: 7.50 },
      ]
      expect(checkout.calculateTotal(items)).toEqual(25.50)
    })
  })
})