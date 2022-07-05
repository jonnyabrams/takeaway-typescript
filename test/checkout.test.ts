import Checkout from '../src/checkout'

describe('Checkout', () => {
  let checkout: Checkout

  beforeEach(() => {
    checkout = new Checkout
  })

  const items = [
    { item: 'burger', price: 5.25 }, 
    { item: 'burger', price: 5.25 },
    { item: 'pizza', price: 7.50 },
    { item: 'pizza', price: 7.50 },
  ]

  it('has an array for storing the order items', () => {
    expect(checkout.items).toEqual([])
  })

  describe('printBill', () => {
    it('prints a bill with each item, its cost and a total', () => {
      expect(checkout.printBill(items)).toEqual("burger: £5.25\nburger: £5.25\npizza: £7.50\npizza: £7.50\nTotal: £25.50")
    })
  })

  describe('calculateTotal', () => {
    it('adds up the total cost of the items', () => {
      expect(checkout.calculateTotal(items)).toEqual(25.50)
    })
  })
})