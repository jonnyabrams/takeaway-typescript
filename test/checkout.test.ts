import Checkout from '../src/checkout'

describe('Checkout', () => {
  let checkout: Checkout

  beforeEach(() => {
    checkout = new Checkout
  })

  it('has an array for storing the order items', () => {
    expect(checkout.items).toEqual([])
  })
})