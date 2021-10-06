import { Selector, t } from "testcafe";


class ProductPage {
    constructor() {
        this.inventoryItems = Selector('.inventory_item');
    }

    async isItemsVisible() {
        return await this.inventoryItems.visible;
    }
}


export default new ProductPage();