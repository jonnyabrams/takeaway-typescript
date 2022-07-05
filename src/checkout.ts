export default class Checkout {
  items: { item: string | undefined, price: number | undefined }[]

  constructor() {
    this.items = []
  }
}