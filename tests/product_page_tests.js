import { standardUser } from "../constants/roles";
import Product from "../models/product_model";
import ProductsListPage from "../pages/products_list_page";
import ProductDetailPage from '../pages/product_detail_page';



fixture`Product page`
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .useRole(standardUser)
    });


test(`Any item can be added to the shopping cart from the product page`, async t => {
    const noOfItems = await ProductsListPage.inventoryItems.count;
    const randomProduct = new Product(Math.floor(Math.random() * noOfItems));

    await randomProduct.enterDetailPage();
    await ProductDetailPage.addToCart();

    const shoppingCartNumber = await ProductsListPage.getShoppingCartNumber();
    const isAddToCartButtonAvailable = await ProductDetailPage.addToCartButton.exists;
    const isRemoveButtonVisible = await ProductDetailPage.removeFromCartButton.visible;

    await t
        .expect(shoppingCartNumber).eql('1')
        .expect(isAddToCartButtonAvailable).eql(false)
        .expect(isRemoveButtonVisible).eql(true)
});


test(`Product details match with product list details`, async t => {
    const noOfItems = await ProductsListPage.inventoryItems.count;
    const randomProduct = new Product(Math.floor(Math.random() * noOfItems));
    const productDetailsOnListPage = await randomProduct.getDetails();

    await randomProduct.enterDetailPage();

    const productDetailsOnDetailpage = await ProductDetailPage.getDetails();

    await t.expect(productDetailsOnListPage).eql(productDetailsOnDetailpage)
});