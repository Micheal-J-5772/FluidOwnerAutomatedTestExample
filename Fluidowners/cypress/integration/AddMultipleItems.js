import Homepage from "../pageObjects/homepage"
import Shop from "../pageObjects/shop"
import ItemView from "../pageObjects/itemview"
import Basket from "../pageObjects/basket"
const homepage = new Homepage()
const shop = new Shop()
const itemView = new ItemView()
const basket = new Basket()

describe('Ensures you can add a product to the basket and price is correct ' , () => {
    it('Item added to basket and total is correct' , () => {
        cy.visit('https://fluidowners.co.uk/')
        homepage.checkWebpagetTitle()
        homepage.clickShopButton()
        shop.checkShopHightlighted()
        shop.clickShopItem("Gift card")
        itemView.checkItemName("Gift card")
        itemView.checkItemPrice("£50")
        itemView.clickAddBasketButton()

        itemView.clickNavigateToShopButton()
        shop.clickShopItem("Fluid Decal")
        itemView.checkItemPrice("£1.79")
        itemView.clickAddBasketButton()
        
        itemView.clickOpenBasketButton()
        basket.checkBasketTitle()
        basket.checkItemQuanty("2")
        basket.checkbasketTotal("£51.84")

        //tearDown

        basket.removeItemfromBasket(0)
        basket.removeItemfromBasket(0)
        basket.checkBasketIsEmpty()
    })
})