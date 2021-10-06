import { baseUrl } from "../constants/paths";
import { standardUser } from "../constants/roles";


fixture`Log in`
    .page(baseUrl)
    .beforeEach(async t => {
        await t.maximizeWindow()
    })


test(`Log in with valid credentials`, async t => {
    await t
        .useRole(standardUser)
        .expect(true).eql(true)
});


test(`Receive error on invalid credentials`, async t => {

});