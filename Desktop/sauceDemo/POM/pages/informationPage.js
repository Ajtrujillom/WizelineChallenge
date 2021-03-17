import { Selector, t } from 'testcafe'
import { USER_CONTACT_INFO } from '../data/dataProvider'

class InformationPage {
    constructor() {
        this.firtsNameTextBox = Selector('.form_input#first-name')
        this.lastNameTextBox = Selector('.form_input#last-name')
        this.zipTextBox = Selector('.form_input#postal-code')
        this.continueButton = Selector('.btn_primary')
        this.errorMessage = Selector("h3[data-test='error']")
    }
    async fillWithMissingMail() {
        await t
            .typeText(this.firtsNameTextBox, USER_CONTACT_INFO.FIRST_NAME)
            .typeText(this.lastNameTextBox, USER_CONTACT_INFO.LAST_NAME)
            .click(this.continueButton)

    }

    async fillUserInformation() {
        await t
            .typeText(this.firtsNameTextBox, USER_CONTACT_INFO.FIRST_NAME)
            .typeText(this.lastNameTextBox, USER_CONTACT_INFO.LAST_NAME)
            .typeText(this.zipTextBox, USER_CONTACT_INFO.ZIP_CODE)
            .click(this.continueButton)

    }
}

export default new InformationPage()