export default class homepage {
    //selectors

shopbutton() {
    return cy.get('a').contains("Shop!")
}


    //functions
    checkWebpagetTitle() {
      
            cy.get('h2').contains("Welcome to the Fluid MINI Owners Group")
        
    }

    clickShopButton() {
        this.shopbutton().click()
    }
    
}