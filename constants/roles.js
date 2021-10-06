import { Role } from 'testcafe';
import { baseUrl } from '../constants/paths';
import { refreshPage, setCookie } from '../helpers/client_functions';
import LoginPage from '../pages/login_page';


export const standardUser = new Role(baseUrl, async t => {
    await LoginPage.typeUser(process.env.STANDARD_USER)
    await LoginPage.typePassword(process.env.USER_PASSWORD)
    await LoginPage.clickLoginButton()
    //set cookies manually, because login state doesn't persist
    await setCookie('session-username', 'standard_user')
    await refreshPage()
    //login state still doesn't persist
});


