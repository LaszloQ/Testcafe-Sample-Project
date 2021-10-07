import { Selector, t } from 'testcafe';


class LoginPage {
    constructor() {
        this.userInput = Selector('#user-name');
        this.passwordInput = Selector('#password');
        this.loginButton = Selector('#login-button');
        this.errorContainer = Selector('.error-message-container');
    }

    async typeUser(username) {
        await t.typeText(this.userInput, username, { replace: true })
    }

    async typePassword(password) {
        await t.typeText(this.passwordInput, password, { replace: true })
    }

    async clickLoginButton() {
        await t.click(this.loginButton)
    }
};


export default new LoginPage();