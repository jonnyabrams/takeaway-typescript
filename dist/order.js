"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const menu_1 = __importDefault(require("./menu"));
class Order {
    constructor(items = menu_1.default) {
        this.basket = [];
        this.items = items;
    }
    addItem(itemId, quantity = 1) {
        var _a, _b;
        if (this.items.find(i => i.id === itemId) === undefined)
            throw new Error('Item not on menu');
        for (let i = 0; i < quantity; i++) {
            this.basket.push({
                item: (_a = this.items.find(i => i.id === itemId)) === null || _a === void 0 ? void 0 : _a.item,
                price: (_b = this.items.find(i => i.id === itemId)) === null || _b === void 0 ? void 0 : _b.price
            });
        }
    }
}
exports.default = Order;
