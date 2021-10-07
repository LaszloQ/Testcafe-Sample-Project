import { baseUrl, inventory } from "../constants/paths";
import { standardUser } from "../constants/roles";
import { getCurrentUrl } from "../helpers/client_functions";
import ProductsListPage from '../pages/products_list_page';
import { loginScenarios } from "../scenarios/login-scenarios";
import LoginPage from '../pages/login_page';


fixture`Log in`
    .page(baseUrl)
    .beforeEach(async t => {
        await t.maximizeWindow()
    });


test(`Log in with valid credentials`, async t => {
    await t.useRole(standardUser)

    const isProductsVisible = await ProductsListPage.isItemsVisible();
    const url = await getCurrentUrl();

    await t
        .expect(url).eql(`${baseUrl}${inventory}`)
        .expect(isProductsVisible).eql(true)
});


loginScenarios.forEach(scenario => {
    test(`Trigger error with ${scenario.name}`, async t => {
        await LoginPage.typeUser(scenario.userName);
        await LoginPage.typePassword(scenario.password);
        await LoginPage.clickLoginButton();

        const isErrorDisplayed = await LoginPage.errorContainer.visible;
        const errorText = await LoginPage.errorContainer.innerText;

        await t
            .expect(isErrorDisplayed).eql(true)
            .expect(errorText).eql(scenario.expectedError)
    });
});