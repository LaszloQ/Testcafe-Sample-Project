import { Selector, t } from "testcafe";
import Product from '../models/product_model';


class ProductsListPage {
    constructor() {
        this.inventoryItems = Selector('.inventory_item');
        this.shoppingCartBadge = Selector('.shopping_cart_badge');
        this.shoppingCartButton = Selector('.shopping_cart_link');
        this.productSortDropdown = Selector('.product_sort_container');
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

    async getAllProductPrices() {
        const allProductPrices = [];
        const noOfItems = await this.inventoryItems.count;

        for (let i = 0; i < noOfItems; i++) {
            allProductPrices.push(await new Product(i).price.innerText)
        }

        return allProductPrices
    }

    async getAllProductNames() {
        const allProductNames = [];
        const noOfItems = await this.inventoryItems.count;

        for (let i = 0; i < noOfItems; i++) {
            allProductNames.push(await new Product(i).name.innerText)
        }

        return allProductNames;
    }

    //possible parameters can be 'az', 'za', 'lohi', 'hilo'
    async sortProductsBy(value) {
        await t
            .click(this.productSortDropdown)
            .click(this.productSortDropdown.find(`option[value='${value}']`))
    }
}


export default new ProductsListPage();