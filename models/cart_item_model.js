import ShoppingCartPage from '../pages/shopping_cart_page';


export default class ShoppingCartItem {
    constructor(index) {
        this.container = ShoppingCartPage.items.nth(index);
        this.name = this.container.find('.inventory_item_name');
        this.description = this.container.find('.inventory_item_desc');
        this.price = this.container.find('.inventory_item_price');
    }

    async getDetails() {
        return {
            name: await this.name.innerText,
            description: await this.description.innerText,
            price: await this.price.innerText
        }
    }
}