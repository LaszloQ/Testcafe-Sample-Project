import { Selector, t } from "testcafe";


class ShoppingCartPage {
    constructor() {
        this.items = Selector('.cart_item');
    }
}


export default new ShoppingCartPage();