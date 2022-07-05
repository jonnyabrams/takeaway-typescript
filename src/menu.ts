interface MenuItem {
  item: string
  price: number
}

const menu: MenuItem[] = [
  {
    item: 'burger',
    price: 5.25
  },
  {
    item: 'pizza',
    price: 7.50
  },
  {
    item: 'kebab',
    price: 6
  },
  {
    item: 'cola',
    price: 1
  },
  {
    item: 'water',
    price: 0.50
  },
  {
    item: 'coffee',
    price: 1.25
  },
]

console.log(menu[0])

module.exports = menu