import ProductsPage from '../pages/productsPage'

class Utils{

    async addMultipleItems(items){
        for (let index = 0; index < items.length; index++) {
            await ProductsPage.addSingleItem(index)
        }
    }
}

export default new Utils()