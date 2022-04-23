export default class basket {
    //selectors
   

    //functions
    checkBasketTitle() {
        cy.get(".ec-header-h1.page-title__name").contains("Checkout")
    }
    checkItemQuanty(index) {
        cy.get(".form-control__select-text").contains(index)
    }
    checkbasketTotal(total) {
        cy.wait(800)
        cy.get(".ec-cart-summary__total").contains(total)
    }
    removeItemfromBasket(index) {
        cy.get(`[aria-label="Remove Item"]`).eq(index).click()
    }
    checkBasketIsEmpty() {
        cy.get(".ec-cart__message").contains("Your shopping cart is empty")
    }
   
}