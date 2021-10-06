import { Selector } from 'testcafe';


class LoginPage {
    cnstructor() {
        this.userInput = Selector('#user-name');
        this.passwordInput = Selector('#password');
        this.loginButton = Selector('#login-button');
    }

    async typeUser(t, username) {
        await t.typeText(this.userInput, username, {replace:true})
    }

    async typePassword(t, password) {
        await t.typeText(this.passwordInput, password, {replace:true})
    }
}


export default new LoginPage();