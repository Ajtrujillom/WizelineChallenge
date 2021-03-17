import {Selector, t } from 'testcafe'

class ShoppingCartPage {
    constructor() {
        this.shoppingCartButton = Selector('a.shopping_cart_link')
        this.checkoutButton = Selector('a.btn_action')
        this.continueShoppingButton = Selector('a.btn_secondary')
        this.yourCartHeader = Selector('.subheader')
        this.addToCartItem = Selector('.btn_primary')
        this.isCartItems = Selector('.cart_item')

    }

     async isItemInCart(itemName){
         return await Selector('div.inventory_item_name').withText(itemName).exists;
    }

    async navigateToShoppingCart() {
        await t
            
            .click(this.shoppingCartButton)

    }       

    async clickCheckoutButton() {
        await t
            .click(this.checkoutButton)

    }

    

}

export default new ShoppingCartPage()