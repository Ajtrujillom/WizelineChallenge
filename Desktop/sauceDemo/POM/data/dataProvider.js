import * as dotenv from 'dotenv';
dotenv.config()
export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.USER_NAME,
        PASSWORD: process.env.PASSCODE
    },

    INVALID_USER: {
        USERNAME: process.env.INVALID_USER,
        PASSWORD: process.env.INVALID_PASS

    }
}

export const USER_CONTACT_INFO = {
    FIRST_NAME: 'Andrés',
    LAST_NAME: 'Trujillo',
    ZIP_CODE: '07730'
}

export const WEBSITE = {
    URL: 'https://www.saucedemo.com/'
}

export const PRODUCTS = {
    ITEMS: ['Sauce Labs Backpack',
     'Sauce Labs Bolt T-Shirt',
      'Sauce Labs Onesie',
       'Sauce Labs Bike Light',
        'Sauce Labs Fleece Jacket',
        'Test.allTheThings() T-Shirt (Red)']
}
