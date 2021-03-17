import { Selector, t } from 'testcafe'
import { CREDENTIALS} from '../data/dataProvider'




class LoginPage {
    constructor () {
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorButton = Selector('.error-button')
        this.errorMessage = Selector('h3[data-test="error"]')

    }

    async loginStep() {
        
        await t.typeText(this.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        await t.typeText(this.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
        await t.click(this.loginButton) 

    }
    
    async invalidLoginStep() {

        await t.typeText(this.usernameField,CREDENTIALS.INVALID_USER.USERNAME)
        await t.typeText(this.passwordField,CREDENTIALS.INVALID_USER.PASSWORD)
        await t.click(this.loginButton)
    }    
}

export default new LoginPage()
