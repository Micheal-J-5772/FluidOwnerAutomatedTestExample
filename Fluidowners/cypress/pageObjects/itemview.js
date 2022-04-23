export default class itemview {


    //selectors
    addBasketButton() {
        // return cy.get(".form-control__button")
        return cy.contains("Add to Bag")
    }

    openBasketButton() {
        return cy.xpath(`//*[@id="my-store-31436065"]/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/div[2]/ul/li[3]/a`)
    }
    navigateShopButton() {
        return cy.get('a').contains("Shop")
    }

    //functions
    checkItemPrice(price) {
        cy.xpath(`//span[@class='details-product-price__value ec-price-item notranslate']`).contains(price)
    }

    SelectOption() {

    }

    clickAddBasketButton() {
        this.addBasketButton().click()
    }
    clickOpenBasketButton() {
        this.openBasketButton().click()
    }
    clickNavigateToShopButton() {
        this.navigateShopButton().click()
        cy.wait(1200)
    }
    checkItemName(name) {
        cy.get(".product-details__top").contains(name)
    }
}
