import { Selector, t } from 'testcafe'

class OverviewPage {
    constructor(){
        this.overviewHeader = Selector('div.subheader')
        this.finishButton = Selector('a.btn_action')
    }
}

export default new OverviewPage()