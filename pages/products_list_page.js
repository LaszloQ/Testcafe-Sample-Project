import { Selector, t } from "testcafe";


class ProductsListPage {
    constructor() {
        this.inventoryItems = Selector('.inventory_item');
        this.shoppingCartBadge = Selector('.shopping_cart_badge');
        this.shoppingCartButton = Selector('.shopping_cart_link');
    }

    async isItemsVisible() {
        return await this.inventoryItems.visible;
    }

    async getShoppingCartNumber() {
        return await this.shoppingCartBadge.innerText;
    }

    async openShoppingCart() {
        await t.click(this.shoppingCartButton)
    }
}


export default new ProductsListPage();