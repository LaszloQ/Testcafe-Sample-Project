import { baseUrl, inventory } from "../constants/paths";
import { standardUser } from "../constants/roles";
import { getCurrentUrl } from "../helpers/client_functions";
import ProductPage from '../pages/products_page';


fixture`Log in`
    .page(baseUrl)
    .beforeEach(async t => {
        await t.maximizeWindow()
    })


test(`Log in with valid credentials`, async t => {
    await t.useRole(standardUser)

    const isProductsVisible = await ProductPage.isItemsVisible();
    const url = await getCurrentUrl();

    await t
        .expect(url).eql(`${baseUrl}${inventory}`)
        .expect(isProductsVisible).eql(true)
});