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
            expect(order.basket).toEqual([{ item: 'burger', itemId: 1, price: 5.25 }]);
        });
        it('can add multiples of the same item if quantity is specified', () => {
            order.addItem(1, 2);
            expect(order.basket).toEqual([{ item: 'burger', itemId: 1, price: 5.25 }, { item: 'burger', itemId: 1, price: 5.25 }]);
            order.addItem(2, 2);
            expect(order.basket).toEqual([
                { item: 'burger', itemId: 1, price: 5.25 },
                { item: 'burger', itemId: 1, price: 5.25 },
                { item: 'pizza', itemId: 2, price: 7.50 },
                { item: 'pizza', itemId: 2, price: 7.50 },
            ]);
        });
        it('throws an error if item is not on the menu', () => {
            expect(() => { order.addItem(7); }).toThrowError('Item not on menu');
        });
    });
    describe('removeItem', () => {
        it('removes an item from the basket', () => {
            order.addItem(1);
            order.removeItem(1);
            expect(order.basket).toEqual([]);
        });
        it('only removes one item at a time unless quantity is specified', () => {
            order.addItem(1, 2);
            order.removeItem(1);
            expect(order.basket).toEqual([{ item: 'burger', itemId: 1, price: 5.25 }]);
            order.addItem(1);
            order.removeItem(1, 2);
            expect(order.basket).toEqual([]);
        });
        it('throws an error if item is not in basket', () => {
            order.addItem(1);
            expect(() => { order.removeItem(2); }).toThrowError('Item not found');
            expect(() => { order.removeItem(8); }).toThrowError('Item not found');
        });
        it('throws an error if specified quantity exceeds basket quantity', () => {
            order.addItem(1, 2);
            expect(() => { order.removeItem(1, 3); }).toThrowError('Invalid request');
        });
    });
});
