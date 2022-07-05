import Order from '../src/order'

describe('Order', () => {
  let order: Order

  beforeEach(() => {
    order = new Order
  })

  it('initialises with an empty basket for adding items to', () => {
    expect(order.basket).toEqual([])
  })
})