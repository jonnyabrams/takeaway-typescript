"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("../src/order"));
describe('Order', () => {
    let order;
    beforeEach(() => {
        order = new order_1.default;
    });
    it('initialises with an empty basket for adding items to', () => {
        expect(order.basket).toEqual([]);
    });
    describe('addItem', () => {
        it('adds an item to the basket with a default quantity of one', () => {
            order.addItem(1);
            expect(order.basket).toEqual([{ item: 'burger', price: 5.25 }]);
        });
        it('can add multiples of the same item if quantity is specified', () => {
            order.addItem(1, 2);
            expect(order.basket).toEqual([{ item: 'burger', price: 5.25 }, { item: 'burger', price: 5.25 }]);
        });
        it('throws an error if item is not on the menu', () => {
            expect(() => { order.addItem(7); }).toThrowError('Item not on menu');
        });
    });
});
