import { Selector, t } from 'testcafe'

class CheckoutPage {
    constructor() {
        this.finishButton = Selector('a.btn_action')
    }

    async isItemInCheckout(itemName) {
        return await Selector('div.inventory_item_name').withText(itemName).exists;
    }



    async clickFinishButton() {
        await t
            .click(this.finishButton)

    }



}

export default new CheckoutPage()