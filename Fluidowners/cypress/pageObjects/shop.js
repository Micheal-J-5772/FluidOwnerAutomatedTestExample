export default class shop {


    //selectors
     getShopItem(item) {
        return cy.xpath(`//div[@class='grid__wrap-inner']/div//a[@title='${item}']//div[4]`)
    } 


    //functions
    checkShopHightlighted() {

        cy.get('.nav-content')
            .within(() => {
                cy.get('li').eq('1').should('have.class', 'active')
            })
    }

    clickShopItem(item){
            this.getShopItem(item).click()
    }

   checkTitle(Title) {
        cy.get('.nav-content')
            .within(() => {
                cy.get('li').eq('1').should('contain', Title)
            })
}
