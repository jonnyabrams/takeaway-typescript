interface MenuItem {
  id: number
  item: string
  price: number
}

const menu: MenuItem[] = [
  {
    id: 1,
    item: 'burger',
    price: 5.25
  },
  {
    id: 2,
    item: 'pizza',
    price: 7.50
  },
  {
    id: 3,
    item: 'kebab',
    price: 6
  },
  {
    id: 4,
    item: 'cola',
    price: 1
  },
  {
    id: 5,
    item: 'water',
    price: 0.50
  },
  {
    id: 6,
    item: 'coffee',
    price: 1.25
  },
]

module.exports = menu