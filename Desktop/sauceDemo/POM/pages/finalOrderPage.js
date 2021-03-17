import { Selector, t } from 'testcafe'

class FinalOrderPage {
    constructor(){
        this.thankYouHeader = Selector('h2.complete-header')

    }

    async isThankYouHeaderVisible()  {
        return await this.thankYouHeader.exists

    }

}

export default new FinalOrderPage()