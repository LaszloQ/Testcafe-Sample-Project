import { Selector, t } from "testcafe";


class ProductDetailPage {
    constructor() {
        this.productName = Selector('.inventory_details_name');
        this.productDescription = Selector('.inventory_details_desc');
        this.productPrice = Selector('.inventory_details_price');
        this.addToCartButton = Selector("button[id^='add-to-cart']");
        this.removeFromCartButton = Selector("button[id^='remove']");
    }

    async getDetails() {
        return {
            name: await this.productName.innerText,
            description: await this.productDescription.innerText,
            price: await this.productPrice.innerText
        }
    }

    async addToCart() {
        await t.click(this.addToCartButton)
    }
}


export default new ProductDetailPage()