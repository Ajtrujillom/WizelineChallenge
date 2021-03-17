import LoginPage from '../pages/loginPage'
import ProductsPage from '../pages/productsPage'
import { PRODUCTS, WEBSITE,CREDENTIALS } from '../data/dataProvider'
import ShoppingCartPage from '../pages/shoppingCartPage'
import InformationPage from '../pages/informationPage'
import OverviewPage from '../pages/overviewPage'
import CheckoutPage from '../pages/checkoutPage'
import FinalOrderPage from '../pages/finalOrderPage'
import Utils from '../utils/utils'
import {Role} from 'testcafe'

const items = [PRODUCTS.ITEMS[0], PRODUCTS.ITEMS[1], PRODUCTS.ITEMS[2]]

const standard_user = Role(WEBSITE.URL, async t => {
    await t
        .maximizeWindow()
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton);
}, { preserveUrl: true });


fixture('SauceDemo')


test('Test 01 Login with valid user', async t => {
    await t.useRole(standard_user)
    await t.expect(ProductsPage.productsHeader.exists).ok()
})

test('Test 02 Login with invalid user', async t => {
    await t.navigateTo(WEBSITE.URL)
    await  LoginPage.invalidLoginStep()
    await  t.expect(LoginPage.errorMessage.exists).ok()
})

test('Test 03 Logout from products page', async t => {
    await t.useRole(standard_user)
    await ProductsPage.logoutProductsPage()
    await t.expect(LoginPage.usernameField.exists).ok()
})    

test('Test 04 Navigate to the shopping cart', async t => {
    await t.useRole(standard_user)
    await ShoppingCartPage.navigateToShoppingCart()
    await t.expect(ShoppingCartPage.yourCartHeader.exists).ok()
})

test('Test 05 Add a single item to the shopping cart', async t => {
    await t.useRole(standard_user)
    await ProductsPage.addSingleItem(0)
    await ShoppingCartPage.navigateToShoppingCart()
    await t.expect(await ShoppingCartPage.isItemInCart(items[0])).ok()
})

test('Test 06 Add multiple items to the shopping cart', async t => {
    await t.useRole(standard_user)
    await Utils.addMultipleItems(items)    
    await ShoppingCartPage.navigateToShoppingCart()
    for(let index=0;index<items.length;index++){
        await t.expect(await ShoppingCartPage.isItemInCart(items[index])).ok()
    }
    
   
})

test('Test 07 Continue with missing mail information', async t => {
    await t.useRole(standard_user)
    await Utils.addMultipleItems(items)
    await ShoppingCartPage.navigateToShoppingCart()
    await ShoppingCartPage.clickCheckoutButton()
    await InformationPage.fillWithMissingMail()
    await t.expect(InformationPage.errorMessage.exists).ok()
    
})
test('Test 08 Fill user´s information', async t => {
    await t.useRole(standard_user)
    await Utils.addMultipleItems(items)
    await ShoppingCartPage.navigateToShoppingCart()
    await ShoppingCartPage.clickCheckoutButton()
    await InformationPage.fillUserInformation()
    await t.expect(OverviewPage.overviewHeader.exists).ok()
})

test('Test 09 Final order items', async t => {
    await t.useRole(standard_user)
    await Utils.addMultipleItems(items)
    await ShoppingCartPage.navigateToShoppingCart()
    await ShoppingCartPage.clickCheckoutButton()
    await InformationPage.fillUserInformation()
    for (let index = 0; index < items.length; index++) {
        await t.expect(await CheckoutPage.isItemInCheckout(items[index])).ok()
    }

})

test('Test 10 Order is completed', async t => {
    await t.useRole(standard_user)
    await Utils.addMultipleItems(items)
    await ShoppingCartPage.navigateToShoppingCart()
    await ShoppingCartPage.clickCheckoutButton()
    await InformationPage.fillUserInformation()
    await CheckoutPage.clickFinishButton()
    await t.expect(FinalOrderPage.isThankYouHeaderVisible).ok()
})
