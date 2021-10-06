import { Role } from 'testcafe';
import { baseUrl } from '../constants/paths';
import LoginPage from '../pages/login_page';


export const standardUser = new Role(baseUrl, async t => {
    await LoginPage.typeUser(process.env.STANDARD_USER)
    await LoginPage.typePassword(process.env.USER_PASSWORD)
    await LoginPage.clickLoginButton()
});


