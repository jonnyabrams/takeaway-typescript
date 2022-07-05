"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Order_instances, _Order_handleAddItem, _Order_handleRemoveItemErrors;
Object.defineProperty(exports, "__esModule", { value: true });
const menu_1 = __importDefault(require("./menu"));
class Order {
    constructor(items = menu_1.default) {
        _Order_instances.add(this);
        this.basket = [];
        this.items = items;
    }
    addItem(itemId, quantity = 1) {
        if (this.items.find(i => i.id === itemId) === undefined)
            throw new Error('Item not on menu');
        __classPrivateFieldGet(this, _Order_instances, "m", _Order_handleAddItem).call(this, itemId, quantity);
    }
    removeItem(orderedItemId, quantity = 1) {
        __classPrivateFieldGet(this, _Order_instances, "m", _Order_handleRemoveItemErrors).call(this, orderedItemId, quantity);
        this.basket.splice(this.basket.findIndex(({ itemId }) => itemId === orderedItemId), quantity);
    }
}
exports.default = Order;
_Order_instances = new WeakSet(), _Order_handleAddItem = function _Order_handleAddItem(itemId, quantity = 1) {
    var _a, _b, _c;
    for (let i = 0; i < quantity; i++) {
        this.basket.push({
            item: (_a = this.items.find(i => i.id === itemId)) === null || _a === void 0 ? void 0 : _a.item,
            itemId: (_b = this.items.find(i => i.id === itemId)) === null || _b === void 0 ? void 0 : _b.id,
            price: (_c = this.items.find(i => i.id === itemId)) === null || _c === void 0 ? void 0 : _c.price
        });
    }
}, _Order_handleRemoveItemErrors = function _Order_handleRemoveItemErrors(orderedItemId, quantity = 1) {
    const found = this.basket.some(i => i.itemId === orderedItemId);
    if (!found)
        throw new Error('Item not found');
    if (quantity > this.basket.filter(i => i.itemId === orderedItemId).length)
        throw new Error('Invalid request');
};
