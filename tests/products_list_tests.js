import { standardUser } from "../constants/roles";
import ShoppingCartItem from "../models/cart_item_model";
import Product from "../models/product_model";
import ProductsListPage from "../pages/products_list_page";


fixture`Products list`
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .useRole(standardUser)
    });


test(`Any item can be added to the shopping cart from the product list page`, async t => {
    const noOfItems = await ProductsListPage.inventoryItems.count;
    const randomProduct = new Product(Math.floor(Math.random() * noOfItems));
    const productDetails = await randomProduct.getDetails();

    await randomProduct.addToCart();

    const shoppingCartNumber = await ProductsListPage.getShoppingCartNumber();
    const isAddToCartButtonAvailable = await randomProduct.addToCartButton.exists;
    const isRemoveButtonVisible = await randomProduct.removeFromCartButton.visible;

    await t
        .expect(shoppingCartNumber).eql('1')
        .expect(isAddToCartButtonAvailable).eql(false)
        .expect(isRemoveButtonVisible).eql(true)

    await ProductsListPage.openShoppingCart();

    const cartItemDetails = await new ShoppingCartItem(0).getDetails();
    //compare name, decription and price from product list page with shopping cart
    await t.expect(productDetails).eql(cartItemDetails)
});