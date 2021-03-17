import { Selector, t } from 'testcafe'
import { PRODUCTS } from '../data/dataProvider'

class ProductsPage {
    constructor () {
        this.productsHeader = Selector('.product_label')
        this.menuButton = Selector('div.bm-burger-button button')
        this.logoutButton = Selector('a#logout_sidebar_link')
    }
    async logoutProductsPage(){
        await t
            .click(this.menuButton)
            .click(this.logoutButton)

    }
    async addSingleItem(itemIndex) {
        const item = Selector('.btn_primary').nth(itemIndex)
             await t
                   .click(item)
    }

}

export default new ProductsPage()