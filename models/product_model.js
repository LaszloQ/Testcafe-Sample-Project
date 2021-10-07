import { Selector, t } from 'testcafe';
import ProductsListPage from '../pages/products_list_page';


export default class Product {
    constructor(index) {
        this.container = ProductsListPage.inventoryItems.nth(index);
        this.name = this.container.find('.inventory_item_name');
        this.description = this.container.find('.inventory_item_desc');
        this.price = this.container.find('.inventory_item_price');
        this.addToCartButton = this.container.find("button[id^='add']");
        this.removeFromCartButton = this.container.find("button[id^='remove']");
    }

    async getDetails() {
        return {
            name: await this.name.innerText,
            description: await this.description.innerText,
            price: await this.price.innerText,
        }
    }


    async addToCart() {
        await t.click(this.addToCartButton)
    }


    async removeFromCartButton() {
        await t.click(this.removeFromCartButton)
    }
}